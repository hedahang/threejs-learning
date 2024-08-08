import type { PerspectiveCamera, WebGLRenderer } from 'three'

class Resizer {
  constructor(container: Element | null, camera: PerspectiveCamera, renderer: WebGLRenderer) {
    const containerWidth = container?.clientWidth || window.innerWidth
    const containerHeight = container?.clientHeight || window.innerHeight
    
    camera.aspect = containerWidth / containerHeight

    
    camera.updateProjectionMatrix()

    console.log(containerWidth,containerHeight)
    renderer.setSize(containerWidth, containerHeight)

    
    renderer.setPixelRatio(window.devicePixelRatio)
  }
}

export { Resizer }
