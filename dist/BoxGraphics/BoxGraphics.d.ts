import { BoxGraphics as CesiumBoxGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type BoxGraphicsCesiumProps = PickCesiumProps<Merge<CesiumBoxGraphics, CesiumBoxGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type BoxGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type BoxGraphicsProps = BoxGraphicsCesiumProps & BoxGraphicsCesiumEvents;
declare const cesiumProps: readonly ["heightReference", "dimensions", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "shadows", "distanceDisplayCondition"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const BoxGraphics: import("../core").CesiumComponentType<CesiumBoxGraphics, BoxGraphicsProps>;
export default BoxGraphics;
