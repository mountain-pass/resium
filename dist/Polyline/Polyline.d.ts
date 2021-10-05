import { Material, Cartesian3, DistanceDisplayCondition, Polyline as CesiumPolyline, PolylineCollection } from "cesium";
import { EventProps, PickCesiumProps } from "../core";
export declare type PolylineCesiumProps = PickCesiumProps<CesiumPolyline, typeof cesiumProps> & {
    distanceDisplayCondition?: DistanceDisplayCondition;
    id?: any;
    loop?: boolean;
    material?: Material;
    positions?: Cartesian3[];
    show?: boolean;
    width?: number;
};
export declare type PolylineOtherProps = EventProps<{
    collection: PolylineCollection;
    id: string | undefined;
    primitive: CesiumPolyline;
}>;
export declare type PolylineProps = PolylineCesiumProps & PolylineOtherProps;
declare const cesiumProps: readonly ["distanceDisplayCondition", "id", "loop", "material", "positions", "show", "width"];
declare const Polyline: import("../core").CesiumComponentType<CesiumPolyline, PolylineProps>;
export default Polyline;
