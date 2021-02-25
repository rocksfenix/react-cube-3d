# react-cubox

> Build your own Cube 3D made with React

[![NPM](https://img.shields.io/npm/v/react-cubox.svg)](https://www.npmjs.com/package/react-cubox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Composition

The declarative composition that we expected:
```js
<Cube
  bgColor='gold'
  frozen={false}
  activeOpacity={0.5}
  inactiveOpacity={1}
  opacityDuration={0.5}
  opacity={0.8}
  showFaceNumber
  speed={0.1}
  sensivity={0.1}
  touchSensivity={2}
  sensivityFade={0.87}
  onFaceClick={console.log}
  onMove={console.log}
  onMoveEnd={console.log}
  refController={controllerRef}
  texture='https://...'
  material='solid|gradient|texture'
  behavior='opaque|active|translucid'
>
  <Face bgColor='blue' />
  <Face bgColor='gold' />
  <Face>
    <span>⚡</span>
  <Face>
<Cube>

```

The full documentation is still in progress.

<!-- 
### Remote controller

By default, the movements will be listened in document, but you can pass a React ref to control and listen the movements on another element.

```jsx
<div ref={controllerRef}>
  Remote controller 🕹️
</div>
<Cube
  bg='red'
  refController={controllerRef}
  material='gradient'
  behavior='translucid'
>
  <Face>
    <span>⚡</span>
  <Face>
<Cube>
```

----- -->

This component uses Standard JS

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## License

MIT © [rocksfenix](https://github.com/rocksfenix)
