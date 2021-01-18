---
title: 提交高质量的 Git Commit Message
author: Oxyzhg
tags: git-commit
abbrlink: eaa638cc
date: 2021-01-15 16:58:08
---

我们选择业内使用较广的 [Angular 团队规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)，关于 Git Commit Message 的约束，需要注意几点：

1. **提交格式**：按照 Commit Message Format 规范提交，必选属性是 type, subject，如：`feat: 新增应用市场管理功能`。（注意 subject 前面的**英文冒号**和**空格**）
2. **提交内容**：subject 须直观的表述本次修改内容，便于代码回溯。

## Commit Message Format

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

上述提交信息的格式，当前我们只要求写明 **type** 和 **subject** 即可，其他字段不做过多要求，subject 可选中英文，但必须直观的表述本次修改的内容。

关于上述提交信息 type 的说明：

- **feat**—新功能
- **fix**—修复 Bug
- **docs**—更新文档
- **style**—代码格式修改
- **refactor**—代码重构
- **perf**—性能优化
- **test**—更新测试用例
- **chore**—其他修改

## 相关配置（可选）

以下依赖可以辅助你达到这些要求：

- [commitizen](https://github.com/commitizen/cz-cli)
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)

项目级安装：

```bash
npm install commitizen cz-conventional-changelog -D
```

修改 _package.json_ 配置：

```json
{
  "script": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog"
    }
  }
}
```

使用命令行提交，如下图所示：

上述依赖可以全局安装，也可以项目级安装。但我们建议在本地全局安装，这样会减少项目在执行 `npm install` 时安装依赖的数量，从而加快 CI/CD 构建。

## 提交信息校验（可选）

除此之外，在项目中还可以通过 Husky 配置 Lint 校验 Commit Message。
