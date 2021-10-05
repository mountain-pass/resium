import { Sun as CesiumSun } from "cesium";
import { PickCesiumProps } from "../core";
export declare type SunCesiumProps = PickCesiumProps<CesiumSun, typeof cesiumProps>;
export declare type SunProps = SunCesiumProps;
declare const cesiumProps: readonly ["glowFactor", "show"];
declare const Sun: import("../core").CesiumComponentType<CesiumSun, SunCesiumProps>;
export default Sun;
