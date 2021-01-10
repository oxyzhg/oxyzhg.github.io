---
title: 给你的项目配置tsconfig.json
author: Oxyzhg
categories: typescript
tags:
  - typescript
  - tsconfig.json
abbrlink: 95d1cb85
date: 2020-11-06 10:08:00
---

最近在尝试使用 vue3+typescript+jsx 开发组件时，在配置 _tsconfig.json_ 这一步出现了问题，编译报错、编译不通过，或是编译后的文件不符合预期等。之前写 ts demo 的时候，直接去网上 copy 一份配置就可以了，现在自己要开发项目，显然有些配置是行不通了。那么带着这些问题，我专门查阅了一些关于 typescript 项目基本配置的资料，并整理下来，防止同样的坑掉入两次。

_以下示例基于 typescript@4.0.3 版本。_

## 为什么要使用 tsconfig

TypeScript 使用 _tsconfig.json_ 文件作为其配置文件，当一个目录中存在 _tsconfig.json_ 文件，则认为该目录是 typescript 项目的根目录。

通常 tsconfig 主要包含两部分内容：**指定待编译文件**和**定义编译选项**。

实际上，我们不适用 tsconfig 配置文件，仅通过命令行也可以实现 ts 编译：

```bash
/*
  --outFile // 编译后生成的文件名称
  --target  // 指定ECMAScript目标版本
  --module  // 指定生成哪个模块系统代码
  index.ts  // 源文件
*/
$ npx tsc --outFile index.js --target es5 --module commonjs index.ts
```

这段代码就可以实现注释中的功能，但是在实际项目开发中，往往是从整个项目入手，单一的命令行已经不能满足项目开发的需要了，这时就需要 _tsconfig.json_ 配置文件来辅助我们进行代码编译。

接下来看下 tsconfig 的使用及注意事项。

## 初始化配置文件

安装 typescript 后，我们使用命令生成初始化配置文件：

```bash
$ npx tsc --init
```

