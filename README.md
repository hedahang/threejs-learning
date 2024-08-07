## Three.js 分享文档

### 目录

1. **引言**
2. **Three.js概述**
    - 什么是Three.js？
    - Three.js的核心组件
3. **环境搭建**
    - 引入Three.js
    - 创建项目结构
4. **创建基础场景**
    - 场景、相机和渲染器
    - 添加几何体
5. **材质与纹理**
    - 材质种类
    - 纹理映射
6. **光照与阴影**
    - 光源类型
    - 阴影的实现
7. **动画与交互**
    - 动画循环
    - 用户交互
8. **加载外部模型**
    - 常见的3D模型格式
    - 模型加载器
9. **高级渲染技术**
    - 后处理效果
    - 自定义着色器
10. **性能优化**
    - 场景优化技巧
    - 渲染性能优化
11. **案例分析**
    - 示例项目1：互动3D场景
    - 示例项目2：3D产品展示
12. **总结与展望**
    - 未来发展方向
    - 学习资源推荐

---

### 1. 引言

随着WebGL技术的发展，浏览器中的3D渲染变得越来越普及。Three.js作为一个广受欢迎的JavaScript库，使得开发者可以轻松创建复杂的3D场景。本文将带你深入了解Three.js，帮助你掌握如何利用它打造丰富的Web 3D体验。

### 2. Three.js概述

#### 什么是Three.js？

Three.js是一个基于WebGL的JavaScript库，旨在简化在网页上创建和渲染3D图形的过程。它封装了底层的WebGL API，使开发者可以使用更加简洁和直观的方式创建3D内容。

#### Three.js的核心组件

要使用Three.js创建3D场景，需要理解以下几个核心组件：
- **场景（Scene）**：容纳所有3D对象的容器。
- **相机（Camera）**：定义了观察场景的视角。
- **渲染器（Renderer）**：负责将场景渲染为图像并显示在网页上。
- **几何体（Geometry）**：定义3D对象的形状。
- **材质（Material）**：定义3D对象的表面特性。
- **光源（Light）**：为场景中的对象提供照明。

### 3. 环境搭建

#### 引入Three.js

要开始使用Three.js，首先需要在HTML文件中引入Three.js库。你可以从CDN获取最新版本的Three.js：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Three.js Example</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>
    <script src="main.js"></script>
</body>
</html>
```

#### 创建项目结构

为了保持项目结构清晰，可以创建一个简单的目录结构：

```
project/
├── index.html
├── main.js
├── css/
│   └── styles.css
├── assets/
│   └── textures/
│   └── models/
└── lib/
    └── three.min.js
```

### 4. 创建基础场景

#### 场景、相机和渲染器

在Three.js中，创建一个3D场景的基本步骤如下：

```javascript
// 创建场景
const scene = new THREE.Scene();

// 创建透视相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 创建WebGL渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

#### 添加几何体

接下来，我们可以向场景中添加一个简单的几何体，比如一个立方体：

```javascript
// 创建立方体几何体
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// 将立方体添加到场景中
scene.add(cube);

// 动画循环
function animate() {
    requestAnimationFrame(animate);

    // 旋转立方体
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // 渲染场景和相机
    renderer.render(scene, camera);
}

animate();
```

### 5. 材质与纹理

#### 材质种类

Three.js提供了多种材质类型，常用的包括：
- **MeshBasicMaterial**：一种简单的材质，不受光照影响。
- **MeshLambertMaterial**：一种表现出漫反射效果的材质，受光照影响。
- **MeshPhongMaterial**：一种具有高光效果的材质，受光照影响。
- **MeshStandardMaterial**：一种基于物理的标准材质，具有更真实的光照和反射效果。

```javascript
// 创建不同的材质
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const standardMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

// 将材质应用于几何体
const cube1 = new THREE.Mesh(geometry, basicMaterial);
const cube2 = new THREE.Mesh(geometry, lambertMaterial);
const cube3 = new THREE.Mesh(geometry, phongMaterial);
const cube4 = new THREE.Mesh(geometry, standardMaterial);
```

#### 纹理映射

纹理是将图像应用到3D对象表面的一种技术。Three.js提供了多种加载和应用纹理的方法：

```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('assets/textures/texture.jpg');

// 应用纹理到材质
const texturedMaterial = new THREE.MeshBasicMaterial({ map: texture });
const texturedCube = new THREE.Mesh(geometry, texturedMaterial);
scene.add(texturedCube);
```

### 6. 光照与阴影

#### 光源类型

Three.js支持多种光源，包括：
- **AmbientLight**：环境光，为场景提供均匀的照明。
- **PointLight**：点光源，从一个点向所有方向发光。
- **DirectionalLight**：方向光，从一个方向发出平行光线。
- **SpotLight**：聚光灯，从一个点向特定方向发光，形成锥形光束。

```javascript
// 创建光源
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 10, 10);
scene.add(directionalLight);

const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(0, 20, 0);
scene.add(spotLight);
```

#### 阴影的实现

要启用阴影效果，需要对渲染器、光源和几何体进行相应的配置：

```javascript
// 启用渲染器的阴影效果
renderer.shadowMap.enabled = true;

// 配置光源的阴影
spotLight.castShadow = true;
directionalLight.castShadow = true;

// 配置几何体的阴影
cube.castShadow = true;
cube.receiveShadow = true;

// 配置地面的阴影
const planeGeometry = new THREE.PlaneGeometry(500, 500);
const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1;
plane.receiveShadow = true;
scene.add(plane);
```

### 7. 动画与交互

#### 动画循环

使用`requestAnimationFrame`创建一个动画循环，使得场景中的对象可以动态更新：

