import { BoxGeometry, Mesh, MeshBasicMaterial, ConeGeometry,MeshStandardMaterial } from 'three'

function createCube() {
  const geometry = new BoxGeometry(1, 1, 1)
  // const geometry = new ConeGeometry(1, 4, 6)
  // 创建法线网格材质
  // const material = new MeshBasicMaterial({ color: 0x00ff00 })
  const material = new MeshStandardMaterial({ color: "purple" })
  // 创建网格
  const cube = new Mesh(geometry, material)
  cube.rotation.set(-0.5, -0.1, 0.8);
  return cube
}

export { createCube }
