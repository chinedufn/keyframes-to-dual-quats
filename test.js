var test = require('tape')
var keyframesToDualQuats = require('./')
console.log(keyframesToDualQuats)

test(function (t) {
  var keyframeMatrices = {
    1: [
      // Identity matrix
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    ]
  }

  t.deepEqual(
    keyframesToDualQuats(keyframeMatrices),
    {
      1: [
        // Identity dual quat
        [0, 0, 0, 1, 0, 0, 0, 0]
      ]
    }
  )

  t.end()
})
