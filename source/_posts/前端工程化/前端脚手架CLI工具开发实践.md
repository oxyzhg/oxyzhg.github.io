---
title: 前端脚手架CLI工具开发实践
author: Kq
categories: 前端工程化
tags:
  - 前端脚手架
  - cli
abbrlink: 7852061a
date: 2020-11-13 18:06:00
---

## 为什么要开发 CLI 工具

我们的项目采用微前端插件化开发，也就是当功能庞大之后，会同时存在多个子项目独立维护。如果某个功能经过重新设计，且前端修改范围已经覆盖了大多数的子应用，这时手动 copy 到处粘贴的方式已经不再是很好的解决方式了，耗时耗力不说，一旦出错排查困难。

因此我们想到开发一款前端 CLI 工具，初步计划它代替我们完成这些重复性的工作。由于我们的子项目很多时候都是从 0 开始搭建，并且我们有专门的子应用模板用来快速初始化项目，后续我们首先考虑使用脚手架完成初始化新子应用项目的工作。

接下来的设计将会通过命令的方式解放双手，向前端工程化迈出一步，提效。

## 功能设计

项目设计之初，我们计划通过脚手架实现以下功能：

- 初始化项目（init）
- 检查更新（upgrade）
- 修改本地配置（config）

## 开发准备

基于以上功能设计，我们将一步步实现代码初始化功能。

### 目录结构

首先，我们初始化一个空项目，目录结构设计如下：

```
dotlim-cli
├─ bin
│  └─ www                     // 可执行脚本文件
├─ lib                        // 生产环境可运行代码
├─ src                        // 开发环境可运行代码
│  ├─ command                 // 脚手架命令单独存放
│  ├─ shared                  // 脚手架公共函数库
│  ├─ constants.ts            // 常量
│  └─ main.ts                 // 脚手架入口
├─ .eslintrc
├─ .gitignore
├─ package.json
└─ README.md
```

这是我们初步设计的目录结构，其中 `/lib` 目录是后续用 typescript 重构后，产生的生产环境可执行代码，并且后续还会增加 tsconfig.json 文件等。

### 注册命令

我们定义 `dotlim` 这个可以在终端运行的脚本命令，即运行 `dotlim` 命令时，程序会去运行我们配置的 `bin/www` 脚本文件。其实，根据 npm 的机制，当 install 一个包的时候，会自动去查询其定义的 bin 命令，并将其添加到 `node_modules/.bin` 文件中去，作为 shell 命令供用户调用执行。因此，如果是局部安装就是局部可用，如果是全局安装就是全局可用的命令。

在 package.json 添加 bin 字段：

```json
{
  "bin": {
    "dotlim": "bin/www"
  }
}
```

在 bin/www 文件的第一行，一定是第一行，添加 `#!/usr/bin/env node` 代码，指定脚本的运行环境。【重要】

接下来，为了方便测试，我们需要将这个包发布到本地的全局环境：

```bash
npm link
```

注意，`npm link` 是当我们当前包 link 到本地的全局中，就好比如我们安装依赖时使用了 `-g` 参数把一些包装到了全局环境一样，是用来方便我们本地开发时测试的，他可以让我们开发的时候自动热更新。如果不清楚 `npm link` 怎么使用，可以去 npm 官网查查用法再继续往下实践。

这里需要注意的点：

- 首先，最好把你的 npm 的镜像源改为 npm 本身的镜像源（如果你指定了为淘宝等其他的话）；特别是你需要发布 npm 仓库的时候会失败。
- 其次，一定要在 `package.json` 的配置中把 `node_modules` 等无关的文件夹去掉（或者指定我们需要的），也可以通过 `.gitignore` 等配置文件忽略掉也可以，或者 `.npmrc` 等。在哪里设置都可以，因为 npm 配置取值是有一套先后顺序的规则，有兴趣的话可以移步 npm 文档查阅。这里演示一下如何在 `package.json` 文件的配置：

