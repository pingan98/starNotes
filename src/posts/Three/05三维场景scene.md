---
icon: pen-to-square
date: 2024-03-21
category:
  - three.js
tag:
  - 三维场景scene
star: true
---

# 05 三维场景scene

```html
<template>
  <div id="container"></div>
</template>
```

```ts
<script setup>
  import { onMounted } from "vue";
  import * as THREE from "three";
  import { OrbitControls } from "three/addons/controls/OrbitControls.js";

  onMounted(() => {
    // 创建场景
    // 场景能够让你在什么地方、摆放什么东西来交给three.js来渲染，这是你放置物体、灯光和摄像机的地方。
    const scene = new THREE.Scene();

    // 添加背景
    console.log(new THREE.CubeTextureLoader().setPath( '/' ).load(['01.jpg'])) // 图片放在public 文件目录下 好像图片要求格式是500*500的尺寸
    scene.background = new THREE.CubeTextureLoader().setPath( '/' ).load(['01.jpg','01.jpg','01.jpg','01.jpg','01.jpg','01.jpg'])
    // scene.background = new THREE.Color(0x666666);

    // 添加雾
    scene.fog = new THREE.Fog( 0xcccccc, 10, 15 );

    // 添加坐标系
    const axesHelper = new THREE.AxesHelper( 5 );
    console.log(axesHelper, 'axesHelpers')
    axesHelper.position.y = 1
    scene.add( axesHelper );

    // 创建相机
    const camera = new THREE.PerspectiveCamera();
    camera.position.y = 5;
    camera.position.z = 10;

    // 创建立方体
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // 创建球体
    const sphere = new THREE.SphereGeometry( 0.5, 32, 32 );

    // 网格
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 3, 0);
    scene.add(cube);

    // 网格1
    const cube1 = new THREE.Mesh(sphere, material);
    cube1.position.set(3, 3, -3);
    scene.add(cube1);

    // 添加网格地面
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 将渲染器添加到页面
    document.getElementById("container").appendChild(renderer.domElement);

    // 添加轨道控制器
    const controls = new OrbitControls(camera, renderer.domElement);
  //   // 对轨道控制器改变时候进行监听
  //   controls.addEventListener("change", function () {
  //     console.log("触发change");
  //   });

    // 添加阻尼
    controls.enableDamping = true;
    controls.dampingFactor = 0.01;

    // 自动旋转
    // controls.autoRotate = true
    // controls.autoRotateSpeed = 0.5

    // 进行渲染
    // renderer.render(scene, camera);

    // 让立方体动起来
    function animate() {
      // 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      // 轨道控制器更新
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });
</script>
```
