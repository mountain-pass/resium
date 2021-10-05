import { PolylineGraphics as CesiumPolylineGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type PolylineGraphicsCesiumProps = PickCesiumProps<Merge<CesiumPolylineGraphics, CesiumPolylineGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type PolylineGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type PolylineGraphicsProps = PolylineGraphicsCesiumProps & PolylineGraphicsCesiumEvents;
declare const cesiumProps: readonly ["arcType", "classificationType", "positions", "followSurface", "clampToGround", "width", "show", "material", "depthFailMaterial", "granularity", "shadows", "distanceDisplayCondition", "zIndex"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const PolylineGraphics: import("../core").CesiumComponentType<CesiumPolylineGraphics, PolylineGraphicsProps>;
export default PolylineGraphics;
