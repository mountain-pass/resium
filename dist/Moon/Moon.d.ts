import { Moon as CesiumMoon } from "cesium";
import { PickCesiumProps } from "../core";
export declare type MoonCesiumProps = PickCesiumProps<CesiumMoon, typeof cesiumProps>;
export declare type MoonCesiumReadonlyProps = PickCesiumProps<CesiumMoon, typeof cesiumReadonlyProps>;
export declare type MoonProps = MoonCesiumProps & MoonCesiumReadonlyProps;
declare const cesiumProps: readonly ["onlySunLighting", "show", "textureUrl"];
declare const cesiumReadonlyProps: readonly ["ellipsoid"];
declare const Moon: import("../core").CesiumComponentType<CesiumMoon, MoonProps>;
export default Moon;
