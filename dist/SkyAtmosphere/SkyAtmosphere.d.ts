import { SkyAtmosphere as CesiumSkyAtmosphere } from "cesium";
import { PickCesiumProps } from "../core";
export declare type SkyAtmosphereCesiumProps = PickCesiumProps<CesiumSkyAtmosphere, typeof cesiumProps>;
export declare type SkyAtmosphereProps = SkyAtmosphereCesiumProps;
declare const cesiumProps: readonly ["brightnessShift", "hueShift", "saturationShift", "show", "perFragmentAtmosphere"];
declare const SkyAtmosphere: import("../core").CesiumComponentType<CesiumSkyAtmosphere, SkyAtmosphereCesiumProps>;
export default SkyAtmosphere;
