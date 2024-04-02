---
icon: pen-to-square
date: 2024-02-27
category:
  - three.js
tag:
  - 01 初识 安装
star: true
---

# 01 初识 安装three.js

[中文文档下载地址](https://gitee.com/xin_hu199/threejs-code-public)  下载到本地 安装依赖 运行查看中文文档提高便捷性


要安装three 的 npm 模块，请在你的项目文件夹里打开终端窗口，并运行：
```ts
  npm install three
  // 或
  pnpm install three
```
包将会被下载并安装。然后你就可以将它导入你的代码了：

```ts
  // 方式 1: 导入整个 three.js核心库
  import * as THREE from 'three';
  const scene = new THREE.Scene();

  // 方式 2: 仅导入你所需要的部分
  import { Scene } from 'three';
  const scene = new Scene();
```



<!-- more -->

## 兼容性

### CommonJS 导入
虽然现代的 JavaScript 打包器已经默认支持ES module，然而也有一些较旧的构建工具并不支持。对于这些情况，你或许可以对这些打包器进行配置，让它们能够理解 ES module 。例如，Browserify 仅需 babelify 插件。

###  Import maps
和从静态主机或CDN来进行安装的方式相比，从npm安装时，导入的路径有所不同。我们意识到，对于使用两种不同方式的用户群体来说，这是一个人体工程学问题。使用构建工具与打包器的开发者更喜欢仅使用单独的包说明符（如'three'）而非相对路径，而examples/目录中的文件使用相对于 three.module.js 的引用并不符合这一期望。对于不使用构建工具的人（用于快速原型、学习或个人参考）来说，或许也会很反感这些相对导入。这些相对导入需要确定目录结构，并且比全局 THREE.* 命名空间更不宽容。

我们希望在 import maps 广泛可用时，能够移除这些相对路径，将它们替换为单独的包说明符，'three'。这更加符合构建工具对npm包的期望，且使得两种用户群体在导入文件时能够编写完全相同的代码。对于更偏向于避免使用构建工具的用户来说，一个简单的 JSON 映射即可将所有的导入都定向到一个 CDN 或是静态文件夹。通过实验，目前你可以通过一个 import map 的 polyfill，来尝试更简洁的导入，如 import map example 示例中所示。

###  Node.js
由于 three.js 是为 Web 构建的, 因此它依赖于浏览器和 DOM 的 API ，但这些 API 在 Node.js 里不一定存在。这些问题中有的可以使用 headless-gl 等 shims 来解决，或者用自定义的替代方案来替换像 TextureLoader 这样的组件。其他 DOM API 可能与使用它们的代码强相关，因此将更难以解决。我们欢迎简单且易于维护的 pull request 来改进对 Node.js 的支持，但建议先打开问题来讨论您的改进。

确保在您的 package.json 文件中添加 { "type": "module" }，以在您的 Node.js 项目中启用 ES6 模块。
