import { ReactNode } from "react";
import { Scene as CesiumScene, SceneMode } from "cesium";
import { PickCesiumProps } from "../core";
export declare type SceneCesiumProps = PickCesiumProps<CesiumScene, typeof cesiumProps>;
export declare type SceneCesiumEvents = {
    onMorphComplete?: () => void;
    onMorphStart?: () => void;
    onPostRender?: () => void;
    onPreRender?: () => void;
    onPreUpdate?: () => void;
    onPostUpdate?: () => void;
    onRenderError?: () => void;
    onTerrainProviderChange?: () => void;
};
export declare type SceneOtherProps = {
    children?: ReactNode;
    mode?: SceneMode;
    /** If this prop is set and when `mode` prop is changed, the scene morphs with this duration (seconds). */
    morphDuration?: number;
};
export declare type SceneProps = SceneCesiumProps & SceneCesiumEvents & SceneOtherProps;
declare const cesiumProps: readonly ["backgroundColor", "completeMorphOnUserInput", "debugCommandFilter", "debugShowCommands", "debugShowDepthFrustum", "debugShowFramesPerSecond", "debugShowFrustumPlanes", "debugShowFrustums", "debugShowGlobeDepth", "eyeSeparation", "farToNearRatio", "focalLength", "fog", "fxaa", "gamma", "globe", "highDynamicRange", "imagerySplitPosition", "invertClassification", "invertClassificationColor", "light", "logarithmicDepthBuffer", "logarithmicDepthFarToNearRatio", "mapMode2D", "maximumRenderTimeChange", "minimumDisableDepthTestDistance", "moon", "morphTime", "nearToFarDistance2D", "pickTranslucentDepth", "requestRenderMode", "rethrowRenderErrors", "shadowMap", "skyAtmosphere", "skyBox", "specularEnvironmentMaps", "sphericalHarmonicCoefficients", "sun", "sunBloom", "terrainProvider", "useDepthPicking", "useWebVR"];
export declare const cesiumEventProps: {
    readonly onMorphComplete: "morphComplete";
    readonly onMorphStart: "morphStart";
    readonly onPostRender: "postRender";
    readonly onPreRender: "preRender";
    readonly onPreUpdate: "preUpdate";
    readonly onPostUpdate: "postUpdate";
    readonly onRenderError: "renderError";
    readonly onTerrainProviderChange: "terrainProviderChanged";
};
declare const Scene: import("../core").CesiumComponentType<CesiumScene, SceneProps>;
export default Scene;
