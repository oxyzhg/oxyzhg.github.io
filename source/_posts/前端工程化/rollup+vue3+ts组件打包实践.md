---
title: rollup+vue3+ts组件打包实践
author: Kq
categories: 前端工程化
tags:
  - rollup
  - vue3
  - ts
abbrlink: bed04d78
date: 2020-11-05 17:27:00
---

Vue3 早已发布多时了，更新后一些新特性要利用起来。

在诸多更新内容中，让我感觉最舒服的点就是 Composition API 的出现，hooks 功能已经能带来很多便利了，甚至我们几乎可以像写 react 那样写 vue3 代码，这看起来是非常有意思的事情。

为什么说 vue3 越来越 react 化呢，这在开发者看来是编码形式越来越像，尤其在 vue3 的出现，使得 vue 也能像 react 那样使用 hooks 来代替 mixin 这种非主流的方式。当然，尽管我选择使用 jsx 的方式开发 vue3 应用，但我还是认为 vue3 有点不伦不类，因为 Options API 仍然存在，开发者还是逃不掉 vue 帮我们完成一些事，当然这不是坏事。

每种框架都有其优缺点，看个人喜好选择即可。话不多说，我们动手尝试使用 vue3+typescript+jsx 初始化一个组件小项目，最后我们会使用 rollup 打包这个组件。

## 初始化项目

前些日子看了下别的组件库，有采用 monorepo+lerna 方式管理源码、文档以及其他依赖的方式，正好我们可以学习下这个模式，初始化的项目中包含组件源码和文档源码。

新建项目目录，并初始化项目：

```javascript
mkdir test-repo
cd test-repo
npm init -y
```

我们的目录结构应该是这样子：

```
test-repo
├─packages
│  ├─mox-table
│  │  ├─src
│  │  ├─package.json
│  │  └─README.md
│  └─website
│     ├─docs
│     ├─package.json
│     └─README.md
├─.editorconfig
├─.gitignore
├─.prettierrc
├─lerna.json
├─package.json
└─README.md
```

这个结构中，test-repo 是包含 mox-table 和 website 两个包的项目，test-repo 本身在 package.json 中设置 `private: true`  属性保证是私仓不发布，子项目 mox-table 和 website 是需要发布的。这种单仓多包的管理方式大概就是 monorepo 仓储管理方案。

## lerna+workspace

尽管我们采用 monorepo 的方式来管理这个组件库，但时我们的组件库并没有达到这个量级，这里有点为了用而用的意思，当然也是为了做个尝试，一通二，二通百，触类旁通就是这个道理。

管理怎么使用 lerna+monorepo 管理单仓多包项目，请看另一篇总结。

## 选择静态文档库

市面上展示静态文档的工具有很多，像 vuepress/gitbook/gatsby/docusaurus 这些都可以作为文档工具使用，本来想选 gatsby 但是本地安装老是出问题，暂时弃用，这里我选用了基于 react 生态的 Docusaurus 展示文档，因为这个比较好看且简洁。

