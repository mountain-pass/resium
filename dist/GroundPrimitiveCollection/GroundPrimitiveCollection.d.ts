import { ReactNode } from "react";
import { PrimitiveCollection } from "cesium";
import { PickCesiumProps } from "../core";
export declare type GroundPrimitiveCollectionCesiumProps = PickCesiumProps<PrimitiveCollection, typeof cesiumProps>;
export declare type GroundPrimitiveCollectionOtherProps = {
    children?: ReactNode;
};
export declare type GroundPrimitiveCollectionProps = GroundPrimitiveCollectionCesiumProps & GroundPrimitiveCollectionOtherProps;
declare const cesiumProps: readonly ["show", "destroyPrimitives"];
declare const GroundPrimitiveCollection: import("../core").CesiumComponentType<PrimitiveCollection, GroundPrimitiveCollectionProps>;
export default GroundPrimitiveCollection;
