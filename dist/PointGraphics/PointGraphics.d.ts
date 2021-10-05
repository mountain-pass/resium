import { PointGraphics as CesiumPointGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type PointGraphicsCesiumProps = PickCesiumProps<Merge<CesiumPointGraphics, CesiumPointGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type PointGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type PointGraphicsProps = PointGraphicsCesiumProps & PointGraphicsCesiumEvents;
declare const cesiumProps: readonly ["color", "pixelSize", "outlineColor", "outlineWidth", "show", "scaleByDistance", "translucencyByDistance", "heightReference", "distanceDisplayCondition", "disableDepthTestDistance"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const PointGraphics: import("../core").CesiumComponentType<CesiumPointGraphics, PointGraphicsProps>;
export default PointGraphics;