这里有 [Docusaurus](https://www.docusaurus.cn/docs/installation) 官方文档是使用说明，框架很容易上手，这里不作过多赘述。

## 组件开发配置

vue3 项目构建有 webpack 和 vite 可选，由于是本地开发测试项目，我们选择 vite 作为 vue3 的本地构建工具。

使用 lerna 为 mox-table 包添加依赖：

```bash
lerna add mox-table --scope vue@next vite typescript
```

执行 tsc 命令，初始化 tsconfig.json 配置：

```bash
npx tsc --init
```

初始化的配置项有很多，我们根据我们的项目选择适合我们使用的即可，这里关于 tsconfig.json 的总结可以看一下我记录的另一篇笔记，有较全面的说明，这里直接给出一份最终配置：

```json
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es2015" /* 编译成 ES2015 */,
    "module": "es2015" /* 编译后的代码模块化方案是 ES Module */,
    "allowJs": true /* 允许 javascript 文件编译 */,
    "jsx": "preserve" /* 组件使用 JSX 语法编写，这里采用 vue3 推荐的 preserve */,
    "declaration": true /* 生成 .d.ts 文件，不过现在还没发现编译后声明文件的作用 */,
    "outDir": "dist" /* 编译后的文件输出到 dist 文件夹 */,

    /* Strict Type-Checking Options */
    "strict": true /* 开启严格类型检查，其余的几项也会默认开启 */,

    /* Module Resolution Options */
    "moduleResolution": "node" /* 使用 nodejs 提供的模块解析策略 */,
    "esModuleInterop": true /* 兼容 cjs 和 esm 模块化导入导出方案 */,

    /* Advanced Options */
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  },
  "files": ["src/index.ts" /* 项目入口文件 */]
}
```

vue 官方也推荐了一份基本配置，由于我们后续还要使用 rollup 打包，因此上述配置已经做了一定的修改。

我查了下现在社区已经有很多关于 vue3 上手或者原理解析等文章，各有特点，我在学习了一下他们的代码，然后这里给出 jsx 的写法（我比较喜欢 jsx 的写法，一是跟 react 很像，二是引入的其他模块可以不用定义在 data 属性中直接在 render 函数中使用，三是这种开发模式能更好的接近 javascript 开发而不是 vue 大包大揽都帮我们实现）

最终目录结构如下：

```
test-repo
├─packages
│  ├─mox-table
│  │  ├─src
│  │  │  ├─header.tsx
│  │  │  ├─index.ts
│  │  │  ├─interfaces.ts
│  │  │  ├─loading.tsx
│  │  │  └─table.tsx
│  │  ├─examples
│  │  │  ├─App.tsx
│  │  │  └─main.ts
│  │  ├─index.html
│  │  ├─package.json
│  │  ├─README.md
│  │  ├─rollup.config.js
│  │  └─tsconfig.json
│  └─website
│     ├─docs
│     └─package.json
├─lerna.json
├─package.json
└─README.md
```

修改 index.html

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kala Table</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/test/main.ts"></script>
</body>
</html>

```

修改 main.ts

```typescript
import { createApp } from 'vue';
import App from './App';

createApp(App).mount('#root');
```

修改 App.tsx

```jsx
import { defineComponent } from 'vue';
import { BaseTable } from '../src';

const dataSource = [
  { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
  { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
  { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
  { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
  { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
];

const columns = [
  { code: 'prov', name: '省份', width: 150 },
  { code: 'confirmed', name: '确诊', width: 100, align: 'right' },
  { code: 'cured', name: '治愈', width: 100, align: 'right' },
  { code: 'dead', name: '死亡', width: 100, align: 'right' },
  { code: 't', name: '最后更新时间', width: 180 },
];

export default defineComponent({
  name: 'App',

  components: {
    BaseTable,
  },

  render() {
    return (
      <div>
        <BaseTable dataSource={dataSource} columns={columns}></BaseTable>
      </div>
    );
  },
});
```

这样一个基本的项目结构就搭建完成了，接下来就是开发组件了，这里还没发开发完，先看下使用 rollup 打包。

## Rollup 打包

关于 Rollup 打包 vue3+typescript+jsx 项目的配置，也在另一篇笔记中有详细记录，我这里分享最终的 rollup 配置：

```javascript
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
// import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import jsx from 'acorn-jsx';

const extensions = ['.js', '.ts', '.tsx', '.json'];

const config = {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].esm.js',
      chunkFileNames: 'chunks/kala-table-[name]-[hash].esm.js',
    },
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs.js',
      chunkFileNames: 'chunks/kala-table-[name]-[hash].cjs.js',
    },
    // {
    //   dir: 'dist',
    //   name: 'Vue',
    //   globals: {
    //     vue: 'Vue'
    //   },
    //   format: 'umd',
    //   entryFileNames: '[name].umd.js',
    //   chunkFileNames: 'chunks/kala-table-[name]-[hash].umd.js',
    // },
  ],
  plugins: [
    resolve({
      extensions,
      mainFields: ['module', 'main', 'browser'],
    }),
    typescript({
      lib: ['es5', 'es6', 'dom'],
      target: 'es5',
      noEmitOnError: true,
    }),
    commonjs({
      extensions,
      sourceMap: true,
    }),
    babel({
      exclude: '**/node_modules/**',
      babelHelpers: 'bundled',
      extensions,
    }),
    postcss({
      plugins: [cssnano],
      modules: true,
      extract: path.resolve('dist/assets/style.css'),
    }),
    // vue({
    //   css: true,
    //   compileTemplate: true,
    // }),
    terser(),
  ],
  acornInjectPlugins: [jsx()],
  external: ['vue'],
  treeshake: {
    moduleSideEffects: false,
  },
};

export default config;
```

上述配置处理了 babel, typescript, jsx, postcss 等相关代码，打包后的文件完全可以在业务组件中引用。

这篇使用 vue3+typescript+jsx+rollup 开发和打包组件的文章，已经被我拆分为不同的模块了，每个模块基本都有笔记记录开发过程，或许有总结遗漏的地方，