这就会为我们自动创建一份较完整的 _tsconfig.json_ 文件，其中的一些配置是通过注释的形式呈现，只需要我们在需要时修改一下配置项即可。生成的默认配置文件如下：

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  }
}
```

虽然在项目目录下直接创建一个 _tsconfig.json_ 文件也未尝不可，但通过命令行创建的配置文件附带了这么多的默认配置选项，还是太香了。

这时即可通过命令行编译 ts 文件了：

```bash
$ npx tsc index.ts
```

注意，tsc 的命令行选项具有更高的优先级，会覆盖 _tsconfig.json_ 中的同名选项。

生成的配置项，到底哪些才是适配我们手头的项目呢？接下来我们来看一看。

## 解读常用的配置项

通过查阅 [TypeScript Reference](https://www.typescriptlang.org/tsconfig) 文档，结合上述生成的配置项，我们可以总结出主要的两部分配置：

- 指定待编译文件： `exclude` , `include` , `files`
- 定义编译选项： `compilerOptions`

那么我们就来解读一下这些配置项，已经关键点。

### 指定待编译文件

官方列出的关于指定待编译文件的配置项其实不止这些，但在我们的项目中，这三项更为重要。这些配置可以帮助我们确保 typescript 选择正确的文件进行编译。

#### include

指定要包含在程序中的文件名或特定模式数组，这些文件名是基于 _tsconfig.json_ 的相对地址。

```json
{
  "include": [
    // "scr"      // 会编译src目录下的所有文件，包括子目录
    // "scr/*"    // 只会编译scr一级目录下的文件
    // "scr/*/*"  // 只会编译scr二级目录下的文件
  ]
}
```

通常在指定一个目录后，这个目录下的所有 ts 文件都会被编译，即使没有被用到，如果是空文件等不符合要求的文件，或许还会报错。我之前在项目中会配置这个选项，现在由于一些没必要的报错，我更倾向于配置 files 选项。

#### exclude

指定在解析 include 时应跳过的文件名或特定模式数组。同样支持 glob 通配符。

注意这里的默认值是 `["node_modules", "bower_components", "jspm_packages"]`  这些依赖包目录和 `compilerOptions.outDir`  指定的文件夹。大多数情况下，我们不需要额外配置 exclude 选项，因为这些默认值包含了大多数不需要编译的目录和文件，基本能满足需求。

跟 include 配置项一样，支持 glob 通配符：

- `*` 匹配 0 或多个字符（不包括目录分隔符）
- `?` 匹配一个任意字符（不包括目录分隔符）
- `**/` 递归匹配任意子目录

#### files

指定需要编译的单个文件列表。通过 import 引入的其他模块的文件也会被编译。

如果是中小型项目，或不需要使用通配符匹配的项目，可通过这个配置来代替 include 配置项。目前我在封装组件的时候就是配置 files 指定编译程序的入口，然后通过模块关联编译其他文件。

其他的配置，如 extends, references, typeAcquisition 等一般很少用到，这里就不做过多解释，详情可查文档。

### 定义编译选项

编译选项 `compilerOptions`  有很多，通常分为以下几类：

- Basic Options
- Strict Type-Checking Options
- Additional Checks
- Module Resolution Options
- Source Map Options
- Experimental Options
- Advanced Options

#### compilerOptions

这就是定义编译选项，我们可以根据自己项目的需要，选择合适的配置项。由于配置项较多，这里就挑选几个常用易出错的点进行分析。

- target --- 编译后目标语言的版本，目前现代浏览器大多支持 ES6 特性，因此可以选择 ES2015 或更高版本。
- module --- 编译后代码的模块类型，可以根据不同的使用场景选择不同的模块化方案。
- lib --- 编译需要引入的库，因项目 javascript 版本和编译后使用场景而异，可以查阅各 ECMA 版本对应的库。
- allowJs --- 是否允许在你的 ts 文件中引入 js 模块，通常是允许的。
- checkJs --- 是否允许校验你的 js 代码并抛出错误，这个看实际情况而定吧。
- jsx --- 如果组件是使用 jsx 编写，这决定了输出的代码的组织形式，在 vue+jsx 要使用 preserve.
- declaration --- 是否生成 .d.ts 文件。
- outFile --- 所有代码输出到一个文件中，这通常是由 webpack/rollup 决定的。
- outDir --- 指定编译后文件的输出目录，如果是 npm 包通常配置 lib 文件夹。
- rootDir --- 指定文件最长公共路径，用于控制输出目录结构，通常是自动计算，也可以指定某些值。
- incremental --- 是否增量编译，可以提升再次编译速度。
- tsBuildInfoFile --- 增量编译文件存储位置。
- removeComments --- 移除注释，可以根据情况配置，或在 webpack/rollup 中集中处理。
- isolatedModules
- strict --- 开启严格类型检查。此项开启后 noImplicitAny, noImplicitThis, strictNullChecks, etc 会默认开启。
- noImplicitAny --- 不允许隐式 any 类型。
- noImplicitThis --- 不允许 this 是隐式 any 类型，谨慎使用。
- strictNullChecks --- 不允许把 null,undefined 赋值给其他类型的变量。
- strictFunctionTypes --- 不允许函数参数双向协变。
- strictBindCallApply --- 严格的 bind/call/apply 检查。
- strictPropertyInitialization --- 类的实例属性必须初始化。
- alwaysStrict --- 开启后，编译后的源代码都会注入 `"use strict"` 。
- noUnusedLocals --- 开启后，只声明未使用的变量会报错，默认关闭。
- noUnusedParameters --- 开启后，只声明未使用的函数参数会报错，默认关闭。
- noImplicitReturns --- 开启后，要求每个函数都要有返回值，默认关闭。
- noFallthroughCasesInSwitch --- 开启后，确保每个 switch...case 都必须有 break/return 语句，默认关闭。
- moduleResolution --- 指定模块解析策略。
- baseUrl --- 解析非相对模块的基地址，默认是当前目录。
- paths --- 路径映射，相对于 baseUrl.
- rootDirs --- 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化。
- esModuleInterop ---

主要的编译相关的配置已经差不多了，这些足以支撑你完成一个 typescript 项目，剩下还有不少配置没列在这，如果有需要还是查阅[官方文档](https://www.typescriptlang.org/tsconfig)为主。

## vue3+ts 项目中的配置

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

以上就是接下来使用 vue3+typescript+jsx 开发组件用例的 _tsconfig.json_ 配置文件，目前仍在探索结合 rollup 的打包方案。
