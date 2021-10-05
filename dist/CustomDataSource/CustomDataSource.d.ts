import { Billboard, BillboardCollection, CustomDataSource as CesiumCustomDataSource, Entity, Label, LabelCollection, Model, ModelMesh, ModelNode, PointPrimitive, PointPrimitiveCollection, Polyline, PolylineCollection, Primitive } from "cesium";
import { ReactNode } from "react";
import { PickCesiumProps, EventProps } from "../core";
export declare type CustomDataSourceCesiumProps = PickCesiumProps<CesiumCustomDataSource, typeof cesiumProps>;
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
export declare type CustomDataSourceCesiumEvents = EventProps<EventTarget> & {
    onChange?: (customDataSource: CesiumCustomDataSource) => void;
    onError?: (customDataSource: CesiumCustomDataSource, error: any) => void;
    onLoading?: (customDataSource: CesiumCustomDataSource, isLoaded: boolean) => void;
};
export declare type CustomDataSourceOtherProps = {
    children?: ReactNode;
};
export declare type CustomDataSourceProps = CustomDataSourceCesiumProps & CustomDataSourceCesiumEvents & CustomDataSourceOtherProps;
declare const cesiumProps: readonly ["clustering", "name", "show", "clock", "isLoading"];
export declare const cesiumEventProps: {
    readonly onChange: "changedEvent";
    readonly onError: "errorEvent";
    readonly onLoading: "loadingEvent";
};
declare const CustomDataSource: import("../core").CesiumComponentType<CesiumCustomDataSource, CustomDataSourceProps>;
export default CustomDataSource;
