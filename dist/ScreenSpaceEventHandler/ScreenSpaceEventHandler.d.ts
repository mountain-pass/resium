import { ReactNode } from "react";
import { ScreenSpaceEventHandler as CesiumScreenSpaceEventHandler } from "cesium";
export declare type ScreenSpaceEventHandlerProps = {
    /** If true, use the default ScreenSpaceEventHandler of the CesiumWidget instead of creating a new ScreenSpaceEventHandler object. This property cannot be changed after mounting. */
    useDefault?: boolean;
    children?: ReactNode;
};
declare const ScreenSpaceEventHandler: import("../core").CesiumComponentType<CesiumScreenSpaceEventHandler, ScreenSpaceEventHandlerProps>;
export default ScreenSpaceEventHandler;
