/// <reference types="react" />
import { Camera } from "cesium";
declare type Options = Parameters<Camera["flyTo"]>[0];
export declare type CameraFlyToProps = Omit<Options, "complete" | "cancel"> & {
    onComplete?: Options["complete"];
    onCancel?: Options["cancel"];
    /** If true, cancel camera flight if this component is unmounted. Default value is false. */
    cancelFlightOnUnmount?: boolean;
    /** If true, camera flight will be executed only once time. */
    once?: boolean;
};
declare const CameraFlyTo: import("react").FC<Omit<{
    destination: import("cesium").Cartesian3 | import("cesium").Rectangle;
    orientation?: any;
    duration?: number | undefined;
    complete?: Camera.FlightCompleteCallback | undefined;
    cancel?: Camera.FlightCancelledCallback | undefined;
    endTransform?: import("cesium").Matrix4 | undefined;
    maximumHeight?: number | undefined;
    pitchAdjustHeight?: number | undefined;
    flyOverLongitude?: number | undefined;
    flyOverLongitudeWeight?: number | undefined;
    convert?: boolean | undefined;
    easingFunction?: import("cesium").EasingFunction.Callback | undefined;
}, "complete" | "cancel"> & {
    onComplete?: Options["complete"];
    onCancel?: Options["cancel"];
    /** If true, cancel camera flight if this component is unmounted. Default value is false. */
    cancelFlightOnUnmount?: boolean | undefined;
    /** If true, camera flight will be executed only once time. */
    once?: boolean | undefined;
} & import("../core").CameraOperationProps>;
export default CameraFlyTo;
