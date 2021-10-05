/// <reference types="cesium" />
import { PostProcessStageCompositeProps } from "./PostProcessStageComposite";
declare type Props = {
    contrast?: number;
    brightness?: number;
    glowOnly?: boolean;
    delta?: number;
    sigma?: number;
    stepSize?: number;
};
export declare type BloomProps = PostProcessStageCompositeProps & Props;
export declare const Bloom: import("../core").CesiumComponentType<import("cesium").PostProcessStage | import("cesium").PostProcessStageComposite, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props & {
    stages?: any[] | undefined;
}>;
export default Bloom;
