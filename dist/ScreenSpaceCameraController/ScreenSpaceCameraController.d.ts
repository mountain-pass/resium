import { ScreenSpaceCameraController as CesiumScreenSpaceCameraController } from "cesium";
import { PickCesiumProps } from "../core";
export declare type ScreenSpaceCameraControllerCesiumProps = PickCesiumProps<CesiumScreenSpaceCameraController, typeof cesiumProps>;
export declare type ScreenSpaceCameraControllerProps = ScreenSpaceCameraControllerCesiumProps;
declare const cesiumProps: readonly ["bounceAnimationTime", "enableCollisionDetection", "enableInputs", "enableLook", "enableRotate", "enableTilt", "enableTranslate", "enableZoom", "inertiaSpin", "inertiaTranslate", "inertiaZoom", "lookEventTypes", "maximumMovementRatio", "maximumZoomDistance", "minimumCollisionTerrainHeight", "minimumPickingTerrainHeight", "minimumTrackBallHeight", "minimumZoomDistance", "rotateEventTypes", "tiltEventTypes", "translateEventTypes", "zoomEventTypes"];
declare const ScreenSpaceCameraController: import("../core").CesiumComponentType<CesiumScreenSpaceCameraController, ScreenSpaceCameraControllerCesiumProps>;
export default ScreenSpaceCameraController;
