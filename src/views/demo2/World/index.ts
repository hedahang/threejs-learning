import { createScene } from './components/scene'
import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createLights } from './components/lights'

import { createRenderer } from './systems/renderer'
import type { PerspectiveCamera, Scene, WebGLRenderer, Mesh } from 'three'
import { Resizer } from './systems/Resizer'

let camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer, cube: Mesh
class World {
  constructor(container: Element | null) {
    const containerWidth = container?.clientWidth || window.innerWidth
    const containerHeight = container?.clientHeight || window.innerHeight
    scene = createScene()
    camera = createCamera(containerWidth, containerHeight)
    renderer = createRenderer()
    container?.append(renderer.domElement)

    cube = createCube()
    const light = createLights()

    scene.add(cube, light)

    const resizer = new Resizer(container, camera, renderer)
  }
  render() {
    renderer.render(scene, camera)
    this.animate()
  }
  animate() {
    requestAnimationFrame(this.animate.bind(this))

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
  }
}

export { World }
