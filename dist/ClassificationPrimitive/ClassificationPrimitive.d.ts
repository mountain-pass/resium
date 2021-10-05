import { ClassificationPrimitive as CesiumClassificationPrimitive } from "cesium";
import { EventProps, PickCesiumProps } from "../core";
export declare type ClassificationPrimitiveCesiumProps = PickCesiumProps<CesiumClassificationPrimitive, typeof cesiumProps>;
export declare type ClassificationPrimitiveCesiumReadonlyProps = PickCesiumProps<CesiumClassificationPrimitive, typeof cesiumReadonlyProps>;
export declare type ClassificationPrimitiveOtherProps = {
    /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html#readyPromise) is fullfilled */
    onReady?: (primitive: CesiumClassificationPrimitive) => void;
};
export declare type ClassificationPrimitiveProps = ClassificationPrimitiveCesiumProps & ClassificationPrimitiveCesiumReadonlyProps & EventProps<CesiumClassificationPrimitive> & ClassificationPrimitiveOtherProps;
declare const cesiumProps: readonly ["classificationType", "debugShowBoundingVolume", "debugShowShadowVolume", "show"];
declare const cesiumReadonlyProps: readonly ["allowPicking", "asynchronous", "compressVertices", "geometryInstances", "interleave", "releaseGeometryInstances", "vertexCacheOptimize"];
declare const ClassificationPrimitive: import("../core").CesiumComponentType<CesiumClassificationPrimitive, ClassificationPrimitiveProps>;
export default ClassificationPrimitive;
