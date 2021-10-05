import { PathGraphics as CesiumPathGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type PathGraphicsCesiumProps = PickCesiumProps<Merge<CesiumPathGraphics, CesiumPathGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type PathGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type PathGraphicsProps = PathGraphicsCesiumProps & PathGraphicsCesiumEvents;
declare const cesiumProps: readonly ["leadTime", "trailTime", "show", "width", "material", "resolution", "distanceDisplayCondition"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const PathGraphics: import("../core").CesiumComponentType<CesiumPathGraphics, PathGraphicsProps>;
export default PathGraphics;
