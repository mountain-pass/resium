import { Cesium3DTilesetGraphics as CesiumCesium3DTilesetGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type Cesium3DTilesetGraphicsCesiumProps = PickCesiumProps<Merge<CesiumCesium3DTilesetGraphics, CesiumCesium3DTilesetGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type Cesium3DTilesetGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type Cesium3DTilesetGraphicsProps = Cesium3DTilesetGraphicsCesiumProps & Cesium3DTilesetGraphicsCesiumEvents;
declare const cesiumProps: readonly ["show", "uri", "maximumScreenSpaceError"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const Cesium3DTilesetGraphics: import("../core").CesiumComponentType<CesiumCesium3DTilesetGraphics, Cesium3DTilesetGraphicsProps>;
export default Cesium3DTilesetGraphics;
