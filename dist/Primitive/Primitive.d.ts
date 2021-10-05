import { Primitive as CesiumPrimitive } from "cesium";
import { EventProps, PickCesiumProps } from "../core";
export declare type PrimitiveCesiumProps = PickCesiumProps<CesiumPrimitive, typeof cesiumProps>;
export declare type PrimitiveCesiumReadonlyProps = PickCesiumProps<CesiumPrimitive, typeof cesiumReadonlyProps>;
export declare type PrimtiiveOtherProps = {
    /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html#readyPromise) is fullfilled */
    onReady?: (primitive: CesiumPrimitive) => void;
};
export declare type PrimitiveProps = PrimitiveCesiumProps & PrimitiveCesiumReadonlyProps & EventProps<{
    id: string;
    primitive: CesiumPrimitive;
}> & PrimtiiveOtherProps;
declare const cesiumProps: readonly ["appearance", "cull", "debugShowBoundingVolume", "depthFailAppearance", "modelMatrix", "shadows", "show"];
declare const cesiumReadonlyProps: readonly ["allowPicking", "asynchronous", "compressVertices", "geometryInstances", "interleave", "releaseGeometryInstances", "vertexCacheOptimize"];
declare const Primitive: import("../core").CesiumComponentType<CesiumPrimitive, PrimitiveProps>;
export default Primitive;
