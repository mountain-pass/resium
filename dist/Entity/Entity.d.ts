import { ReactNode } from "react";
import { Billboard, BillboardCollection, Entity as CesiumEntity, Label, LabelCollection, Model, ModelMesh, ModelNode, PointPrimitive, PointPrimitiveCollection, Polyline, PolylineCollection, Primitive } from "cesium";
import { EventProps, PickCesiumProps, Merge } from "../core";
export declare type EntityCesiumProps = PickCesiumProps<Merge<CesiumEntity, CesiumEntity.ConstructorOptions>, typeof cesiumProps>;
export declare type EntityCesiumReadonlyProps = PickCesiumProps<CesiumEntity, typeof cesiumReadonlyProps>;
export declare type EntityCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type EntityOtherProps = {
    children?: ReactNode;
    /** If true, the entity will be selected. It works only inside Viewer not CesiumWidget. */
    selected?: boolean;
    /** If true, the entity will be tracked by the camera. It works only inside Viewer not CesiumWidget. */
    tracked?: boolean;
};
export declare type EventTarget = {
    id: CesiumEntity;
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
export declare type EntityProps = EntityCesiumProps & EntityCesiumReadonlyProps & EntityCesiumEvents & EventProps<EventTarget> & EntityOtherProps;
declare const cesiumProps: readonly ["availability", "billboard", "box", "corridor", "cylinder", "description", "ellipse", "ellipsoid", "entityCollection", "label", "model", "name", "orientation", "path", "plane", "parent", "point", "polygon", "polyline", "polylineVolume", "position", "properties", "rectangle", "show", "tileset", "viewFrom", "wall"];
declare const cesiumReadonlyProps: readonly ["id"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const Entity: import("../core").CesiumComponentType<CesiumEntity, EntityProps>;
export default Entity;
