import { PickCesiumProps } from "../core";
import { Globe as CesiumGlobe, TerrainProvider } from "cesium";
export declare type GlobeCesiumProps = PickCesiumProps<CesiumGlobe, typeof cesiumProps>;
export declare type GlobeCesiumEvents = {
    onImageryLayersUpdate?: () => void;
    onTerrainProviderChange?: (terrainProvider: TerrainProvider) => void;
    onTileLoadProgress?: (currentLoadQueueLength: number) => void;
};
export declare const cesiumEventProps: {
    readonly onImageryLayersUpdate: "imageryLayersUpdatedEvent";
    readonly onTerrainProviderChange: "terrainProviderChanged";
    readonly onTileLoadProgress: "tileLoadProgressEvent";
};
export declare type GlobeProps = GlobeCesiumProps & GlobeCesiumEvents;
declare const cesiumProps: readonly ["atmosphereBrightnessShift", "atmosphereHueShift", "atmosphereSaturationShift", "backFaceCulling", "baseColor", "clippingPlanes", "depthTestAgainstTerrain", "enableLighting", "lightingFadeInDistance", "lightingFadeOutDistance", "material", "maximumScreenSpaceError", "nightFadeInDistance", "nightFadeOutDistance", "oceanNormalMapUrl", "shadows", "show", "showGroundAtmosphere", "showWaterEffect", "terrainProvider", "tileCacheSize", "loadingDescendantLimit", "preloadAncestors", "preloadSiblings", "fillHighlightColor", "dynamicAtmosphereLighting", "dynamicAtmosphereLightingFromSun", "showSkirts", "cartographicLimitRectangle", "translucency", "undergroundColor", "undergroundColorAlphaByDistance", "terrainExaggeration", "terrainExaggerationRelativeHeight"];
declare const Globe: import("../core").CesiumComponentType<CesiumGlobe, GlobeProps>;
export default Globe;
