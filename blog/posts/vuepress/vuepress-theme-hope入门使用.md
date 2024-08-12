---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-08-22
category:
  - VuePress
tag:
  - VuePress2
  - vuepress-theme-hope
star: true
sticky: true
---

# Vuepress-theme-hope入门使用

[Vuepress-theme-hope官网](https://theme-hope.vuejs.press/zh/get-started/)

## 一、配置项目

### 配置 VuePress

[vuepress2官方配置文档](https://v2.vuepress.vuejs.org/zh/reference/config.html)

VuePress 使用文档文件夹中的 .vuepress 文件夹存放配置，所有 VuePress 相关的文件都将会被放在这里。`config.ts`能配置VuePress，基础配置信息如下：

- `base`：部署站点的基础路径，默认'/'，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"。需要注意的是， base 应该是一个以 / 开始和结束的绝对路径名。
- `lang`：站点的语言。它将会在最终渲染出的 HTML 中作为 `<html>` 标签的 lang 属性。中文：zh-CN
- `title`：站点的标题。它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示。
- `description`：它将会在最终渲染出的 HTML 中作为 `<meta name="description" />` 标签的 content 属性。它会被每个页面的 Frontmatter 中的 description 字段覆盖。
- `theme`：配置主题系统，这里我们用的hopeTheme

### 配置theme-hope

[theme-hope官方配置文档](https://theme-hope.vuejs.press/zh/config/)

- `hostname`：当前网站部署到的域名
- `author`：name作者姓名、url作者网站、email作者 Email
- `logo`：导航栏图标，应为基于 .vuepress/public 文件夹的绝对路径、或者地址
- `repo`：右上角git地址
- `navbar`：导航栏配置

#### navbar导航栏

通过navbar函数生成，参数为数组。数组的每一项都是一个导航，NavbarOptions可为`字符串`、`对象`。

NavbarOptions：
- 字符串：文件夹路径，指向文件夹中的README.md，例如："/demo/"、"/"
- 对象：
  - `text`：导航名称
  - `icon`：导航图标
  - `prefix`：文档目录
  - `children`：子导航
  - `link`：指向具体文件，也可是http链接

