import { PostProcessStageCollection, PostProcessStage, PostProcessStageComposite } from "cesium";
import { PickCesiumProps } from "./types";
export declare type PostProcessStageCesiumProps = PickCesiumProps<PostProcessStage, typeof cesiumProps>;
export declare type PostProcessStageProps = PostProcessStageCesiumProps;
declare const cesiumProps: readonly ["enabled", "selected"];
export declare const createPostProcessStage: <UniformProps>(opts: {
    name: string;
    props: (keyof UniformProps)[];
    readonlyProps?: (keyof UniformProps)[] | undefined;
    noMount?: boolean | undefined;
    create(props: Readonly<UniformProps & {} & {
        enabled?: boolean | undefined;
        selected?: any[] | undefined;
    }>, postProcessStages: PostProcessStageCollection): PostProcessStage | PostProcessStageComposite;
}) => import("./component").CesiumComponentType<PostProcessStage | PostProcessStageComposite, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & UniformProps & {
    stages?: any[] | undefined;
}>;
export default createPostProcessStage;
