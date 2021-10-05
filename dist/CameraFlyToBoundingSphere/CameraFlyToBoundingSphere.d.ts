/// <reference types="react" />
import { StaticMethodOptions2 } from "../core";
import { Camera } from "cesium";
declare type Options = StaticMethodOptions2<Camera, "flyToBoundingSphere">;
export declare type CameraFlyToBoundingSphereProps = Omit<Options, "complete" | "cancel"> & {
    boundingSphere: Parameters<Camera["flyToBoundingSphere"]>[0];
    onComplete?: Options["complete"];
    onCancel?: Options["cancel"];
    /** If true, cancel camera flight if this component is unmounted. Default value is false. */
    cancelFlightOnUnmount?: boolean;
    /** If true, camera flight will be executed only once time. */
    once?: boolean;
};
declare const CameraFlyToBoundingSphere: import("react").FC<Omit<{
    duration?: number | undefined;
    offset?: import("cesium").HeadingPitchRange | undefined;
    complete?: Camera.FlightCompleteCallback | undefined;
    cancel?: Camera.FlightCancelledCallback | undefined;
    endTransform?: import("cesium").Matrix4 | undefined;
    maximumHeight?: number | undefined;
    pitchAdjustHeight?: number | undefined;
    flyOverLongitude?: number | undefined;
    flyOverLongitudeWeight?: number | undefined;
    easingFunction?: import("cesium").EasingFunction.Callback | undefined;
}, "complete" | "cancel"> & {
    boundingSphere: Parameters<Camera["flyToBoundingSphere"]>[0];
    onComplete?: Options["complete"];
    onCancel?: Options["cancel"];
    /** If true, cancel camera flight if this component is unmounted. Default value is false. */
    cancelFlightOnUnmount?: boolean | undefined;
    /** If true, camera flight will be executed only once time. */
    once?: boolean | undefined;
} & import("../core").CameraOperationProps>;
export default CameraFlyToBoundingSphere;
