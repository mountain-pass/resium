import { ReactNode } from "react";
import { BillboardCollection as CesiumBillboardCollection } from "cesium";
import { PickCesiumProps } from "../core";
export declare type BillboardCollectionCesiumProps = PickCesiumProps<CesiumBillboardCollection, typeof cesiumProps>;
export declare type BillboardCollectionOtherProps = {
    children?: ReactNode;
};
export declare type BillboardCollectionProps = BillboardCollectionCesiumProps & BillboardCollectionOtherProps;
declare const cesiumProps: readonly ["blendOption", "debugShowBoundingVolume", "debugShowTextureAtlas", "modelMatrix", "show"];
declare const BillboardCollection: import("../core").CesiumComponentType<CesiumBillboardCollection, BillboardCollectionProps>;
export default BillboardCollection;
