/// <reference types="cesium" />
import { PostProcessStageCompositeProps } from "./PostProcessStageComposite";
declare type Props = {
    delta?: number;
    sigma?: number;
    stepSize?: number;
};
export declare type BlurStageProps = PostProcessStageCompositeProps & Props;
export declare const BlurStage: import("../core").CesiumComponentType<import("cesium").PostProcessStage | import("cesium").PostProcessStageComposite, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props & {
    stages?: any[] | undefined;
}>;
export default BlurStage;
