/// <reference types="cesium" />
import { PostProcessStageCompositeProps } from "./PostProcessStageComposite";
declare type Props = {
    focalDistance?: number;
    delta?: number;
    sigma?: number;
    stepSize?: number;
};
export declare type DepthOfFieldStageProps = PostProcessStageCompositeProps & Props;
export declare const DepthOfFieldStage: import("../core").CesiumComponentType<import("cesium").PostProcessStage | import("cesium").PostProcessStageComposite, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props & {
    stages?: any[] | undefined;
}>;
export default DepthOfFieldStage;
