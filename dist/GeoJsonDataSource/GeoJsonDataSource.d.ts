import { Billboard, BillboardCollection, Entity, GeoJsonDataSource as CesiumGeoJsonDataSource, Label, LabelCollection, Model, ModelMesh, ModelNode, PointPrimitive, PointPrimitiveCollection, Polyline, PolylineCollection, Primitive } from "cesium";
import { PickCesiumProps, Merge, MethodOptions2, EventProps } from "../core";
export declare type Target = Merge<Merge<CesiumGeoJsonDataSource, CesiumGeoJsonDataSource.LoadOptions>, MethodOptions2<typeof CesiumGeoJsonDataSource, "load">>;
export declare type GeoJsonDataSourceCesiumProps = PickCesiumProps<CesiumGeoJsonDataSource, typeof cesiumProps>;
export declare type GeoJsonDataSourceCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;
export declare type GeoJsonDataSourceCesiumEvents = {
    onChange?: (GeoJsonDataSource: CesiumGeoJsonDataSource) => void;
    onError?: (GeoJsonDataSource: CesiumGeoJsonDataSource, error: any) => void;
    onLoading?: (GeoJsonDataSource: CesiumGeoJsonDataSource, isLoaded: boolean) => void;
};
export declare type GeoJsonDataSourceOtherProps = {
    /** Calls when the Promise for loading data is fullfilled. */
    onLoad?: (GeoJsonDataSouce: CesiumGeoJsonDataSource) => void;
    data?: Parameters<InstanceType<typeof CesiumGeoJsonDataSource>["load"]>[0];
};
export declare type EventTarget = {
    id: Entity;
} & ({
    primitive: Primitive;
} | {
    primitive: Model;
    mesh: ModelMesh;
    node: ModelNode;
} | {
    collection: BillboardCollection;
    primitive: Billboard;
} | {
    collection: LabelCollection;
    primitive: Label;
} | {
    collection: PointPrimitiveCollection;
    primitive: PointPrimitive;
} | {
    collection: PolylineCollection;
    primitive: Polyline;
});
export declare type GeoJsonDataSourceProps = GeoJsonDataSourceCesiumProps & GeoJsonDataSourceCesiumReadonlyProps & GeoJsonDataSourceCesiumEvents & EventProps<EventTarget> & GeoJsonDataSourceOtherProps;
declare const cesiumProps: readonly ["clustering", "name", "show"];
declare const cesiumReadonlyProps: readonly ["clampToGround", "sourceUri", "credit", "markerSize", "markerSymbol", "markerColor", "stroke", "strokeWidth", "fill", "describe"];
export declare const cesiumEventProps: {
    readonly onChange: "changedEvent";
    readonly onError: "errorEvent";
    readonly onLoading: "loadingEvent";
};
declare const GeoJsonDataSource: import("../core").CesiumComponentType<CesiumGeoJsonDataSource, GeoJsonDataSourceProps>;
export default GeoJsonDataSource;
