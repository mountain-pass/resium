/// <reference types="cesium" />
import { PostProcessStageCompositeProps } from "./PostProcessStageComposite";
declare type Props = {
    intensity?: number;
    bias?: number;
    lengthCap?: number;
    stepSize?: number;
    frustumLength?: number;
    ambientOcclusionOnly?: boolean;
    delta?: number;
    sigma?: number;
};
export declare type AmbientOcclusionProps = PostProcessStageCompositeProps & Props;
export declare const AmbientOcclusion: import("../core").CesiumComponentType<import("cesium").PostProcessStage | import("cesium").PostProcessStageComposite, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props & {
    stages?: any[] | undefined;
}>;
export default AmbientOcclusion;
