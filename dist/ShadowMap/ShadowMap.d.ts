import { ShadowMap as CesiumShadowMap } from "cesium";
import { PickCesiumProps } from "../core";
export declare type ShadowMapCesiumProps = PickCesiumProps<CesiumShadowMap, typeof cesiumProps>;
export declare type ShadowMapProps = ShadowMapCesiumProps;
declare const cesiumProps: readonly ["darkness", "enabled", "maximumDistance", "normalOffset", "size", "softShadows", "fadingEnabled"];
declare const ShadowMap: import("../core").CesiumComponentType<CesiumShadowMap, ShadowMapCesiumProps>;
export default ShadowMap;
