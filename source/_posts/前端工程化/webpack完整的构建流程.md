---
title: webpack完整的构建流程
author: Kq
categories: 前端工程化
tags:
  - webpack
  - 源码
abbrlink: 1a943f3e
date: 2020-12-11 17:02:08
---

## 基本工作流程

通常，在项目中有两种运行 Webpack 的方式：

1.基于命令行的方式

```bash
webpack --config webpack.config.js
```

2.基于代码的方式

```javascript
let webpack = require('webpack');
let config = require('./webpack.config');
webpack(config, (err, stats) => {});
```

### webpack.js 中的基本流程

无论用哪种方式运行，本质上都是执行 [webpack.js](https://github.com/webpack/webpack/blob/webpack-4/lib/webpack.js) 中的 Webpack 函数。这一函数的核心逻辑是：

1. 校验 options
1. 处理 options 默认值
1. 根据配置生成编译器实例 compiler
1. 处理参数中的插件
1. 分析参数，根据参数加载不同内部插件
1. 如果有回调函数，根据是否是 watch 模式来决定要执行 compiler.watch 还是 compiler.run
1. 返回 compiler 实例

```javascript
const webpack = (options, callback) => {
  // 1. 校验 options
  // 2. 处理 options 默认值
  options = new WebpackOptionsDefaulter().process(options);
  // 3. 实例化 compiler
  let compiler = new Compiler(options.context);
  // 4. 处理插件
  if (options.plugins && Array.isArray(options.plugins)) {
  }
  // 5. 分析参数，加载内部插件
  compiler.options = new WebpackOptionsApply().process(options, compiler); // 分析参数，加载各内部插件
  // 6. 处理回调函数，根据是否监听分为2种
  if (callback) {
    if (options.watch) {
      return compiler.watch(watchOptions, callback);
    }
    compiler.run(callback);
  }
  // 7. 返回 compiler 实例
  return compiler;
};
```

### Compiler.js 中的基本流程

编译器实例类内部逻辑在 [Compiler.js](https://github.com/webpack/webpack/blob/webpack-4/lib/Compiler.js) 中，这里分析抽象 compiler.run 函数，了解其主要的执行流程：

```javascript
class Compiler extends Tapable {
  constructor() {}

  watch(watchOptions, handler) {}

  run(callback) {
    const finalCallback = (err, stats) => {};

    const onCompiled = (err, compilation) => {
      if (err) return finalCallback(err);

      // ...

      this.emitAssets(compilation, (err) => {
        if (err) return finalCallback(err);

        // ...

        this.emitRecords((err) => {
          if (err) return finalCallback(err);

          // ...

          const stats = new Stats(compilation);
          stats.startTime = startTime;
          stats.endTime = Date.now();
          this.hooks.done.callAsync(stats, (err) => {
            if (err) return finalCallback(err);
            return finalCallback(null, stats);
          });
        });
      });
    };

    // 执行切入点
    this.hooks.beforeRun.callAsync(this, (err) => {
      if (err) return finalCallback(err);

      this.hooks.run.callAsync(this, (err) => {
        if (err) return finalCallback(err);

        this.readRecords((err) => {
          if (err) return finalCallback(err);

          this.compile(onCompiled);
        });
      });
    });
  }

  readRecords(callback) {}

  compile(callback) {
    const params = this.newCompilationParams();
    this.hooks.beforeCompile.callAsync(params, (err) => {
      if (err) return callback(err);

      this.hooks.compile.call(params);

      const compilation = this.newCompilation(params);

      this.hooks.make.callAsync(compilation, (err) => {
        if (err) return callback(err);

        compilation.finish((err) => {
          if (err) return callback(err);

          compilation.seal((err) => {
            if (err) return callback(err);

            this.hooks.afterCompile.callAsync(compilation, (err) => {
              if (err) return callback(err);

              return callback(null, compilation);
            });
          });
        });
      });
    });
  }

  newCompilationParams() {}

  newCompilation(params) {}

  emitAssets(compilation, callback) {}
}
```

1. **readRecords**：读取构建记录，用于分包缓存优化，在未设置 recordsPath 时直接返回。
1. **compile 的主要构建流程**：，涉及以下几各环节：
   1. **newCompilationParams**：创建 NormalModule 和 ContextModule 的工厂实例，用于创建后续模块实例。
   1. **newCompilation**：创建编译过程 Compilation 实例。
   1. **compiler.hooks.make.callAsync**：触发 make 的 Hook，执行所有监听 make 的插件。
   1. **compilation.finish**：编译过程实例的 finish 方法，触发相应的 Hook 并报告构建模块的错误和警告。
   1. **compilation.seal**：编译过程实例的 seal 方法。
1. **emitAssets**：调用 compilation.getAssets()，将产物内容写入输出文件中。
1. **emitRecords**：对应第一步的 readRecords，用于写入构建记录，在未设置 recordsPath 时直接返回。

> 我们可以看到，即使代码经过抽象简化，仍然存在不少的逻辑代码，阅读的方法是从切入点开始，跳过定义的回调函数，直接看执行部分，这样就会形成一条明确的函数调用链，这会对理解整个过程有很大帮助。

### Compilation.js 中的基本流程

这部分的源码位于 [Compilation.js](https://github.com/webpack/webpack/blob/webpack-4/lib/Compilation.js) 中。在编译执行过程中，我们主要从外部调用的是两个方法：

- **addEntry**：从 entry 开始递归添加和构建模块。
- **seal**：冻结模块，进行一系列优化，以及触发各优化阶段的 Hooks。

以上就是执行 Webpack 构建时的基本流程，这里再稍做总结：

1. 创建编译器 Compiler 实例。
1. 根据 Webpack 参数加载参数中的插件，以及程序内置插件。
1. 执行编译流程：创建编译过程 Compilation 实例，从入口递归添加与构建模块，模块构建完成后冻结模块，并进行优化。
1. 构建与优化过程结束后提交产物，将产物内容写到输出文件中。

## Webpack 生命周期

Webpack 工作流程中最核心的两个模块：**Compiler** 和 **Compilation** 都扩展自 Tapable 类，用于实现工作流程中的生命周期划分，以便在不同的生命周期节点上注册和调用插件。

### Webpack 中的插件

Webpack 引擎基于插件系统搭建而成，不同的插件各司其职，在 Webpack 工作流程的某一个或多个时间点上，对构建流程的某个方面进行处理。Webpack 就是通过这样的工作方式，在各生命周期中，经一系列插件将源代码逐步变成最后的产物代码。

一个 Webpack 插件是一个包含 **apply** 方法的 JavaScript 对象。这个 apply 方法的执行逻辑，通常是注册 Webpack 工作流程中某一生命周期 Hook，并添加对应 Hook 中该插件的实际处理函数。

### Hooks 的使用方式

Hook 的使用分为四步：

1. 在构造函数中定义 Hook 类型和参数，生成 Hook 对象。
1. 在插件中注册 Hook，添加对应 Hook 触发时的执行函数。
1. 生成插件实例，运行 apply 方法。
1. 在运行到对应生命周期节点时调用 Hook，执行注册过的插件的回调函数。

如下面的代码所示：

```javascript
// lib/Compiler.js
this.hooks = {
  ...
  make: new SyncHook(['compilation', 'params']), // 1.定义Hook
  ...
}
...
this.hooks.make.call(compilation, params); // 4.调用Hook
...

// lib/dependencies/CommonJsPlugin.js
// 2.在插件中注册Hook
compiler.hooks.make.tap("CommonJSPlugin", (compilation, { contextModuleFactory, normalModuleFactory }) => {
  ...
})

// lib/WebpackOptionsApply.js
// 3.生成插件实例，运行apply方法
new CommonJsPlugin(options.module).apply(compiler);
```

通过这种方式，Webpack 将编译器和编译过程的生命周期节点提供给外部插件，从而搭建起弹性化的工作引擎。

Hook 的类型按照同步或异步、是否接收上一插件的返回值等情况分为 9 种。不同类型的 Hook 接收注册的方法也不同，更多信息可参照[官方文档](https://github.com/webpack/tapable#tapable)。

### Compiler Hooks

构建器实例的生命周期可以分为 3 个阶段：初始化阶段、构建过程阶段、产物生成阶段。

**初始化阶段**

- environment、afterEnvironment：在创建完 compiler 实例且执行了配置内定义的插件的 apply 方法后触发。
- entryOption、afterPlugins、afterResolvers：在 WebpackOptionsApply.js 中，这 3 个 Hooks 分别在执行 EntryOptions 插件和其他 Webpack 内置插件，以及解析了 resolver 配置后触发。

**构建过程阶段**

- normalModuleFactory、contextModuleFactory：在两类模块工厂创建后触发。
- beforeRun、run、watchRun、beforeCompile、compile、thisCompilation、compilation、make、afterCompile：在运行构建过程中触发。

**产物生成阶段**

- shouldEmit、emit、assetEmitted、afterEmit：在构建完成后，处理产物的过程中触发。
- failed、done：在达到最终结果状态时触发。

### Compilation Hooks

构建过程实例的生命周期我们分为 2 个阶段：构建阶段、优化阶段。

**构建阶段**

- addEntry、failedEntry、succeedEntry：在添加入口和添加入口结束时触发（Webpack 5 中移除）。
- buildModule、rebuildModule、finishRebuildingModule、failedModule、succeedModule：在构建单个模块时触发。
- finishModules：在所有模块构建完成后触发。

**优化阶段**

- seal、needAdditionalSeal、unseal、afterSeal：分别在 seal 函数的起始和结束的位置触发。
- optimizeDependencies、afterOptimizeDependencies：触发优化依赖的插件执行，例如 FlagDependencyUsagePlugin。
- beforeChunks、afterChunks：分别在生成 Chunks 的过程的前后触发。
- optimize：在生成 chunks 之后，开始执行优化处理的阶段触发。
- optimizeModule、afterOptimizeModule：在优化模块过程的前后触发。
- optimizeChunks、afterOptimizeChunks：在优化 Chunk 过程的前后触发，用于 Tree Shaking。
- optimizeTree、afterOptimizeTree：在优化模块和 Chunk 树过程的前后触发。
- optimizeChunkModules、afterOptimizeChunkModules：在优化 ChunkModules 的过程前后触发，例如 ModuleConcatenationPlugin，利用这一 Hook 来做 Scope Hoisting 的优化。
- shouldRecord、recordModules、recordChunks、recordHash：在 shouldRecord 返回为 true 的情况下，依次触发 recordModules、recordChunks、recordHash。
- reviveModules、beforeModuleIds、moduleIds、optimizeModuleIds、afterOptimizeModuleIds：在生成模块 Id 过程的前后触发。
- reviveChunks、beforeChunkIds、optimizeChunkIds、afterOptimizeChunkIds：在生成 ChunkId 过程的前后触发。
- beforeHash、afterHash：在生成模块与 Chunk 的 hash 过程的前后触发。
- beforeModuleAssets、moduleAsset：在生成模块产物数据过程的前后触发。
- shouldGenerateChunkAssets、beforeChunkAssets、chunkAsset：在创建 Chunk 产物数据过程的前后触发。
- additionalAssets、optimizeChunkAssets、afterOptimizeChunkAssets、optimizeAssets、afterOptimizeAssets：在优化产物过程的前后触发，例如在 TerserPlugin 的压缩代码插件的执行过程中，就用到了 optimizeChunkAssets。

![](https://s0.lgstatic.com/i/image/M00/4D/B4/Ciqc1F9bGtqAJo4uAABnYGwsyYs218.png)
