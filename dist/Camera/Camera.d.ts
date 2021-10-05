import { Camera as CesiumCamera } from "cesium";
import { PickCesiumProps } from "../core";
export declare type CameraCesiumProps = PickCesiumProps<CesiumCamera, typeof cesiumProps>;
export declare type CameraCesiumEvents = {
    onChange?: (areaPercentage: number) => void;
    onMoveEnd?: () => void;
    onMoveStart?: () => void;
};
export declare type CameraProps = CameraCesiumProps & CameraCesiumEvents;
declare const cesiumProps: readonly ["position", "direction", "up", "right", "frustum", "defaultMoveAmount", "defaultLookAmount", "defaultRotateAmount", "defaultZoomAmount", "constrainedAxis", "maximumTranslateFactor", "maximumZoomFactor", "percentageChanged"];
export declare const cesiumEventProps: {
    readonly onChange: "changed";
    readonly onMoveEnd: "moveEnd";
    readonly onMoveStart: "moveStart";
};
declare const Camera: import("../core").CesiumComponentType<CesiumCamera, CameraProps>;
export default Camera;
