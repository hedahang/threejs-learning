<script setup lang="ts">
import * as THREE from "three";
import {
  Scene,
  PerspectiveCamera,
  Color,
  BoxGeometry,
  WebGLRenderer,
  MeshBasicMaterial,
} from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { onMounted } from "vue";

onMounted(() => {
  const container = document.querySelector("#scene-container");
  const containerWidth = container?.clientWidth || window.innerWidth;
  const containerHeight = container?.clientHeight || window.innerHeight;

  // 创建场景
  const scene = new Scene();
  // 设置场景背景颜色
  scene.background = new Color("black");

  // 创建相机
  const camera = new PerspectiveCamera(45, containerWidth / containerHeight, 1, 100);
  // 设置相机位置，将其朝向我们移动
  camera.position.set(0, 0, 5);
  // camera.position.set(-2, -1, 5);

  // 创建渲染器
  const renderer = new WebGLRenderer();
  // 设置渲染器的尺寸
  renderer.setSize(containerWidth, containerHeight);
  // renderer.setSize(containerWidth/2, containerHeight/2);

  // 将渲染器的输出添加到容器中
  container?.appendChild(renderer.domElement);

  // 创建立方体
  const geometry = new BoxGeometry(1, 1, 1);
  // const geometry = new THREE.CapsuleGeometry(1, 1, 4,8);
  // 创建材质 https://threejs.org/docs/#api/zh/materials/MeshPhongMaterial
  // const material = new MeshBasicMaterial({ color: 0x00ff00});
  // 创建法线网格材质
  const material = new THREE.MeshNormalMaterial();
  // 创建网格
  const cube = new THREE.Mesh(geometry, material);
  // 添加立方体到场景
  scene.add(cube);

  // 动画
  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  if (WebGL.isWebGL2Available()) {
    // renderer.render(scene, camera);
    animate();
  } else {
    const warning = WebGL.getWebGL2ErrorMessage();
    container?.appendChild(warning);
  }
});
</script>
<template>
  <div class="demo1" id="scene-container"></div>
</template>

<style>
.scene-container {
  width: 100%;
  height: 100%;
}
</style>
