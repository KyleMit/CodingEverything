# ThreeJS

> JavaScript 3D library


## Objects

### Sprite

[Sprite](https://threejs.org/docs/index.html#api/en/objects/Sprite)

> A sprite is a plane that always faces towards the camera, generally with a partially transparent texture applied.

## 3D Force-Directed Graph

> 3D force-directed graph component using ThreeJS/WebGL

* 3D - [vasturiano/**3d-force-graph**](https://github.com/vasturiano/3d-force-graph)
* 2D - [vasturiano/**force-graph**](https://github.com/vasturiano/force-graph)

## Methods

[`getScreenCoords`](https://github.com/vasturiano/three-render-objects/blob/v1.24.6/src/three-render-objects.js#L230-L237)

## Questions

* [Move all graph canvas as a whole instead of rotating 3d](https://github.com/vasturiano/3d-force-graph/issues/359#issuecomment-674741402)

    ```js
    myGraph.controls().mouseButtons.LEFT = 2;
    ```

* [Setting font colour for labels #32](https://github.com/vasturiano/3d-force-graph/issues/32)

    ```js
    myGraph.nodeLabel(d => `<span style="color: purple">${d.name}</span>`)
    ```

* [Canvas and SpriteMaterial](https://stackoverflow.com/q/14103986/1366033)


```js
let canvasToSprite = (canvas) => {

    let texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    let mat = new THREE.SpriteMaterial({map: texture});

    var sprite = new THREE.Sprite(mat);
    return sprite
}

let buildCard = (data) => {

  var canvas = document.createElement('canvas');
  canvas.width = 250;
  canvas.height = 150;

  var ctx = canvas.getContext('2d');

  // card
  ctx.fillStyle = 'whitesmoke';
  ctx.fillRect(0,0, canvas.width, canvas.height);

  let sprite = canvasToSprite(canvas)

  sprite.scale.set( 25, 15, 1 )

 return sprite;
}
```

