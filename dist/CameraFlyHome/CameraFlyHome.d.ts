/// <reference types="react" />
export declare type CameraFlyHomeProps = {
    /** Duration of camera flight (second) */
    duration: number;
    /** If true, cancel camera flight if this component is unmounted. Default value is false. */
    cancelFlightOnUnmount?: boolean;
    /** If true, camera flight will be executed only once time. */
    once?: boolean;
};
declare const CameraFlyHome: import("react").FC<CameraFlyHomeProps & import("../core").CameraOperationProps>;
export default CameraFlyHome;
