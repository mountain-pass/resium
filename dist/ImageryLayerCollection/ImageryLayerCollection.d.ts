import { EventkeyMap } from "../core";
import { ImageryLayer, ImageryLayerCollection as CesiumImageryLayerCollection } from "cesium";
export declare type ImageryLayerCollectionCesiumEvents = {
    onLayerAdd?: (layer: ImageryLayer, index: number) => void;
    onLayerMove?: (layer: ImageryLayer, index: number) => void;
    onLayerRemove?: (layer: ImageryLayer, index: number) => void;
    onLayerShowOrHide?: (layer: ImageryLayer, index: number) => void;
};
export declare type ImageryLayerCollectionProps = ImageryLayerCollectionCesiumEvents;
export declare const cesiumEventProps: EventkeyMap<CesiumImageryLayerCollection, ImageryLayerCollectionCesiumEvents>;
declare const ImageryLayerCollection: import("../core").CesiumComponentType<CesiumImageryLayerCollection, ImageryLayerCollectionCesiumEvents>;
export default ImageryLayerCollection;
