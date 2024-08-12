import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "hlp的博客",
  description: "对code的最后坚持，希望未来如期而至",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
