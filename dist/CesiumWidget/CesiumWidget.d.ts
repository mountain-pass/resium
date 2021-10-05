import { CSSProperties, ReactNode } from "react";
import { CesiumWidget as CesiumCesiumWidget } from "cesium";
import { RootEventProps, PickCesiumProps, Merge, ConstructorOptions2 } from "../core";
declare type Target = Merge<CesiumCesiumWidget, ConstructorOptions2<typeof CesiumCesiumWidget>>;
export declare type CesiumWidgetCesiumProps = PickCesiumProps<CesiumCesiumWidget, typeof cesiumProps>;
export declare type CesiumWidgetCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;
export declare type CesiumWidgetOtherProps = RootEventProps & {
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
    children?: ReactNode;
};
declare const cesiumProps: readonly ["resolutionScale", "useDefaultRenderLoop", "targetFrameRate", "useBrowserRecommendedResolution"];
declare const cesiumReadonlyProps: readonly ["clock", "imageryProvider", "terrainProvider", "skyBox", "skyAtmosphere", "sceneMode", "scene3DOnly", "orderIndependentTranslucency", "mapMode2D", "mapProjection", "globe", "showRenderLoopErrors", "contextOptions", "creditContainer", "creditViewport", "terrainExaggeration", "shadows", "terrainShadows", "requestRenderMode", "maximumRenderTimeChange"];
export declare type CesiumWidgetProps = CesiumWidgetCesiumProps & CesiumWidgetCesiumReadonlyProps & CesiumWidgetOtherProps;
declare const CesiumWidget: import("../core").CesiumComponentType<CesiumCesiumWidget, CesiumWidgetProps>;
export default CesiumWidget;
