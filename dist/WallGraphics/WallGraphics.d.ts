import { WallGraphics as CesiumWallGraphics } from "cesium";
import { EventkeyMap, PickCesiumProps } from "../core";
export declare type WallGraphicsCesiumProps = PickCesiumProps<CesiumWallGraphics | CesiumWallGraphics.ConstructorOptions, typeof cesiumProps>;
export declare type WallGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type WallGraphicsProps = WallGraphicsCesiumProps & WallGraphicsCesiumEvents;
declare const cesiumProps: readonly ["positions", "maximumHeights", "minimumHeights", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "granularity", "shadows", "distanceDisplayCondition"];
export declare const cesiumEventProps: EventkeyMap<CesiumWallGraphics, WallGraphicsCesiumEvents>;
declare const WallGraphics: import("../core").CesiumComponentType<CesiumWallGraphics, WallGraphicsProps>;
export default WallGraphics;
