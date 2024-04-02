import { navbar } from "vuepress-theme-hope";

// 顶部导航
export default navbar([
  "/",
  "/demo/",
  {
    text: "Three.js",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "three.js",
        icon: "pen-to-square",
        prefix: "Three/", // 多个页面写法
        children: [
          { text: "01初识three.js", icon: "pen-to-square", link: "01初识three" },
          { text: "02three结合框架开发配置", icon: "pen-to-square", link: "02three结合框架开发配置" },
          { text: "03轨道控制器", icon: "pen-to-square", link: "03轨道控制器" },
          { text: "04三维坐标轴", icon: "pen-to-square", link: "04三维坐标轴" },
          { text: "05三维场景scene", icon: "pen-to-square", link: "05三维场景scene" },
          { text: "06透视相机", icon: "pen-to-square", link: "06透视相机" },
          { text: "07参数调试工具", icon: "pen-to-square", link: "07参数调试工具" },
          { text: "08基础网格材质", icon: "pen-to-square", link: "08基础网格材质" },
          { text: "09纹理", icon: "pen-to-square", link: "09纹理" },
          { text: "10BufferGeometry自定义几何体", icon: "pen-to-square", link: "10BufferGeometry自定义几何体" },
          { text: "11自定义uv坐标", icon: "pen-to-square", link: "11自定义uv坐标" },
          { text: "12环境光和点光源组合", icon: "pen-to-square", link: "12环境光和点光源组合" },
          { text: "13Vector3三维向量介绍", icon: "pen-to-square", link: "13Vector3三维向量介绍" },
          { text: "14欧拉角", icon: "pen-to-square", link: "14欧拉角" },
          { text: "15Blender", icon: "pen-to-square", link: "15Blender" },
        ],
      },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato", //单一页面写法
    ],
  },
  {
    text: "学习篇",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "学习篇",
        icon: "pen-to-square",
        prefix: "Study/", // 多个页面写法
        children: [
          { text: "01.篇章1", icon: "pen-to-square", link: "01.篇章1" },
          { text: "02.篇章2", icon: "pen-to-square", link: "02.篇章2" },
          { text: "03.篇章3", icon: "pen-to-square", link: "03.篇章3" },
          { text: "04.篇章4", icon: "pen-to-square", link: "04.篇章4" },
          { text: "05.篇章5", icon: "pen-to-square", link: "05.篇章5" },
          { text: "06.篇章6", icon: "pen-to-square", link: "06.篇章6" },
          { text: "07.篇章7", icon: "pen-to-square", link: "07.篇章7" },
          { text: "08.篇章8", icon: "pen-to-square", link: "08.篇章8" },
        ],
      },
    ],
  },
  {
    text: "React系列",
    icon: "react",
    prefix: "/posts/",
    children: [
      {
      text: "react",
      icon: "pen-to-square",
      prefix: "React/", // 多个页面写法
      children: [
      ],
    },],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/", // 链接写法
  },
]);
