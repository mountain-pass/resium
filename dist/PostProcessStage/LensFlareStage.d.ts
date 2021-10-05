/// <reference types="cesium" />
import { PostProcessStageProps } from "./PostProcessStage";
declare type Props = {
    dirtTexture?: any;
    starTexture?: any;
    intensity?: number;
    distortion?: number;
    ghostDispersal?: number;
    haloWidth?: number;
    earthRadius?: number;
};
export declare type LensFlareStageProps = PostProcessStageProps & Props;
export declare const LensFlareStage: import("../core").CesiumComponentType<import("cesium").PostProcessStage | import("cesium").PostProcessStageComposite, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props & {
    stages?: any[] | undefined;
}>;
export default LensFlareStage;
