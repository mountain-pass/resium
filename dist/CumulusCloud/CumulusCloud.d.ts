import { CumulusCloud as CesiumCumulusCloud } from "cesium";
import { PickCesiumProps } from "../core";
export declare type CumulusCloudCesiumProps = PickCesiumProps<CesiumCumulusCloud, typeof cesiumProps>;
export declare type CumulusCloudProps = CumulusCloudCesiumProps;
declare const cesiumProps: readonly ["show", "position", "scale", "maximumSize", "slice", "brightness"];
declare const CumulusCloud: import("../core").CesiumComponentType<CesiumCumulusCloud, CumulusCloudCesiumProps>;
export default CumulusCloud;
