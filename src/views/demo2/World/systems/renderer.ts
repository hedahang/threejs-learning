import { WebGLRenderer } from 'three'

function createRenderer() {
  const render = new WebGLRenderer()
  return render
}

export { createRenderer }
