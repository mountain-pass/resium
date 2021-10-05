import React, { PureComponent, PropsWithoutRef, RefAttributes, ForwardRefExoticComponent, ComponentType } from "react";
export declare type CesiumProp<C> = {
    cesium: C;
};
export interface CesiumInsideComponentType<E, P = any> extends PureComponent<WithContextProps<P, any>> {
    cesiumElement: E;
}
export declare type CesiumHOCComponentType<E, P> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<CesiumInsideComponentType<E, P>>>;
export declare type WithContextProps<P, C> = P & CesiumProp<C>;
export declare type WithContextType<P, C> = ComponentType<WithContextProps<P, C>>;
export declare const withCesium: <P, C>(Component: WithContextType<P, C>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<WithContextType<P, C>>>;
