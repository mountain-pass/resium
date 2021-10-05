import { Clock as CesiumClock, ClockRange, ClockStep, JulianDate } from "cesium";
import { PickCesiumProps } from "../core";
export declare type ClockCesiumProps = PickCesiumProps<CesiumClock, typeof cesiumProps> & {
    canAnimate?: boolean;
    clockRange?: ClockRange;
    clockStep?: ClockStep;
    currentTime?: JulianDate;
    multiplier?: number;
    shouldAnimate?: boolean;
    startTime?: JulianDate;
    stopTime?: JulianDate;
};
export declare type ClockCesiumEvents = {
    onStop?: (clock: CesiumClock) => void;
    onTick?: (clock: CesiumClock) => void;
};
export declare const cesiumEventProps: {
    readonly onStop: "onStop";
    readonly onTick: "onTick";
};
export declare type ClockProps = ClockCesiumProps & ClockCesiumEvents;
declare const cesiumProps: readonly ["canAnimate", "clockRange", "clockStep", "currentTime", "multiplier", "shouldAnimate", "startTime", "stopTime"];
declare const Clock: import("../core").CesiumComponentType<CesiumClock, ClockProps>;
export default Clock;
