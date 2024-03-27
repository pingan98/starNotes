import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "intro",
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "其他文章",
      icon: "book",
      link: "https://pingan98.github.io/pages/vue3-status-star/vue3/star1.html",
    },
    {
      text: "Three",
      icon: "book",
      prefix: "posts/Three",
      link: "posts/Three/",
      children: "structure",
    },
    {
      text: "学习篇",
      icon: "book",
      prefix: "posts/Study",
      link: "posts/Study/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
