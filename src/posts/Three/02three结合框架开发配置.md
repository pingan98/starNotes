---
icon: pen-to-square
date: 2024-03-21
category:
  - three.js
tag:
  - 常用
---

# 结合框架开发配置three.js

## 结合框架开发配置 一个初模板

```ts
<script setup>

  import * as THREE from 'three'; // 引入three.js
  const width = window.innerWidth, height = window.innerHeight;  // 引入窗口 宽高

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

  // 创建渲染器
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 将渲染器添加到页面
  document.body.appendChild(renderer.domElement);

  // 添加轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement)

  // 对轨道控制器改变时候进行监听
  controls.addEventListener('change', function() {
    console.log('触发change')
  })

  // 添加阻尼
  controls.enableDamping = true
  controls.dampingFactor = 0.01

  // 自动旋转
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.5



  // 让立方体动起来
  function animate() {
    // 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
    //  该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      // 轨道控制器更新
      controls.update();
      // 进行渲染
      renderer.render( scene, camera );
  }
  animate();


</script>
```