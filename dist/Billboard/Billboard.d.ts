import { Billboard as CesiumBillboard, BillboardCollection } from "cesium";
import { EventProps, PickCesiumProps } from "../core";
export declare type BillboardCesiumProps = PickCesiumProps<CesiumBillboard, typeof cesiumProps>;
export declare type BillboardOtherProps = EventProps<{
    collection: BillboardCollection;
    id: string | undefined;
    primitive: CesiumBillboard;
}>;
export declare type BillboardProps = BillboardCesiumProps & BillboardOtherProps;
declare const cesiumProps: readonly ["alignedAxis", "color", "disableDepthTestDistance", "distanceDisplayCondition", "eyeOffset", "height", "heightReference", "horizontalOrigin", "id", "image", "pixelOffset", "pixelOffsetScaleByDistance", "position", "rotation", "scale", "scaleByDistance", "show", "sizeInMeters", "translucencyByDistance", "verticalOrigin", "width"];
declare const Billboard: import("../core").CesiumComponentType<CesiumBillboard, BillboardProps>;
export default Billboard;
