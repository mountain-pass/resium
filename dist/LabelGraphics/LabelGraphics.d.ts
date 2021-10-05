import { LabelGraphics as CesiumLabelGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type LabelGraphicsCesiumProps = PickCesiumProps<Merge<CesiumLabelGraphics, CesiumLabelGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type LabelGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type LabelGraphicsProps = LabelGraphicsCesiumProps & LabelGraphicsCesiumEvents;
declare const cesiumProps: readonly ["text", "font", "style", "fillColor", "outlineColor", "outlineWidth", "show", "showBackground", "backgroundColor", "backgroundPadding", "scale", "horizontalOrigin", "verticalOrigin", "eyeOffset", "pixelOffset", "translucencyByDistance", "pixelOffsetScaleByDistance", "scaleByDistance", "heightReference", "distanceDisplayCondition", "disableDepthTestDistance"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const LabelGraphics: import("../core").CesiumComponentType<CesiumLabelGraphics, LabelGraphicsProps>;
export default LabelGraphics;
