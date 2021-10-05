import { ReactNode } from "react";
import { CloudCollection as CesiumCloudCollection } from "cesium";
import { PickCesiumProps } from "../core";
export declare type CloudCollectionCesiumProps = PickCesiumProps<CesiumCloudCollection, typeof cesiumProps>;
export declare type CloudCollectionOtherProps = {
    children?: ReactNode;
};
export declare type CloudCollectionProps = CloudCollectionCesiumProps & CloudCollectionOtherProps;
declare const cesiumProps: readonly ["noiseDetail", "noiseOffset", "show", "debugBillboards", "debugEllipsoids"];
declare const CloudCollection: import("../core").CesiumComponentType<CesiumCloudCollection, CloudCollectionProps>;
export default CloudCollection;