```javascript
function animate() {
    requestAnimationFrame(animate);

    // 更新对象状态
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // 渲染场景和相机
    renderer.render(scene, camera);
}

animate();
```

#### 用户交互

Three.js支持多种用户交互方式，包括鼠标和键盘事件。可以使用`THREE.OrbitControls`实现基础的相机交互：

```javascript
// 引

入OrbitControls
<script src="https://threejs.org/examples/js/controls/OrbitControls.js"></script>

// 创建OrbitControls对象
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// 在动画循环中更新控制器
function animate() {
    requestAnimationFrame(animate);

    controls.update(); // 更新控制器

    renderer.render(scene, camera);
}

animate();
```

### 8. 加载外部模型

#### 常见的3D模型格式

Three.js支持多种3D模型格式，包括OBJ、FBX、GLTF等。GLTF是近年来广泛使用的格式，因为它高效且易于使用。

#### 模型加载器

使用Three.js提供的加载器可以轻松加载外部模型。例如，使用GLTFLoader加载GLTF模型：

```javascript
// 引入GLTFLoader
<script src="https://threejs.org/examples/js/loaders/GLTFLoader.js"></script>

const loader = new THREE.GLTFLoader();
loader.load('assets/models/model.gltf', function(gltf) {
    scene.add(gltf.scene);
}, undefined, function(error) {
    console.error(error);
});
```

### 9. 高级渲染技术

#### 后处理效果

Three.js支持多种后处理效果，可以使用`THREE.EffectComposer`组合多个后处理效果：

```javascript
// 引入EffectComposer相关类
<script src="https://threejs.org/examples/js/postprocessing/EffectComposer.js"></script>
<script src="https://threejs.org/examples/js/postprocessing/RenderPass.js"></script>
<script src="https://threejs.org/examples/js/postprocessing/ShaderPass.js"></script>
<script src="https://threejs.org/examples/js/shaders/CopyShader.js"></script>
<script src="https://threejs.org/examples/js/shaders/FilmShader.js"></script>

// 创建EffectComposer对象
const composer = new THREE.EffectComposer(renderer);

// 添加RenderPass
const renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);

// 添加ShaderPass
const filmPass = new THREE.ShaderPass(THREE.FilmShader);
filmPass.renderToScreen = true;
composer.addPass(filmPass);

// 在动画循环中渲染
function animate() {
    requestAnimationFrame(animate);

    // 更新对象状态
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // 使用composer渲染
    composer.render();
}

animate();
```

#### 自定义着色器

Three.js支持自定义着色器，使用`THREE.ShaderMaterial`可以创建自己的着色器：

```javascript
const vertexShader = `
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`;

const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
});

const customCube = new THREE.Mesh(geometry, shaderMaterial);
scene.add(customCube);
```

### 10. 性能优化

#### 场景优化技巧

为了优化Three.js场景的性能，可以采用以下技巧：
- **减少几何体的复杂度**：使用低多边形模型和细节层次（LOD）技术。
- **使用实例化**：对于重复的几何体，使用实例化技术（InstancedMesh）。
- **合并网格**：将多个网格合并为一个，以减少绘制调用。

#### 渲染性能优化

除了优化场景中的对象，还可以通过以下方式优化渲染性能：
- **开启抗锯齿**：在创建渲染器时启用抗锯齿功能。
- **调整渲染目标尺寸**：根据设备性能调整渲染目标的尺寸。
- **使用高效材质**：避免使用复杂的着色器和材质，尽量使用Three.js提供的标准材质。

### 11. 案例分析

#### 示例项目1：互动3D场景

创建一个互动3D场景，包括旋转的地球和交互信息展示：

```javascript
// 创建地球几何体和材质
const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
const earthMaterial = new THREE.MeshStandardMaterial({
    map: textureLoader.load('assets/textures/earth.jpg'),
    bumpMap: textureLoader.load('assets/textures/earth_bump.jpg'),
    bumpScale: 0.05
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

// 添加鼠标交互
renderer.domElement.addEventListener('mousemove', function(event) {
    const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(earth);

    if (intersects.length > 0) {
        // 显示交互信息
        console.log('Intersected:', intersects[0].point);
    }
});

animate();
```

#### 示例项目2：3D产品展示

创建一个3D产品展示页面，包括旋转查看和信息展示：

```javascript
// 加载产品模型
loader.load('assets/models/product.gltf', function(gltf) {
    const product = gltf.scene;
    scene.add(product);

    // 添加鼠标交互
    renderer.domElement.addEventListener('mousedown', function(event) {
        const mouse = new THREE.Vector2(
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1
        );

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(product, true);

        if (intersects.length > 0) {
            // 显示产品信息
            console.log('Product Intersected:', intersects[0].object.name);
        }
    });

    animate();
});
```

### 12. 总结与展望

#### 未来发展方向

Three.js的未来发展方向包括：
- **性能优化**：进一步优化渲染性能，使得更复杂的场景能够流畅运行。
- **增加功能**：添加更多高级功能和特效，满足更广泛的应用需求。
- **易用性提升**：改进API设计，使开发者更容易上手和使用Three.js。

#### 学习资源推荐

要进一步学习Three.js，可以参考以下资源：
- [Three.js官方文档](https://threejs.org/docs/index.html)
- [Three.js示例库](https://threejs.org/examples/)
- [Three.js GitHub仓库](https://github.com/mrdoob/three.js/)
- [Three.js Journey](https://threejs-journey.xyz/)：一个系统的Three.js教程

希望本文能够帮助你深入理解Three.js，利用它创建出更多令人惊叹的3D场景和应用。Happy coding!