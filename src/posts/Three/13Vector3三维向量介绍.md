---
icon: pen-to-square
date: 2024-03-07
category:
  - three.js
tag:
  - Vector3三维向量介绍
star: true
---

# 13 Vector3三维向量介绍

```html
<template>
  <div id="container">
  </div>
</template>
```

```ts

<script setup>

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 钩子函数
import { onMounted } from 'vue'


// 创建场景
// 场景能够让你在什么地方，摆放什么东西来交给three.js来渲染，这是你放置物体，灯光和摄像机的地方
const scene = new THREE.Scene()

// 添加背景颜色
scene.background = new THREE.Color(0x666666)

// 创建相机（视角）
const camera = new THREE.PerspectiveCamera()
camera.position.y = 3 // Y轴
camera.position.z = 10  // X轴

// 创建立方体
const geometry = new THREE.BoxGeometry(1, 1, 1)

// 创建材质
const material = new THREE.MeshPhongMaterial({color: 0xff0000})
// 创建三维向量
const vector3 = new THREE.Vector3( 1, 1, 1 );
console.log(vector3,'vector3')

// 创建网格
const cube = new THREE.Mesh(geometry,material)
console.log('cube.position',cube)
// cube.position.set(1,1,1)
// cube.position.x = 1
cube.position.add(vector3)
cube.position.addScalar(1)
// console.log('当前位置',cube.position.clone())

// 局部缩放
// cube.scale = new THREE.Vector3( 1, 1, 1 ); // 错误的属性是只读的
// cube.scale.set(2,2,1)

// // 平移
// cube.translateX(1)

// // 显示和隐藏
// cube.visible = true

// 分组

const cubeA = new THREE.Mesh( geometry, material );
cubeA.position.set( 1, 1, 1 );

const cubeB = new THREE.Mesh( geometry, material );
cubeB.position.set( -1, -1, -1 );

//create a group and add the two cubes
//These cubes can now be rotated / scaled etc as a group
const group = new THREE.Group();
group.add( cubeA );
group.add( cubeB );
console.log('group',group)
group.position.x = 2
scene.add( group );


// 添加到场景
// scene.add(cube)

// 添加坐标辅助线
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );


onMounted(() => {

	// 创建渲染器
	const renderer = new THREE.WebGLRenderer()
	//
	// 调整渲染器窗口大小
	renderer.setSize(window.innerWidth, window.innerHeight)

	document.getElementById('container').appendChild(renderer.domElement)
	// 添加轨道控制器
	const controls = new OrbitControls(camera, renderer.domElement);
	// 对轨道控制器改变视角时候进行监听
	controls.addEventListener('change', function () {
		// console.log('触发change')
	})
	// 添加阻尼效果
	controls.enableDamping = true
	controls.dampingFactor = 0.01
	// 自动旋转
	controls.autoRotate = false
	// 速率
	controls.autoRotateSpeed = 0.5

	// 让立方体动起来
	function animate() {
		requestAnimationFrame(animate)
		// 轨道控制器更新
		controls.update();
		// 进行渲染
		renderer.render(scene, camera)
	}
	animate()
})


</script>
```