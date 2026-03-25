import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/starNotes/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",
  // head: [
  //   ['link', { rel: 'icon', href: 'https://s3.bmp.ovh/imgs/2023/02/15/16aa54f3ee84602e.webp' }]
  // ],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
