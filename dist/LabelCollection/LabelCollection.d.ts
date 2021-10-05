import { ReactNode } from "react";
import { LabelCollection as CesiumLabelCollection } from "cesium";
import { PickCesiumProps } from "../core";
export declare type LabelCollectionCesiumProps = PickCesiumProps<CesiumLabelCollection, typeof cesiumProps>;
export declare type LabelCollectionOtherProps = {
    children?: ReactNode;
};
export declare type LabelCollectionProps = LabelCollectionCesiumProps & LabelCollectionOtherProps;
declare const cesiumProps: readonly ["blendOption", "debugShowBoundingVolume", "modelMatrix", "show"];
declare const LabelCollection: import("../core").CesiumComponentType<CesiumLabelCollection, LabelCollectionProps>;
export default LabelCollection;
