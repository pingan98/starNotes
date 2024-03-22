---
icon: pen-to-square
date: 2024-03-21
category:
  - three.js
tag:
  - gui参数调试工具
star: true
---

# gui参数调试工具

```html
<template>
  <div id="container">
  </div>
</template>
```

```ts
<script setup>
  import { onMounted } from "vue";
  import * as THREE from "three";
  import { OrbitControls } from "three/addons/controls/OrbitControls.js";
  import dat from 'dat.gui'

  // 创建控制对象
  const controlData = {
    rotationSpeed: 0.01,
    color: '#66ccff',
    wireframe: false
  }
  // 创建实例
  const gui = new dat.GUI()
  const f = gui.addFolder('配置')
  // f.add(controlData, "rotationSpeed", 0.01, 0.1, 0.01)

  f.add(controlData, "rotationSpeed").min(0.01).max(0.1).step(0.01)
  // 颜色选择器
  f.addColor(controlData, "color")
  // checkbox
  f.add(controlData, "wireframe")

  f.domElement.id = "gui"

  f.open()


  // 创建场景
  // 场景能够让你在什么地方、摆放什么东西来交给three.js来渲染，这是你放置物体、灯光和摄像机的地方。
  const scene = new THREE.Scene();
  // 创建相机
  const camera = new THREE.PerspectiveCamera();
  camera.position.y = 5;
  camera.position.z = 10;

  // 创建立方体
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  // 网格
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 3, 0);
  scene.add(cube);

  // 添加网格地面
  const gridHelper = new THREE.GridHelper(10, 10);
  scene.add(gridHelper);

  onMounted(() => {
    // 创建渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 将gui添加到页面
    document.getElementById('container').appendChild(f.domElement)
    // 将渲染器添加到页面
    document.getElementById('container').appendChild(renderer.domElement);

    // 添加轨道控制器
    const controls = new OrbitControls(camera, renderer.domElement);

    // 添加阻尼
    controls.enableDamping = true;
    controls.dampingFactor = 0.01;

    // 自动旋转
    // controls.autoRotate = true;
    // controls.autoRotateSpeed = 0.5;

    // 进行渲染
    // renderer.render(scene, camera);

    // 让立方体动起来
    function animate() {
      // 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
      requestAnimationFrame(animate);
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;

      cube.rotation.x += controlData.rotationSpeed
      cube.rotation.y +=controlData.rotationSpeed

      cube.material.color = new THREE.Color(controlData.color)
      material.wireframe = controlData.wireframe

      // 轨道控制器更新
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });
</script>
```
```style
<style>
#gui {
  position: absolute;
  right: 0;
  width: 300px;
}
</style>
```