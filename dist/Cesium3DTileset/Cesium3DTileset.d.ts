import { Cesium3DTileset as CesiumCesium3DTileset, Cesium3DTileFeature } from "cesium";
import { EventProps, PickCesiumProps, ConstructorOptions, Merge } from "../core";
export declare type Cesium3DTilesetCesiumProps = PickCesiumProps<CesiumCesium3DTileset, typeof cesiumProps>;
export declare type Cesium3DTilesetCesiumReadonlyProps = PickCesiumProps<Merge<CesiumCesium3DTileset, ConstructorOptions<typeof CesiumCesium3DTileset>>, typeof cesiumReadonlyProps, "url">;
export declare type Cesium3DTilesetCesiumEvents = {
    onAllTilesLoad?: () => void;
    onInitialTilesLoad?: () => void;
    onLoadProgress?: (numberOfPendingRequests: number, numberOfTilesProcessing: number) => void;
    onTileFailed?: (error: any) => void;
    onTileLoad?: (tile: CesiumCesium3DTileset) => void;
    onTileUnload?: () => void;
    onTileVisible?: (tile: CesiumCesium3DTileset) => void;
};
export declare type Cesium3DTilesetOtherProps = EventProps<Cesium3DTileFeature> & {
    /** Calls when the tile set is completely loaded. */
    onReady?: (tileset: CesiumCesium3DTileset) => void;
};
export declare type Cesium3DTilesetProps = Cesium3DTilesetCesiumProps & Cesium3DTilesetCesiumReadonlyProps & Cesium3DTilesetCesiumEvents & Cesium3DTilesetOtherProps;
declare const cesiumProps: readonly ["show", "modelMatrix", "shadows", "maximumScreenSpaceError", "maximumMemoryUsage", "cullRequestsWhileMoving", "cullRequestsWhileMovingMultiplier", "preloadWhenHidden", "preloadFlightDestinations", "preferLeaves", "progressiveResolutionHeightFraction", "foveatedScreenSpaceError", "foveatedConeSize", "foveatedMinimumScreenSpaceErrorRelaxation", "foveatedInterpolationCallback", "foveatedTimeDelay", "dynamicScreenSpaceError", "dynamicScreenSpaceErrorDensity", "dynamicScreenSpaceErrorFactor", "dynamicScreenSpaceErrorHeightFalloff", "skipLevelOfDetail", "baseScreenSpaceError", "skipScreenSpaceErrorFactor", "skipLevels", "immediatelyLoadDesiredLevelOfDetail", "loadSiblings", "clippingPlanes", "classificationType", "ellipsoid", "imageBasedLightingFactor", "lightColor", "colorBlendAmount", "colorBlendMode", "luminanceAtZenith", "sphericalHarmonicCoefficients", "specularEnvironmentMaps", "debugFreezeFrame", "debugColorizeTiles", "debugWireframe", "debugShowBoundingVolume", "debugShowContentBoundingVolume", "debugShowViewerRequestVolume", "debugShowGeometricError", "debugShowRenderingStatistics", "debugShowMemoryUsage", "debugShowUrl", "pointCloudShading", "style", "backFaceCulling", "vectorClassificationOnly", "vectorKeepDecodedPositions"];
declare const cesiumReadonlyProps: readonly ["url", "showOutline", "cullWithChildrenBounds", "debugHeatmapTilePropertyName"];
export declare const cesiumEventProps: {
    readonly onAllTilesLoad: "allTilesLoaded";
    readonly onInitialTilesLoad: "initialTilesLoaded";
    readonly onLoadProgress: "loadProgress";
    readonly onTileFailed: "tileFailed";
    readonly onTileLoad: "tileLoad";
    readonly onTileUnload: "tileUnload";
    readonly onTileVisible: "tileVisible";
};
declare const Cesium3DTileset: import("../core").CesiumComponentType<CesiumCesium3DTileset, Cesium3DTilesetProps>;
export default Cesium3DTileset;
