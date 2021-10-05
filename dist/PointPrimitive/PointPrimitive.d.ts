import { PointPrimitive as CesiumPointPrimitive, PointPrimitiveCollection } from "cesium";
import { EventProps, PickCesiumProps } from "../core";
export declare type PointPrimitiveCesiumProps = PickCesiumProps<CesiumPointPrimitive, typeof cesiumProps>;
export declare type PointPrimitiveOtherProps = EventProps<{
    collection: PointPrimitiveCollection;
    id: string | undefined;
    primitive: CesiumPointPrimitive;
}>;
export declare type PointPrimitiveProps = PointPrimitiveCesiumProps & PointPrimitiveOtherProps;
declare const cesiumProps: readonly ["color", "disableDepthTestDistance", "distanceDisplayCondition", "id", "outlineColor", "outlineWidth", "pixelSize", "position", "scaleByDistance", "show", "translucencyByDistance"];
declare const PointPrimitive: import("../core").CesiumComponentType<CesiumPointPrimitive, PointPrimitiveProps>;
export default PointPrimitive;
