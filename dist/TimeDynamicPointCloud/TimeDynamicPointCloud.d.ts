import { TimeDynamicPointCloud as CesiumTimeDynamicPointCloud } from "cesium";
import { EventkeyMap, PickCesiumProps, ConstructorOptions, Merge, EventProps } from "../core";
export declare type TimeDynamicPointCloudCesiumProps = PickCesiumProps<Merge<CesiumTimeDynamicPointCloud, ConstructorOptions<typeof CesiumTimeDynamicPointCloud>>, typeof cesiumProps, "intervals">;
export declare type TimeDynamicPointCloudCesiumReadonlyProps = PickCesiumProps<Merge<CesiumTimeDynamicPointCloud, ConstructorOptions<typeof CesiumTimeDynamicPointCloud>>, typeof cesiumReadonlyProps>;
export declare type TimeDynamicPointCloudCesiumEvents = {
    onFrameChange?: (pointCloud: CesiumTimeDynamicPointCloud) => void;
};
export declare type TimeDynamicPointCloudOtherProps = {
    /** Calls when the point cloud is completely loaded. */
    onReady?: (pointCloud: CesiumTimeDynamicPointCloud) => void;
};
export declare type TimeDynamicPointCloudProps = TimeDynamicPointCloudCesiumProps & TimeDynamicPointCloudCesiumReadonlyProps & TimeDynamicPointCloudCesiumEvents & EventProps<{
    primitive?: CesiumTimeDynamicPointCloud;
}> & TimeDynamicPointCloudOtherProps;
declare const cesiumProps: readonly ["clippingPlanes", "maximumMemoryUsage", "modelMatrix", "shadows", "show", "style", "intervals"];
declare const cesiumReadonlyProps: readonly ["clock", "shading"];
export declare const cesiumEventProps: EventkeyMap<CesiumTimeDynamicPointCloud, TimeDynamicPointCloudCesiumEvents>;
declare const TimeDynamicPointCloud: import("../core").CesiumComponentType<CesiumTimeDynamicPointCloud, TimeDynamicPointCloudProps>;
export default TimeDynamicPointCloud;
