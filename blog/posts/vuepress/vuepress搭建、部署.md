---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-07-31
category:
  - VuePress
tag:
  - VuePress2
  - git
  - vite
  - vuepress-theme-hope
star: true
sticky: true
---

# VuePress

该博客使用的是`VuePress2`+`vuepress-theme-hope`主题搭建的。

## 搭建

因为使用的是`vuepress-theme-hope`，该主题提供快速搭建脚手架。

> [!warning]
> - 环境: LTS 版本 的 Node.js（>=18.19.0、20.x）
> - 包管理器: npm >= 8、yarn >= 2 或 pnpm >= 7
> - 使用 Vue3 的 VuePress2 项目

::: code-tabs#shell

@tab pnpm

```bash
pnpm create vuepress-theme-hope [项目文件名]
```

@tab yarn

```bash
yarn create vuepress-theme-hope [项目文件名]
```

@tab:active npm

```bash
npm init vuepress-theme-hope@latest [项目文件名]
```

:::

> [!note]
> [项目文件名] 是即将创建的项目文件名， 例如 `blog`、`docs`

## 部署

因为我们是直接部署到GitHub上的，GitHub官方提供一种强大的持续集成/持续部署（CI/CD）工具`Workflows`，允许用户自动化执行构建、测试、打包、发布或部署项目等任务。

### Workflows使用

在根目录下创建`.github\workflows\docs.yml`文件。具体配置可参考[GitHub官方文档](https://docs.github.com/zh/actions/writing-workflows/quickstart)。

#### 一、Workflows的基本概念

- Workflow文件：GitHub Workflows的配置文件是YAML格式的，通常存放在项目根目录下的.github/workflows目录中。每个Workflow文件代表一个独立的自动化流程。
- Jobs：Workflow由一个或多个Jobs组成，每个Job代表一组任务，它们可以在同一个运行器（Runner）上顺序或并行执行。
- Steps：每个Job由多个Steps组成，Steps定义了执行的具体命令或操作（Actions）。
- Actions：Actions是GitHub提供或社区贡献的预定义脚本，可以在Workflow的Steps中直接使用，以完成特定的任务，如检出代码、安装依赖、构建项目等。

#### 二、Workflows的触发条件

Workflows可以通过多种事件触发，包括但不限于：

- Push事件：当代码被推送到仓库的指定分支时触发。
- Pull Request事件：当创建或更新拉取请求时触发。
- Schedule事件：根据设定的时间表（如每天、每周等）定时触发。
- 其他事件：如创建标签、删除分支、外部仓库的事件等。

#### 三、Workflows的配置示例

```
name: docs

on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [main]
  # 手动触发部署
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          # 选择要使用的 pnpm 版本
          version: 9
          # 使用 pnpm 安装依赖
          run_install: true

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          # 选择要使用的 node 版本
          node-version: 20
          # 缓存 pnpm 依赖
          cache: pnpm

      # 运行构建脚本
      - name: Build VuePress site
        run: pnpm docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v4
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: blog/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```