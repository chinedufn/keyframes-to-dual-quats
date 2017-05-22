keyframes-to-dual-quats [![npm version](https://badge.fury.io/js/keyframes-to-dual-quats.svg)](http://badge.fury.io/js/keyframes-to-dual-quats) [![Build Status](https://travis-ci.org/chinedufn/keyframes-to-dual-quats.svg?branch=master)](https://travis-ci.org/chinedufn/keyframes-to-dual-quats)
===============

> Convert a set of keyframed joint matrix arrays into joint dual quaternion arrays

## Background / Initial Motivation

This module was made to help with [dual quaternion linear blending](https://www.cs.utah.edu/~ladislav/kavan07skinning/kavan07skinning.pdf)
when using [collada-dae-parser](https://github.com/chinedufn/collada-dae-parser)

## To Install

```sh
$ npm install --save keyframes-to-dual-quats
```

## Usage

```js
var keyframesToDualQuats = require('keyframes-to-dual-quats')

var keyframeMatrices = {
  1: [
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  ],
  "3.66": [
    // ... some matrices
  ]
}

console.log(keyframesToDualQuats(keyframeMatrices))
// {
//   1: [
//     [0, 0, 0, 1, 0, 0, 0, 0]
//   ],
//   "3.66": [
//     // ... some dual quaternions
//   ]
// }
```

```js
// With collada-dae-parser
var my3dModel = require('collada-dae-parser')(fs.readFileSync('./some-model.dae'))

// Now your keyframes are dual quaternions which you can use for dual quaternion linear blending
my3dModel.keyframes = keyframesToDualQuats(my3dModel.keyframes)
```

## See Also

- [mat4-to-dual-quat](https://github.com/chinedufn/mat4-to-dual-quat)
- [skeletal-animation-system](https://github.com/chinedufn/skeletal-animation-system)

## References

- http://cs.gmu.edu/~jmlien/teaching/cs451/uploads/Main/dual-quaternion.pdf
  - 4x4 matrix to dual quaternion formula is in Section 7.1.6

## License

MIT
