import { ReactNode } from "react";
import { PointPrimitiveCollection as CesiumPointPrimitiveCollection } from "cesium";
import { PickCesiumProps } from "../core";
export declare type PointPrimitiveCollectionCesiumProps = PickCesiumProps<CesiumPointPrimitiveCollection, typeof cesiumProps>;
export declare type PointPrimitiveCollectionOtherProps = {
    children?: ReactNode;
};
export declare type PointPrimitiveCollectionProps = PointPrimitiveCollectionCesiumProps & PointPrimitiveCollectionOtherProps;
declare const cesiumProps: readonly ["blendOption", "debugShowBoundingVolume", "modelMatrix", "show"];
declare const PointPrimitiveCollection: import("../core").CesiumComponentType<CesiumPointPrimitiveCollection, PointPrimitiveCollectionProps>;
export default PointPrimitiveCollection;
