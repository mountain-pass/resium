import { Billboard, BillboardCollection, Entity, KmlDataSource as CesiumKmlDataSource, Label, LabelCollection, Model, ModelMesh, ModelNode, PointPrimitive, PointPrimitiveCollection, Polyline, PolylineCollection, Primitive } from "cesium";
import { PickCesiumProps, Merge, MethodOptions2, EventProps } from "../core";
export declare type Target = Merge<Merge<CesiumKmlDataSource, CesiumKmlDataSource.LoadOptions>, MethodOptions2<typeof CesiumKmlDataSource, "load">>;
export declare type KmlDataSourceCesiumProps = PickCesiumProps<CesiumKmlDataSource, typeof cesiumProps>;
export declare type KmlDataSourceCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;
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
export declare type KmlDataSourceCesiumEvents = EventProps<EventTarget> & {
    onChange?: (kmlDataSource: CesiumKmlDataSource) => void;
    onError?: (kmlDataSource: CesiumKmlDataSource, error: any) => void;
    onLoading?: (kmlDataSource: CesiumKmlDataSource, isLoaded: boolean) => void;
    onRefresh?: (kmlDataSource: CesiumKmlDataSource, urlComponent: string) => void;
    onUnsupportedNode?: (kmlDataSource: CesiumKmlDataSource) => void;
};
export declare type KmlDataSourceOtherProps = {
    /** Calls when the Promise for loading data is fullfilled. */
    onLoad?: (kmlDataSouce: CesiumKmlDataSource) => void;
    data?: Parameters<InstanceType<typeof CesiumKmlDataSource>["load"]>[0];
};
export declare type KmlDataSourceProps = KmlDataSourceCesiumProps & KmlDataSourceCesiumReadonlyProps & KmlDataSourceCesiumEvents & KmlDataSourceOtherProps;
declare const cesiumProps: readonly ["clustering", "name", "show"];
declare const cesiumReadonlyProps: readonly ["canvas", "camera", "ellipsoid", "clampToGround", "sourceUri", "credit"];
export declare const cesiumEventProps: {
    readonly onChange: "changedEvent";
    readonly onError: "errorEvent";
    readonly onLoading: "loadingEvent";
    readonly onRefresh: "refreshEvent";
    readonly onUnsupportedNode: "unsupportedNodeEvent";
};
declare const KmlDataSource: import("../core").CesiumComponentType<CesiumKmlDataSource, KmlDataSourceProps>;
export default KmlDataSource;
