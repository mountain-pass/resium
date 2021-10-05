import { SkyBox as CesiumSkyBox } from "cesium";
import { PickCesiumProps } from "../core";
export declare type SkyBoxCesiumProps = PickCesiumProps<CesiumSkyBox, typeof cesiumProps>;
export declare type SkyBoxProps = SkyBoxCesiumProps;
declare const cesiumProps: readonly ["sources", "show"];
declare const SkyBox: import("../core").CesiumComponentType<CesiumSkyBox, SkyBoxCesiumProps>;
export default SkyBox;
