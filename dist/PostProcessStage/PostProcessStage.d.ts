import { PostProcessStage as CesiumPostProcessStage } from "cesium";
import { PickCesiumProps, ConstructorOptions, Merge } from "../core";
export declare type PostProcessStageCesiumProps = PickCesiumProps<CesiumPostProcessStage, typeof cesiumProps>;
export declare type PostProcessStageCesiumReadonlyProps = PickCesiumProps<Merge<CesiumPostProcessStage, ConstructorOptions<typeof CesiumPostProcessStage>>, typeof cesiumReadonlyProps, "fragmentShader">;
export declare type PostProcessStageProps = PostProcessStageCesiumProps & PostProcessStageCesiumReadonlyProps;
declare const cesiumProps: readonly ["enabled", "selected"];
declare const cesiumReadonlyProps: readonly ["clearColor", "forcePowerOfTwo", "fragmentShader", "name", "pixelDatatype", "pixelFormat", "sampleMode", "scissorRectangle", "textureScale", "uniforms"];
export declare const PostProcessStage: import("../core").CesiumComponentType<CesiumPostProcessStage, PostProcessStageProps>;
export default PostProcessStage;
