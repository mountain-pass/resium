/// <reference types="react" />
import { Camera } from "cesium";
export declare type CameraLookAtProps = {
    target: Parameters<Camera["lookAt"]>[0];
    offset: Parameters<Camera["lookAt"]>[1];
};
declare const CameraLookAt: import("react").FC<CameraLookAtProps & import("../core").CameraOperationProps>;
export default CameraLookAt;
