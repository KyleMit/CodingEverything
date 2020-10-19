# SVG


## SVG Backgrounds

* [Background Pattern Sites](https://css-tricks.com/a-few-background-patterns-sites/)
* [How to Use SVG Patterns as Backgrounds](https://webdesign.tutsplus.com/tutorials/how-to-use-svg-patterns-as-backgrounds--cms-31507)
* [SVG as a CSS Background](https://stackoverflow.com/q/56309871/1366033)

### Generators

* [doodad pattern generator](https://doodad.dev/pattern-generator/#beautiful-dingbats)
* [subtle patterns](https://www.toptal.com/designers/subtlepatterns/)
* [transparent textures](https://www.transparenttextures.com/)

![svg pattern](/assets/notes/svg/svg-pattern.png)

```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
  <defs>
    <pattern id="pattern" width="40" height="40" viewBox="0 0 40,40" patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
      <rect id="pattern-background" width="400%" height="400%" fill="#2a4365"/>
      <path fill="#1a202c" d="
                M0 29 a 9 -9 0 0 0 9 -9 a 11 -11 0 0 1 11 -11 v2 a -9 9 0 0 0 -9 9 a -11 11 0 0 1 -11 11z
                M0 69 a 9 -9 0 0 0 9 -9 a 11 -11 0 0 1 11 -11 v2 a -9 9 0 0 0 -9 9 a -11 11 0 0 1 -11 11z
              ">
      <path fill="#ecc94b" d="M20 29.5 a 9.5 -9.5 0 0 0 9.5 -9.5 a 10.5 -10.5 0 0 1 10.5 -10.5 v1 a -9.5 9.5 0 0 0 -9.5 9.5 a -10.5 10.5 0 0 1 -10.5 10.5z"/>
    </pattern>
  </defs>
  <rect fill="url(#pattern)" height="100%" width="100%"/>
</svg>
```
