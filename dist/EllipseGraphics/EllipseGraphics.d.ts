import { EllipseGraphics as CesiumEllipseGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type EllipseGraphicsCesiumProps = PickCesiumProps<Merge<CesiumEllipseGraphics, CesiumEllipseGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type EllipseGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type EllipseGraphicsProps = EllipseGraphicsCesiumProps & EllipseGraphicsCesiumEvents;
declare const cesiumProps: readonly ["semiMajorAxis", "semiMinorAxis", "height", "heightReference", "extrudedHeight", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "numberOfVerticalLines", "rotation", "stRotation", "granularity", "shadows", "distanceDisplayCondition", "zIndex", "classificationType", "extrudedHeightReference"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const EllipseGraphics: import("../core").CesiumComponentType<CesiumEllipseGraphics, EllipseGraphicsProps>;
export default EllipseGraphics;
