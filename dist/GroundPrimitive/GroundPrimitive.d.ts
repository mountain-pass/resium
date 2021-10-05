import { GroundPrimitive as CesiumGroundPrimitive } from "cesium";
import { EventProps, PickCesiumProps } from "../core";
export declare type GroundPrimitiveCesiumProps = PickCesiumProps<CesiumGroundPrimitive, typeof cesiumProps>;
export declare type GroundPrimitiveCesiumReadonlyProps = PickCesiumProps<CesiumGroundPrimitive, typeof cesiumReadonlyProps>;
export declare type GroundPrimitiveOtherProps = {
    /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/GroundPrimitive.html#readyPromise) is fullfilled */
    onReady?: (primitive: CesiumGroundPrimitive) => void;
};
export declare type GroundPrimitiveProps = GroundPrimitiveCesiumProps & GroundPrimitiveCesiumReadonlyProps & EventProps<{
    id: string;
    primitive: CesiumGroundPrimitive;
}> & // TODO: validate type
GroundPrimitiveOtherProps;
declare const cesiumProps: readonly ["appearance", "classificationType", "debugShowBoundingVolume", "debugShowShadowVolume", "depthFailAppearance", "show"];
declare const cesiumReadonlyProps: readonly ["allowPicking", "asynchronous", "compressVertices", "geometryInstances", "interleave", "releaseGeometryInstances", "vertexCacheOptimize"];
declare const GroundPrimitive: import("../core").CesiumComponentType<CesiumGroundPrimitive, GroundPrimitiveProps>;
export default GroundPrimitive;
