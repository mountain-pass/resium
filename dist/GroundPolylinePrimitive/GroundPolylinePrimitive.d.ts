import { GroundPolylinePrimitive as CesiumGroundPolylinePrimitive } from "cesium";
import { EventProps, PickCesiumProps } from "../core";
export declare type GroundPolylinePrimitiveCesiumProps = PickCesiumProps<CesiumGroundPolylinePrimitive, typeof cesiumProps>;
export declare type GroundPolylinePrimitiveCesiumReadonlyProps = PickCesiumProps<CesiumGroundPolylinePrimitive, typeof cesiumReadonlyProps>;
export declare type GroundPolylinePrimitiveOtherProps = {
    /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylinePrimitive.html#readyPromise) is fullfilled */
    onReady?: (primitive: CesiumGroundPolylinePrimitive) => void;
};
export declare type GroundPolylinePrimitiveProps = GroundPolylinePrimitiveCesiumProps & GroundPolylinePrimitiveCesiumReadonlyProps & EventProps<{
    id: string;
    primitive: CesiumGroundPolylinePrimitive;
}> & // TODO: validate type
GroundPolylinePrimitiveOtherProps;
declare const cesiumProps: readonly ["appearance", "classificationType", "debugShowBoundingVolume", "debugShowShadowVolume", "depthFailAppearance", "show"];
declare const cesiumReadonlyProps: readonly ["allowPicking", "asynchronous", "geometryInstances", "interleave", "releaseGeometryInstances"];
declare const GroundPolylinePrimitive: import("../core").CesiumComponentType<CesiumGroundPolylinePrimitive, GroundPolylinePrimitiveProps>;
export default GroundPolylinePrimitive;
