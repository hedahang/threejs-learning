import { PerspectiveCamera } from 'three'

function createCamera(containerWidth: number, containerHeight: number) {
  const camera = new PerspectiveCamera(45, containerWidth / containerHeight, 1, 100)
  // 设置相机位置，将其朝向我们移动
  camera.position.set(0, 0, 10)
  return camera
}

export { createCamera }
