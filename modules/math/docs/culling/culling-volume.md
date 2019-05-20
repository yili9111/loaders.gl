# CullingVolume

// For plane masks (as used in {@link CullingVolume#computeVisibilityWithPlaneMask}), this special value
// represents the case where the object bounding volume is entirely outside the culling volume.
static get MASK_OUTSIDE() {
return 0xffffffff;
}

// For plane masks (as used in {@link CullingVolume.prototype.computeVisibilityWithPlaneMask}), this value
// represents the case where the object bounding volume is entirely inside the culling volume.
static get MASK_INSIDE() {
return 0xffffffff;
}

// For plane masks (as used in {@link CullingVolume.prototype.computeVisibilityWithPlaneMask}), this value
// represents the case where the object bounding volume (may) intersect all planes of the culling volume.
static get MASK_INDETERMINATE() {
return 0x7fffffff;
}

## Methods

### constructor(planes = []) {

/**
The culling volume defined by planes.
_
@alias CullingVolume
@constructor
_
@param {Cartesian4[]} [planes] An array of clipping planes.
\*/
/**
Each plane is represented by a Cartesian4 object, where the x, y, and z components
define the unit vector normal to the plane, and the w component is the distance of the
plane from the origin.
@type {Cartesian4[]}
@default []
\*/

/\*_
Constructs a culling volume from a bounding sphere. Creates six planes that create a box containing the sphere.
The planes are aligned to the x, y, and z axes in world coordinates.
_
@param {BoundingSphere} boundingSphere The bounding sphere used to create the culling volume.
@param {CullingVolume} [result] The object onto which to store the result.
@returns {CullingVolume} The culling volume created from the bounding sphere.
\*/
fromBoundingSphere(boundingSphere, result = new CullingVolume()) {
assert(boundingSphere, 'boundingSphere is required.');

    const length = faces.length;
    const planes = result.planes;
    planes.length = 2 * length;

    const center = boundingSphere.center;
    const radius = boundingSphere.radius;

    const planeIndex = 0;

    for (const i = 0; i < length; ++i) {
      const faceNormal = faces[i];

      const plane0 = planes[planeIndex];
      const plane1 = planes[planeIndex + 1];

      if (!defined(plane0)) {
        plane0 = planes[planeIndex] = new Cartesian4();
      }
      if (!defined(plane1)) {
        plane1 = planes[planeIndex + 1] = new Cartesian4();
      }

      Vector3.multiplyByScalar(faceNormal, -radius, scratchPlaneCenter);
      Vector3.add(center, scratchPlaneCenter, scratchPlaneCenter);

      plane0.x = faceNormal.x;
      plane0.y = faceNormal.y;
      plane0.z = faceNormal.z;
      plane0.w = -Vector3.dot(faceNormal, scratchPlaneCenter);

      Vector3.multiplyByScalar(faceNormal, radius, scratchPlaneCenter);
      Vector3.add(center, scratchPlaneCenter, scratchPlaneCenter);

      plane1.x = -faceNormal.x;
      plane1.y = -faceNormal.y;
      plane1.z = -faceNormal.z;
      plane1.w = -Vector3.dot(Vector3.negate(faceNormal, scratchPlaneNormal), scratchPlaneCenter);

      planeIndex += 2;
    }

    return result;

}

### computeVisibility(boundingVolume)

Determines whether a bounding volume intersects the culling volume.

@param {Object} boundingVolume The bounding volume whose intersection with the culling volume is to be tested.
@returns {Intersect} Intersect.OUTSIDE, Intersect.INTERSECTING, or Intersect.INSIDE.

### computeVisibilityWithPlaneMask(boundingVolume, parentPlaneMask) {

Determines whether a bounding volume intersects the culling volume.
\@param {Object} boundingVolume The bounding volume whose intersection with the culling volume is to be tested.
@param {Number} parentPlaneMask A bit mask from the boundingVolume's parent's check against the same culling
volume, such that if (planeMask & (1 << planeIndex) === 0), for k < 31, then
the parent (and therefore this) volume is completely inside plane[planeIndex]
and that plane check can be skipped.
@returns {Number} A plane mask as described above (which can be applied to this boundingVolume's children).

## Attribution

This class was ported from Cesium under the Apache 2 License.