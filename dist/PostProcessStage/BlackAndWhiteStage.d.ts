/// <reference types="cesium" />
import { PostProcessStageProps } from "./PostProcessStage";
declare type Props = {
    gradations?: number;
};
export declare type BlackAndWhiteStageProps = PostProcessStageProps & Props;
export declare const BlackAndWhiteStage: import("../core").CesiumComponentType<import("cesium").PostProcessStage | import("cesium").PostProcessStageComposite, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props & {
    stages?: any[] | undefined;
}>;
export default BlackAndWhiteStage;
