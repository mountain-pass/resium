import { ImageryLayer as CesiumImageryLayer } from "cesium";
import { PickCesiumProps, Merge, ConstructorOptions2 } from "../core";
export declare type ImageryLayerCesiumProps = PickCesiumProps<CesiumImageryLayer, typeof cesiumProps>;
export declare type ImageryLayerCesiumReadonlyProps = PickCesiumProps<Merge<CesiumImageryLayer, ConstructorOptions2<typeof CesiumImageryLayer>>, typeof cesiumReadonlyProps, "imageryProvider">;
export declare type ImageryLayerProps = ImageryLayerCesiumProps & ImageryLayerCesiumReadonlyProps;
declare const cesiumProps: readonly ["alpha", "brightness", "contrast", "hue", "saturation", "gamma", "splitDirection", "minificationFilter", "magnificationFilter", "cutoutRectangle", "show", "nightAlpha", "dayAlpha", "colorToAlpha", "colorToAlphaThreshold"];
declare const cesiumReadonlyProps: readonly ["imageryProvider", "rectangle", "maximumAnisotropy", "minimumTerrainLevel", "maximumTerrainLevel"];
declare const ImageryLayer: import("../core").CesiumComponentType<CesiumImageryLayer, ImageryLayerProps>;
export default ImageryLayer;
