import { ScreenSpaceEventHandler, Scene, Cartesian2, Primitive, Entity, PrimitiveCollection, Cesium3DTileFeature, PointPrimitiveCollection, LabelCollection, BillboardCollection, PolylineCollection, PointPrimitive, Label, Billboard, Polyline, TimeDynamicPointCloud, ModelMesh, ModelNode, GroundPolylinePrimitive, GroundPrimitive } from "cesium";
export declare const eventManagerContextKey = "__RESIUM_EVENT_MANAGER";
export declare type EventType = keyof RootEventProps;
export declare type RootEventTarget = Cesium3DTileFeature | {
    collection?: PrimitiveCollection | PointPrimitiveCollection | LabelCollection | BillboardCollection | PolylineCollection;
    id?: Entity | string;
    mesh?: ModelMesh;
    node?: ModelNode;
    primitive?: Primitive | PointPrimitive | Label | Billboard | Polyline | TimeDynamicPointCloud | GroundPolylinePrimitive | GroundPrimitive;
};
export declare type EventProps<T> = {
    onClick?: (movement: CesiumMovementEvent, target: T) => void;
    onDoubleClick?: (movement: CesiumMovementEvent, target: T) => void;
    onMouseDown?: (movement: CesiumMovementEvent, target: T) => void;
    onMouseUp?: (movement: CesiumMovementEvent, target: T) => void;
    onMiddleClick?: (movement: CesiumMovementEvent, target: T) => void;
    onMiddleDown?: (movement: CesiumMovementEvent, target: T) => void;
    onMiddleUp?: (movement: CesiumMovementEvent, target: T) => void;
    onMouseMove?: (movement: CesiumMovementEvent, target: T) => void;
    onPinchEnd?: (movement: CesiumMovementEvent, target: T) => void;
    onPinchMove?: (movement: CesiumMovementEvent, target: T) => void;
    onPinchStart?: (movement: CesiumMovementEvent, target: T) => void;
    onRightClick?: (movement: CesiumMovementEvent, target: T) => void;
    onRightDown?: (movement: CesiumMovementEvent, target: T) => void;
    onRightUp?: (movement: CesiumMovementEvent, target: T) => void;
    onMouseEnter?: (movement: CesiumMovementEvent, target: T) => void;
    onMouseLeave?: (movement: CesiumMovementEvent, target: T) => void;
};
export declare type RootEventProps = EventProps<RootEventTarget> & {
    onWheel?: (delta: number) => void;
};
export declare type CesiumMovementEvent = {
    position?: Cartesian2;
    startPosition?: Cartesian2;
    endPosition?: Cartesian2;
};
export declare type Callback<T = any> = (e: CesiumMovementEvent, source: T) => void;
export declare const eventNames: EventType[];
export declare class EventManager {
    private static eventTypeMap;
    private scene;
    private sshe;
    private events;
    private hovered;
    constructor(scene?: Scene);
    destroy(): void;
    isDestroyed(): boolean;
    on(element: any, type: EventType, cb: Callback): void;
    off(element: any, type: EventType): void;
    setEvents(element: any, props: any): void;
    clearEvents(element: any): void;
    commit(): void;
    getScreenSpaceEventHandler(): ScreenSpaceEventHandler;
    private getEventCallback;
    private onMouseMove;
    private eventCallback;
    private pick;
}
export default EventManager;
