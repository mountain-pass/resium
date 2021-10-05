import { ReactNode } from "react";
import { PolylineCollection as CesiumPolylineCollection } from "cesium";
import { PickCesiumProps } from "../core";
export declare type PolylineCollectionCesiumProps = PickCesiumProps<CesiumPolylineCollection, typeof cesiumProps>;
export declare type PolylineCollectionOtherProps = {
    children?: ReactNode;
};
export declare type PolylineCollectionProps = PolylineCollectionCesiumProps & PolylineCollectionOtherProps;
declare const cesiumProps: readonly ["debugShowBoundingVolume", "length", "modelMatrix", "show"];
declare const PolylineCollection: import("../core").CesiumComponentType<CesiumPolylineCollection, PolylineCollectionProps>;
export default PolylineCollection;
