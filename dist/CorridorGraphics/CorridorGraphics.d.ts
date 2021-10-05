import { CorridorGraphics as CesiumCorridorGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type CorridorGraphicsCesiumProps = PickCesiumProps<Merge<CesiumCorridorGraphics, CesiumCorridorGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type CorridorCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type CorridorGraphicsProps = CorridorGraphicsCesiumProps & CorridorCesiumEvents;
declare const cesiumProps: readonly ["positions", "width", "cornerType", "height", "heightReference", "extrudedHeight", "extrudedHeightReference", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "granularity", "shadows", "distanceDisplayCondition", "zIndex", "classificationType"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const CorridorGraphics: import("../core").CesiumComponentType<CesiumCorridorGraphics, CorridorGraphicsProps>;
export default CorridorGraphics;
