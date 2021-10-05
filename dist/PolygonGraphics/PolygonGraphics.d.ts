import { PolygonGraphics as CesiumPolygonGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type PolygonGraphicsCesiumProps = PickCesiumProps<Merge<CesiumPolygonGraphics, CesiumPolygonGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type PolygonGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type PolygonGraphicsProps = PolygonGraphicsCesiumProps & PolygonGraphicsCesiumEvents;
declare const cesiumProps: readonly ["arcType", "hierarchy", "height", "heightReference", "extrudedHeight", "extrudedHeightReference", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "stRotation", "granularity", "perPositionHeight", "closeTop", "closeBottom", "shadows", "distanceDisplayCondition", "zIndex", "classificationType"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const PolygonGraphics: import("../core").CesiumComponentType<CesiumPolygonGraphics, PolygonGraphicsProps>;
export default PolygonGraphics;
