import { Color } from "cesium";
import { PostProcessStageCompositeProps } from "./PostProcessStageComposite";
declare type Props = {
    color?: Color;
    length?: number;
};
export declare type EdgeDetectionStageProps = PostProcessStageCompositeProps & Props;
export declare const EdgeDetectionStage: import("../core").CesiumComponentType<import("cesium").PostProcessStage | import("cesium").PostProcessStageComposite, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props & {
    stages?: any[] | undefined;
}>;
export default EdgeDetectionStage;
