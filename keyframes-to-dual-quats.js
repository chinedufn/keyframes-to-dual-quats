var mat4ToDualQuat = require('mat4-to-dual-quat')

module.exports = convertKeyframesToDualQuats

/**
 * Convert an object with keyframe joint matrix arrays into joint
 * dual quaternion arrays. Useful when paired with `collada-dae-parser`
 * to extract dual quaternions skinning data from a skinned model
 *
 * Example:
 *   Start:
 *     {
 *      1.5: [
 *        // some matrix,
 *        // some matrix
 *      ],
 *      3.88:[
 *        // some matrix,
 *        // some matrix
 *      ]
 *     }
 *   End:
 *    {
 *      1.5: [
 *        // some dual quaternion,
 *        // some dual quaternion
 *      ],
 *      3.88: [ ... ]
 *    }
 */
function convertKeyframesToDualQuats (keyframes) {
  return Object.keys(keyframes)
  .reduce(function (dualQuatKeyframes, time) {
    var keyframesAtThisTime = keyframes[time]
    // Convert every keyframe matrix into a dual quaternion.
    // Useful for dual quaternion linear blending
    keyframesAtThisTime = keyframesAtThisTime.map(function (matrix) {
      return mat4ToDualQuat(matrix)
    })

    dualQuatKeyframes[time] = keyframesAtThisTime
    return dualQuatKeyframes
  }, {})
}
