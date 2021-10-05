import { PlaneGraphics as CesiumPlaneGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type PlaneGraphicsCesiumProps = PickCesiumProps<Merge<CesiumPlaneGraphics, CesiumPlaneGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type PlaneGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type PlaneGraphicsProps = PlaneGraphicsCesiumProps & PlaneGraphicsCesiumEvents;
declare const cesiumProps: readonly ["plane", "dimensions", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "shadows", "distanceDisplayCondition"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const PlaneGraphics: import("../core").CesiumComponentType<CesiumPlaneGraphics, PlaneGraphicsProps>;
export default PlaneGraphics;
