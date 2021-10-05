import { PickCesiumProps } from "../core";
import { Fog as CesiumFog } from "cesium";
export declare type FogCesiumProps = PickCesiumProps<CesiumFog, typeof cesiumProps>;
export declare type FogProps = FogCesiumProps;
declare const cesiumProps: readonly ["density", "enabled", "minimumBrightness", "screenSpaceErrorFactor"];
declare const Fog: import("../core").CesiumComponentType<CesiumFog, FogCesiumProps>;
export default Fog;
