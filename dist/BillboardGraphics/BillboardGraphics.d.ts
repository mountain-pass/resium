import { BillboardGraphics as CesiumBillboardGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type BillboardGraphicsCesiumProps = PickCesiumProps<Merge<CesiumBillboardGraphics, CesiumBillboardGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type BillboardGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type BillboardGraphicsProps = BillboardGraphicsCesiumProps & BillboardGraphicsCesiumEvents;
declare const cesiumProps: readonly ["image", "show", "scale", "horizontalOrigin", "verticalOrigin", "eyeOffset", "pixelOffset", "rotation", "alignedAxis", "width", "height", "color", "scaleByDistance", "translucencyByDistance", "pixelOffsetScaleByDistance", "imageSubRegion", "sizeInMeters", "heightReference", "distanceDisplayCondition", "disableDepthTestDistance"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const BillboardGraphics: import("../core").CesiumComponentType<CesiumBillboardGraphics, BillboardGraphicsProps>;
export default BillboardGraphics;
