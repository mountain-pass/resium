import { FC } from "react";
import { ScreenSpaceEventType, KeyboardEventModifier, Cartesian2 } from "cesium";
export declare type ScreenSpaceEventProps = {
    /** If empty, the event will be removed even if there is the default event. */
    action?: (e: {
        position: Cartesian2;
    } | {
        startPosition: Cartesian2;
        endPosition: Cartesian2;
    }) => void;
    modifier?: KeyboardEventModifier;
    type: ScreenSpaceEventType;
};
declare const ScreenSpaceEvent: FC<ScreenSpaceEventProps>;
export default ScreenSpaceEvent;