```json
{
  "files": ["bin", "lib"]
}
```

我们通过在 package.json 文件中指定 files 文件夹目录，即告诉 npm 我们实际应该包含的真正文件有哪些，比如我们只需要 `bin/src` 文件夹，一些默认的文件像 `package.json` 啊，其他的一些基础配置文件啊，即使你不添加，也会被默认包含进来的。这也是当我们把这个包发布到 `npm` 所需要配置的，也就是需要哪些文件发布到 npm 仓库上。**再强调一遍，node_modules 一定要排除掉**，不然 npm link 会巨慢而且会失败的概率大，小心踩坑～

### 测试命令

输入我们定义的命令，查看是否可用：

```bash
$ dotlim      # 如果脚本执行并输出我们自定义的内容，说明脚本执行成功了
```

这里注意，一定要给可执行文件第一行添加 `#!/usr/bin/env node` 代码，否则不可用。

## 功能实现

由于代码已通过 typescript 重构，接下来的代码不可避免地会出现一些 ts 相关内容。

### 命令行界面的解决方案

参考网上一些较成熟的设计，我们也采用 [commander](https://www.npmjs.com/package/commander) 作为命令行的解决方案。

在 main.ts 中引入依赖：

```typescript
import program from 'commander';

program
  .name('dotlim')
  .usage('<command> [options]')
  .option('-f, --force', 'force all the question')
  .option('-y, --yes', 'run default action')
  .version(require('./package.json').version, '-v, --version');

program.parse(process.argv);
```

我们给命令行定义了版本信息（version）和帮助指令（help），在命令行中输入 `dotlim -v`  就可以输出程序的版本信息了，同样的 help 指令也能输出帮助信息。

以上内容就实现了基本的命令定义与输出功能，接下来我们让脚手架支持初始化项目的能力。

### 定义 init 指令

仍然是声明在刚才的 main.ts 文件中定义指令：

```typescript
import program from 'commander';
import { CreateCommand } from './command/init';

program
  .command('init <dir>')
  .alias('i')
  .description('init a new project with default templates')
  .option('-f, --force', 'force all the question')
  .action((dir, payload) => {
    // console.log(dir, payload.options);
    new CreateCommand(dir, payload);
  });
```

这帮助我们在程序总注册了 `dotlim init <dir>`  类似这种形式的指令。关于注册指令的 `command` , `alias` , `description` , `action`  等方法，大家可以去官网了解下，功能强大，还有更多内容等你去使用。

### 设计 CreateCommand 类

创建 *command/init.ts *文件，我们将要实现的初始化项目功能逻辑几乎都在这里。

首先，我们设计这里类将要实现的功能。我们希望在命令行中传入将要创建的项目名称，然后从远程拉取代码模板，根据用户填写的配置创建项目，具体步骤如下：

1. 用户通过命令行输入将要创建的项目名称。
1. 程序检查用户输入的目录是否存在，如果存在提示是新建、是覆盖、是退出等操作。
1. 拉取远程仓库的项目代码模板，将其暂存在某个目录。
1. 将模板文件拷贝到目标文件夹，即用户输入的目录。
1. 更新 package.json 文件，提示用户输入 name, description, author 等信息，然后将新配置写入文件。
1. 初始化 Git 仓库，可让用户选择使用全局的 git 配置或新输入配置信息。
1. 安装项目依赖。
1. 到这里一切正常的话，提示创建成功，并提示接下来可能的操作指令。

基于以上设计，我们先实现 CreateCommand Class 的整体设计：

```typescript
class CreateCommand {
  source: string;
  cmdParams: ParsedParams;
  repoMaps: {
    target: string;
    templatePath: string;
    repository: string;
    branch: string;
  };

  constructor(projectName: string, destination: Cmd, opts = {}) {
    this.source = projectName;
    this.cmdParams = parseCmdParams(destination);
    this.repoMaps = {
      target: '',
      templatePath: '',
      repository: 'dotlim-cli',
      branch: 'main',
    };
    // 按顺序执行程序
    this.init();
  }

  init() {
    try {
      await this.checkFolderExist();
      await this.downloadRepo();
      await this.copyTemplateFields();
      await this.updatePackageJson();
      await this.initGit();
      await this.installDependencies();
    } catch (err) {
      fse.removeSync(this.repoMaps.target);
      process.exit(1);
    }
  }

  // 检查目标路径文件是否正确
  private checkFolderExist() {}

  // 拉取远程仓库的项目模板
  private downloadRepo() {}

  // 复制模板文件到目标文件夹
  private copyTemplateFields() {}

  // 更新 package.json
  private updatePackageJson() {}

  // 初始化 Git
  private initGit() {}

  // 安装项目依赖
  private installDependencies() {}
}
```

以上基本就完成了初始化功能的设计，遵循自上而下开发的原则，定义好这些内容，接下来我们就解析各自功能的实现，如果遇到一些内容，在补充到这个 class 中，使其更加健壮。

### 检查目标路径文件是否正确

在检查目录有效性前，我们需要先将用户输入的字符转换为有效的目录地址：

```typescript
import { pluginDirectory } from '../constants';

class CreateCommand {
  init() {
    this.repoMaps.templatePath = path.join(pluginDirectory, this.repoMaps.repository);
    this.repoMaps.target = path.resolve(this.source);
  }
}
```

这里我们提前声明了插件存取的临时文件夹常量（constants.ts），即在用户目录新建一个 `.dotlim-cli`  的文件夹，在程序中的实现如下：

```typescript
import path from 'path';

// 插件暂存根目录
const userdir: string = process.env[process.platform === 'darwin' ? 'HOME' : 'USERPROFILE'] || '';
export const pluginDirectory: string = path.join(userdir, '.dotlim-cli');
```

这样就初始化了初始化项目的几个目录变量，以供在这个类的其他方法中共用。

在程序中，文件相关的操作我们使用 [fs-extra](https://www.npmjs.com/package/fs-extra) 库，因为这个库有比 nodejs fs 模块更强大的功能；跟用户的交互操作，比如用户选择或输入某些内容，我们使用 [inquirer](https://www.npmjs.com/package/inquirer) 库，这是一个用于 nodejs 环境下进行命令行交互的库，支持单选、多选、用户输入、确认询问等操作，十分强大，更多的使用方式请面向文档学习。

实现 checkFolderExist 方法：

```typescript
import inquirer from 'inquirer';
import fse from 'fs-extra';

class CreateCommand {
  private checkFolderExist() {
    return new Promise(async (resolve) => {
      const { target } = this.repoMaps;

      // 判断用户是否强制覆盖原文件，如果存在
      if (this.cmdParams.force) {
        fse.removeSync(target);
        return resolve();
      }

      try {
        const isTarget = fse.pathExistsSync(target);
        if (!isTarget) return resolve();

        const { recover } = await inquirer.prompt(definedInquirer.recover);

        if (recover === 'cover') {
          fse.removeSync(target);
          return resolve();
        } else if (recover === 'new') {
          const { rename } = await inquirer.prompt(definedInquirer.rename);
          this.source = rename;
          this.genTargetPath(rename);
          await this.checkFolderExist();
          return resolve();
        } else {
          process.exit(1);
        }
      } catch (err) {
        console.log(chalk.red(`[dotlim] ${err}`));
        process.exit(1);
      }
    });
  }
}
```

这个方法是要检查用户指定的目录是否存在，我们首先判断用户是否在选项 option 中执行 `-f`  强制覆盖功能，如果使用该命令则直接移除原文件后，继续向下执行。如果目标目录存在，我们就在命令行中提示用户操作，操作的定义 `definedInquirer`  如下：

```typescript
const definedInquirer = {
  recover: [
    {
      type: 'list',
      name: 'recover',
      message: '当前文件夹已存在，请选择操作',
      choices: [
        { name: 'New folder', value: 'new' },
        { name: 'Cover', value: 'cover' },
        { name: 'Exit', value: 'exit' },
      ],
    },
  ],
  rename: [
    {
      type: 'input',
      name: 'rename',
      message: '请输入新的项目名称',
    },
  ],
};
```

可以看到，关于检查到目录存在后我们提供了三个选项，分别是：新建、覆盖、退出。如果用户选择新建，那么将提示用户输入新的项目目录名称，然后重新检查重复性。如果用户选择覆盖，那么将移除原目录，然后会在接下来的流程中新建目标目录。

### 拉取远程仓库的代码模板

检查完目录的有效性后，我们就要去远程仓库 github/gitlab 来下载代码模板了。这个操作我们是通过 [download-git-repo](https://gitlab.com/flippidippi/download-git-repo) 库实现。这个代码的下载过程可能是漫长的，为了让整个下载的流程有更好的用户体验，我们又使用了 [ora](https://www.npmjs.com/package/ora) 库，在命令行中显示加载状态，让用户知道当前程序正在做哪些事，而不是长时间未响应。另外，你可能也注意到了，前面的代码中我们也是有了另外一个库 [chalk](https://www.npmjs.com/package/chalk)，他是一款可以让我们的控制台打印出各种颜色/背景的内容的工具，由此我们可以鲜明的区分各种提示内容。

实现 downloadRepo 功能：

```typescript
import ora from 'ora';
import chalk from 'chalk';
import downloadGitRepo from 'download-git-repo'; // 在 ts 中提示无类型声明，但不影响使用，暂未解决
import { promisify } from 'util';
// promisify - 将原回调函数形式Promise化
const downloadGit = promisify(downloadGitRepo);

class CreateCommand {
  private async downloadRepo() {
    const { repository, branch, templatePath } = this.repoMaps;
    const remotePath = `github:dotlim/${repository}#${branch}`;
    const spinner = ora('Downloading the project template...');

    try {
      spinner.start();
      // 如果本地临时文件夹存在，则先删除临时文件夹
      fse.removeSync(templatePath);
      await downloadGit(remotePath, templatePath, { clone: true });
      spinner.succeed('Successfully downloaded template.');
    } catch (err) {
      console.log(chalk.red(`[dotlim] ${err}`));
      process.exit(1);
    }
  }
}
```

这个方法是用来下载远程仓库的代码模板。程序运行后，先检测本地插件定义的模板临时目录是否存在，如果存在删除即可，然后去远程下载最新的代码。这里其实有优化点，就是先检测本地代码和远程仓库的代码版本是否一致，如果一致的话直接跳过就可以了，省去下载代码模板的时间。这里我们友好地呈现了下载过程中的 loading 状态，尽量不让用户焦躁。🤞🤞

### 复制模板文件到目标目录

代码模板下载到临时文件夹后，我们考虑将模板文件拷贝到用户指定的文件夹，然后修修改改就完成了。这里文件拷贝网上有推荐 [ncp](https://www.npmjs.com/package/ncp) 库，但前边我们引入了强大的 fs-extra 后，貌似这个库就变得可有可无了，当然如果有需要的话也可以使用下，在我的视线中就直接选了后者。

实现 copyTemplateFields 功能：

```typescript
import { parseCmdParams, copyFiles } from '../shared/utils';

class CreateCommand {
  private async copyTemplateFields() {
    const { templatePath, target } = this.repoMaps;
    const removeFiles = ['./git', './changelogs', 'README.md'];
    await copyFiles(templatePath, target, removeFiles);
  }
}
```

修改* shared/utils.ts *文件：

```typescript
import path from 'path';
import fse from 'fs-extra';

/**
 * 解析命令行参
 * @param {string} dest 带解析的命令行参数
 */
export function parseCmdParams(dest: Cmd): ParsedParams {
  if (!dest) return {};
  return dest.options.reduce((ops: ParsedParams, option) => {
    const key = option.long.slice(2);
    if (dest[key] && !isFunction(dest[key])) ops[key] = dest[key];
    return ops;
  }, {});
}

/**
 * 拷贝文件
 * @param {string} source 待拷贝的资源路径（绝对路径）
 * @param {string} target 资源放置路径（绝对路径）
 * @param {string[]} excludes 需要排除的资源名称（会自动移除其所有子文件）
 */
export async function copyFiles(source: string, target: string, excludes: string[] = []) {
  fse.copySync(source, target);
  if (excludes.length) {
    await Promise.all(excludes.map((file) => () => fse.removeSync(path.join(target, file))));
  }
}
```

可以看到，像 copyFiles, parseCmdParams 这样具有通用性的方法，我们统一声明在另外一个文件中，方便在更多的功能中复用。值得注意的是，我们在复制目录的时候，也会移除一些没必要文件或目录。

### 更新 package.json

将模板文件复制到指定目录后，接下来就是修改一些用户指定的项目信息，更新到 package.json 文件。

实现 updatePackageJson 功能：

```typescript
import { runCmd } from '../shared/utils';

class CreateCommand {
  private async updatePackageJson() {
    const gitPrifiles = await this.getGitUser();
    const { projectName, description, author } = await inquirer.prompt(
      definedInquirer.packageJson(this.source, gitPrifiles)
    );

    const pkgPath = path.resolve(this.repoMaps.target, 'package.json');
    const spinner = ora('Updating package.json...');
    spinner.start();
    // Define the fields to be removed
    const unnecessaryKeys = ['keywords', 'licence', 'files'];
    // read package.json
    const pkgData = fse.readJsonSync(pkgPath);
    for (let key of unnecessaryKeys) {
      delete pkgData[key];
    }

    Object.assign(pkgData, {
      name: projectName,
      description: description,
      version: '1.0.0',
      private: true,
      author: author,
    });

    fse.writeJsonSync(pkgPath, pkgData, { spaces: 2 });

    spinner.succeed('Successfully updated package.json');
  }

  private getGitUser(): Promise<GitUser> {
    return new Promise(async (resolve, reject) => {
      const user = {
        name: '',
        email: '',
      };

      try {
        const [name] = await runCmd('git config user.name');
        const [email] = await runCmd('git config user.email');
        if (name) user.name = name.replace(/\n/, '');
        if (email) user.email = email.replace(/\n/, '');
      } catch (err) {
        console.log(chalk.red(`[dotlim] ${err}`));
        reject(err);
      } finally {
        resolve(user);
      }
    });
  }
}
```

修改 *shared/utils.ts *文件：

```typescript
import childProcess from 'child_process';

/**
 * 执行命令
 * @param {string} cmd 待执行命令
 */
export function runCmd(cmd: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    childProcess.exec(cmd, (err, stdout, stderr) => {
      if (err) return reject(err);
      return resolve([stdout, stderr]);
    });
  });
}
```

我们首先获取了本地全局的 git config 信息，用户生成默认的用户输入提示。nodejs 是通过开启一个子进程来执行脚本命令的，可解析放回的字符得到所需数据，于是 runCmd 我们也封装成公共方法，关于 [child_process](http://nodejs.cn/api/child_process.html#child_process_child_process) 更多使用请面向文档学习。

这里我们同样提供了丰富的用户操作交互，不同的是我们这次的默认值需要动态获取，于是我们使用函数生成了交互数据，具体代码如下：

```typescript
const definedInquirer = {
  packageJson: (name: string, user: GitUser) => [
    {
      type: 'input',
      name: 'projectName',
      message: '请输入插件名称',
      default: name,
    },
    {
      type: 'input',
      name: 'description',
      message: '请输入插件描述',
    },
    {
      type: 'input',
      name: 'author',
      message: '请输入插件开发者邮箱',
      default: `${user.name} <${user.email}>`,
    },
  ],
};
```

上面的交互中，name, description, author 信息支撑用户重新定义与目录名称不同的字符，也支持直接使用默认值，而 git 相关的数据我们直接通过执行命令获取默认值。

### 初始化 Git 仓库

到这里，项目所有的配置基本就已经生成了。接下来可选初始化 git 仓库，同样的在上面 runCmd 方法的基础上，我们直接执行相关命令，模仿用户手动操作即可。

实现 initGit 功能：

```typescript
class CreateCommand {
  private async initGit() {
    const spinner = ora('Initializing git repository...');
    spinner.start();
    await runCmd(`cd ${this.repoMaps.target}`);
    process.chdir(this.repoMaps.target);
    await runCmd(`git init`);
    spinner.succeed('Successfully initialized the repository.');
  }
}
```

注意一点：执行命令的时候，我们首先需要确认当前进程的执行目录是否是目录目录，即新创建的目录，如果不是的话可能会执行报错甚至失败。

### 安装项目依赖

这步也是可选的操作，用于自动安装项目依赖。跟初始化 Git 仓库一样，也需要注意执行目录是否在目标目录，防止报错。

实现 installDependencies 功能：

```typescript
class CreateCommand {
  private async installDependencies() {
    const spinner = ora('Installing CLI plugins. This might take a while...');

    try {
      spinner.start();
      // ensure the execution directory is the target
      if (path.resolve() !== this.repoMaps.target) {
        await runCmd(`cd ${this.repoMaps.target}`);
        process.chdir(this.repoMaps.target);
      }
      // await runCmd(`npm install --registry=http://registry.npm.gridsum.com`);
      await runCmd(`npm install`);
      // await runCmd(`git add . && git commit -m "initial project"`);
      spinner.succeed(`Successfully created project ${this.source}.`);
    } catch (err) {
      console.log(chalk.red(`[dotlim] ${err}`));
      process.exit(1);
    }
  }
}
```

以上基本就完成了初始化项目的所有功能，至少是经过设计的功能都实现了。当然你可能还有别的想法，也可以在整个过程的设计中增加你想要的步骤，实现更多自定义功能。

## 编译 typescript

我们在开发中使用的编程语言是 typescript，而在 nodejs 环境中并不能直接运行，需要编译成 javascript 语言且模块化方案必须是 commonjs 才能运行，那么我们就配置 tsconfig.json 来实现：

```json
{
  "compilerOptions": {
    /* Basic Options */
    "target": "ES2016" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    "declaration": true /* Generates corresponding '.d.ts' file. */,
    "outDir": "./lib" /* Redirect output structure to the directory. */,
    "removeComments": true /* Do not emit comments to output. */,

    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,

    /* Module Resolution Options */
    "allowSyntheticDefaultImports": true /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */,
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,

    /* Advanced Options */
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  },
  "files": ["src/main.ts"]
}
```

我们在开发中，开启 `tsc -watch`  即可实时将开发中的 typescript 代码编译成 javascript 语言。这里需要注意一点，就是在生产环境发布前，需要手动编译一次，保证 lib 目录下的文件是最新代码。

## 后续功能

实现了项目初始化这个基本功能后，可能后续还会设计/开发其他功能，推动团队前端工程化的进程。前端工程化确实能够有效的提升开发效率，用程序代替开发人员的低效工作，能有效减少人工错误操作带来的问题等，值得在团队中推广。

相关插件：

- [commander](https://www.npmjs.com/package/commander)
- [inquirer](https://www.npmjs.com/package/inquirer)
- [ora](https://www.npmjs.com/package/ora)
- [chalk](https://www.npmjs.com/package/chalk)
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [download-git-repo](https://gitlab.com/flippidippi/download-git-repo)

---

参考：

- [详解前端脚手架开发排坑全指南](https://juejin.im/post/6847902225025466376)
- [手摸手教你撸一个脚手架](https://juejin.cn/post/6844903896163303438)
- [gd4Ark/fa-cli](https://github.com/gd4Ark/fa-cli) [typescript]
