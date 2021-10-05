import { FC } from "react";
import { Camera } from "cesium";
export declare type CameraOperationProps = {
    cancelFlightOnUnmount?: boolean;
    once?: boolean;
};
export declare const createCameraOperation: <P>(name: string, cameraOperationStart: (camera: Camera, props: P, prevProps?: P | undefined) => void) => FC<P & CameraOperationProps>;
