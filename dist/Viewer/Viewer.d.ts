import { ReactNode, CSSProperties } from "react";
import { Viewer as CesiumViewer, ImageryProvider } from "cesium";
import { RootEventProps, PickCesiumProps, Merge } from "../core";
export declare type ViewerCesiumProps = PickCesiumProps<CesiumViewer, typeof cesiumProps>;
export declare type ViewerCesiumReadonlyProps = Merge<PickCesiumProps<Merge<CesiumViewer, CesiumViewer.ConstructorOptions>, typeof cesiumReadonlyProps>, {
    /** If false, the default imagery layer will be removed. */
    imageryProvider?: ImageryProvider | false;
}>;
export declare type ViewerCesiumEvents = {
    onSelectedEntityChange?: () => void;
    onTrackedEntityChange?: () => void;
};
declare const cesiumProps: readonly ["terrainProvider", "terrainShadows", "clockTrackedDataSource", "targetFrameRate", "useDefaultRenderLoop", "resolutionScale", "allowDataSourcesToSuspendAnimation", "trackedEntity", "selectedEntity", "shadows", "useBrowserRecommendedResolution"];
declare const cesiumReadonlyProps: readonly ["animation", "baseLayerPicker", "fullscreenButton", "vrButton", "geocoder", "homeButton", "infoBox", "sceneModePicker", "selectionIndicator", "timeline", "navigationHelpButton", "navigationInstructionsInitiallyVisible", "scene3DOnly", "shouldAnimate", "clockViewModel", "selectedImageryProviderViewModel", "imageryProviderViewModels", "selectedTerrainProviderViewModel", "terrainProviderViewModels", "imageryProvider", "skyBox", "skyAtmosphere", "fullscreenElement", "showRenderLoopErrors", "automaticallyTrackDataSourceClocks", "contextOptions", "sceneMode", "mapProjection", "globe", "orderIndependentTranslucency", "creditContainer", "creditViewport", "dataSources", "terrainExaggeration", "mapMode2D", "projectionPicker", "requestRenderMode", "maximumRenderTimeChange"];
export declare const cesiumEventProps: {
    readonly onSelectedEntityChange: "selectedEntityChanged";
    readonly onTrackedEntityChange: "trackedEntityChanged";
};
export declare type ViewerOtherProps = RootEventProps & {
    /** Applied to outer `div` element */
    className?: string;
    /** Applied to outer `div` element */
    id?: string;
    /** Applied to outer `div` element */
    style?: CSSProperties;
    /** Same as `style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}` if it is true. */
    full?: boolean;
    /** All props applied to outer `div` element */
    containerProps?: any;
    /** It is applied in order from the top to Viewer as `viewer.extend(XXX);` after the viewer is mounted. Nothing happens even it is updated by itself. */
    extend?: CesiumViewer.ViewerMixin[] | CesiumViewer.ViewerMixin;
    children?: ReactNode;
};
export declare type ViewerProps = ViewerCesiumProps & ViewerCesiumReadonlyProps & ViewerCesiumEvents & ViewerOtherProps;
declare const Viewer: import("../core").CesiumComponentType<CesiumViewer, ViewerProps>;
export default Viewer;
