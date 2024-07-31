---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-07-31
category:
  - VuePress2
tag:
  - VuePress2
  - git
  - vite
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

因为我们是直接部署到git上的，所以需要配置