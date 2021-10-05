import { ModelGraphics as CesiumModelGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type ModelGraphicsCesiumProps = PickCesiumProps<Merge<CesiumModelGraphics, CesiumModelGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type ModelGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type ModelGraphicsProps = ModelGraphicsCesiumProps & ModelGraphicsCesiumEvents;
declare const cesiumProps: readonly ["uri", "show", "scale", "minimumPixelSize", "maximumScale", "incrementallyLoadTextures", "runAnimations", "clampAnimations", "nodeTransformations", "shadows", "heightReference", "distanceDisplayCondition", "silhouetteColor", "silhouetteSize", "color", "colorBlendMode", "colorBlendAmount", "clippingPlanes", "imageBasedLightingFactor", "lightColor", "articulations"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const ModelGraphics: import("../core").CesiumComponentType<CesiumModelGraphics, ModelGraphicsProps>;
export default ModelGraphics;
