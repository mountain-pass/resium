import { Model as CesiumModel, ModelMesh, Primitive, ModelNode } from "cesium";
import { EventProps, PickCesiumProps, ConstructorOptions, Merge } from "../core";
declare type Target = Merge<Merge<CesiumModel, ConstructorOptions<typeof CesiumModel>>, Parameters<typeof CesiumModel["fromGltf"]>[0]>;
export declare type ModelCesiumProps = PickCesiumProps<CesiumModel, typeof cesiumProps>;
export declare type ModelCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;
export declare type ModalOtherProps = {
    /** Calls when the model is completely loaded. */
    onReady?: (model: CesiumModel) => void;
};
export declare type ModelProps = ModelCesiumProps & ModelCesiumReadonlyProps & EventProps<{
    id?: string;
    mesh: ModelMesh;
    node: ModelNode;
    primitive: Primitive;
}> & ModalOtherProps;
declare const cesiumProps: readonly ["basePath", "clampAnimations", "clippingPlanes", "color", "colorBlendAmount", "colorBlendMode", "debugShowBoundingVolume", "debugWireframe", "distanceDisplayCondition", "id", "imageBasedLightingFactor", "lightColor", "maximumScale", "minimumPixelSize", "modelMatrix", "scale", "shadows", "show", "silhouetteColor", "silhouetteSize", "luminanceAtZenith", "sphericalHarmonicCoefficients", "specularEnvironmentMaps", "backFaceCulling"];
declare const cesiumReadonlyProps: readonly ["allowPicking", "asynchronous", "credit", "dequantizeInShader", "gltf", "heightReference", "incrementallyLoadTextures", "scene", "url"];
declare const Model: import("../core").CesiumComponentType<CesiumModel, ModelProps>;
export default Model;
