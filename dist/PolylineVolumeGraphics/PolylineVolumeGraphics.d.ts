import { PolylineVolumeGraphics as CesiumPolylineVolumeGraphics } from "cesium";
import { EventkeyMap, PickCesiumProps, Merge } from "../core";
export declare type PolylineVolumeGraphicsCesiumProps = PickCesiumProps<Merge<CesiumPolylineVolumeGraphics, CesiumPolylineVolumeGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type PolylineVolumeGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type PolylineVolumeGraphicsProps = PolylineVolumeGraphicsCesiumProps & PolylineVolumeGraphicsCesiumEvents;
declare const cesiumProps: readonly ["positions", "shape", "cornerType", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "granularity", "shadows", "distanceDisplayCondition"];
export declare const cesiumEventProps: EventkeyMap<CesiumPolylineVolumeGraphics, PolylineVolumeGraphicsCesiumEvents>;
declare const PolylineVolumeGraphics: import("../core").CesiumComponentType<CesiumPolylineVolumeGraphics, PolylineVolumeGraphicsProps>;
export default PolylineVolumeGraphics;
