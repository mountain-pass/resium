/// <reference types="cesium" />
import { PostProcessStageProps } from "./PostProcessStage";
declare type Props = {
    brightness?: number;
};
export declare type BrightnessStageProps = PostProcessStageProps & Props;
export declare const BrightnessStage: import("../core").CesiumComponentType<import("cesium").PostProcessStage | import("cesium").PostProcessStageComposite, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props & {
    stages?: any[] | undefined;
}>;
export default BrightnessStage;
