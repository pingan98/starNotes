---
icon: pen-to-square
date: 2024-03-08
category:
  - three.js
tag:
  - Blender
star: true
---

# 15 Blender
### 使用 Blender 创建GLTF或GLB
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

	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	// 创建场景
	// 场景能够让你在什么地方，摆放什么东西来交给three.js来渲染，这是你放置物体，灯光和摄像机的地方
	const scene = new THREE.Scene()

	// 添加背景颜色
	scene.background = new THREE.Color(0x666666)

	// 创建相机（视角）
	const camera = new THREE.PerspectiveCamera()
	camera.position.x= 10 // X轴
	camera.position.y = 10  // y轴
	camera.position.z = 10  // Z轴

	// 创建材质
	const material = new THREE.MeshPhongMaterial({
			color:'blue'
	})

	// 使用 Blender创建GLTF实例
	const loader = new GLTFLoader()
	// 加载模型
	loader.load('./home.glb',function(glb) {
		console.log('glb',glb)
		glb.scene.traverse(function(child){
			// 遍历模型中物体
			if(child.name.includes('柱体')){
				child.material = material
				console.log('child',child)
			}
		})
		scene.add(glb.scene)
	})
	// 灯光 添加灯光效果
	// -----添加环境光
	const ambientLight = new THREE.AmbientLight( 0x404040, 1 ); // 柔和的白光
	scene.add( ambientLight );
	// -----添加平行光
	const directional = new THREE.DirectionalLight( 0xffffff, 100, 100 );
	// 修改光源位置
	directional.position.set(11.2,11.2,7.4)
	scene.add( directional );


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
			// ambientLight.intensity = controlData.intensity // 环境光
			// pointLight.intensity = controlData.light // 点光源
			// cube.rotation.x += 0.01
			// 轨道控制器更新
			controls.update();
			// 进行渲染
			renderer.render(scene, camera)
		}
		animate()
	})


</script>
```