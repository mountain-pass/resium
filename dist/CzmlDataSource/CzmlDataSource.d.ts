import { Billboard, BillboardCollection, CzmlDataSource as CesiumCzmlDataSource, Entity, Label, LabelCollection, Model, ModelMesh, ModelNode, PointPrimitive, PointPrimitiveCollection, Polyline, PolylineCollection, Primitive } from "cesium";
import { PickCesiumProps, Merge, MethodOptions2, EventProps } from "../core";
export declare type Target = Merge<Merge<CesiumCzmlDataSource, CesiumCzmlDataSource.LoadOptions>, MethodOptions2<typeof CesiumCzmlDataSource, "load">>;
export declare type CzmlDataSourceCesiumProps = PickCesiumProps<CesiumCzmlDataSource, typeof cesiumProps>;
export declare type CzmlDataSourceCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;
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
export declare type CzmlDataSourceCesiumEvents = EventProps<EventTarget> & {
    onChange?: (CzmlDataSource: CesiumCzmlDataSource) => void;
    onError?: (CzmlDataSource: CesiumCzmlDataSource, error: any) => void;
    onLoading?: (CzmlDataSource: CesiumCzmlDataSource, isLoaded: boolean) => void;
};
export declare type CzmlDataSourceOtherProps = {
    /** Calls when the Promise for loading data is fullfilled. */
    onLoad?: (CzmlDataSouce: CesiumCzmlDataSource) => void;
    data?: Parameters<CesiumCzmlDataSource["load"]>[0];
};
export declare type CzmlDataSourceProps = CzmlDataSourceCesiumProps & CzmlDataSourceCesiumReadonlyProps & CzmlDataSourceCesiumEvents & CzmlDataSourceOtherProps;
declare const cesiumProps: readonly ["clustering", "show"];
declare const cesiumReadonlyProps: readonly ["name", "sourceUri", "credit"];
export declare const cesiumEventProps: {
    readonly onChange: "changedEvent";
    readonly onError: "errorEvent";
    readonly onLoading: "loadingEvent";
};
declare const CzmlDataSource: import("../core").CesiumComponentType<CesiumCzmlDataSource, CzmlDataSourceProps>;
export default CzmlDataSource;
