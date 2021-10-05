/// <reference types="react" />
import { Viewer, CesiumWidget, Scene, Globe, Camera, ScreenSpaceEventHandler, Entity, DataSourceCollection, DataSource, EntityCollection, ImageryLayerCollection, PrimitiveCollection, BillboardCollection, LabelCollection, PolylineCollection, PointPrimitiveCollection, CloudCollection } from "cesium";
import EventManager, { eventManagerContextKey } from "./EventManager";
export declare type Context = {
    viewer?: Viewer;
    cesiumWidget?: CesiumWidget;
    scene?: Scene;
    globe?: Globe;
    camera?: Camera;
    screenSpaceEventHandler?: ScreenSpaceEventHandler;
    entity?: Entity;
    dataSourceCollection?: DataSourceCollection;
    dataSource?: DataSource;
    entityCollection?: EntityCollection;
    imageryLayerCollection?: ImageryLayerCollection;
    primitiveCollection?: PrimitiveCollection;
    billboardCollection?: BillboardCollection;
    labelCollection?: LabelCollection;
    polylineCollection?: PolylineCollection;
    pointPrimitiveCollection?: PointPrimitiveCollection;
    cloudCollection?: CloudCollection;
    [eventManagerContextKey]?: EventManager;
};
export declare const CesiumContext: import("react").Context<any>;
export declare const Provider: import("react").Provider<any>, Consumer: import("react").Consumer<any>;
export declare const useCesium: () => Context;
