import { RectangleGraphics as CesiumRectangleGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type RectangleGraphicsCesiumProps = PickCesiumProps<Merge<CesiumRectangleGraphics, CesiumRectangleGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type RectangleGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type RectangleGraphicsProps = RectangleGraphicsCesiumProps & RectangleGraphicsCesiumEvents;
declare const cesiumProps: readonly ["classificationType", "coordinates", "height", "heightReference", "extrudedHeight", "extrudedHeightReference", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "rotation", "stRotation", "granularity", "shadows", "distanceDisplayCondition", "zIndex"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const RectangleGraphics: import("../core").CesiumComponentType<CesiumRectangleGraphics, RectangleGraphicsProps>;
export default RectangleGraphics;
