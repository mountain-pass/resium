import { HTMLAttributes, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from "react";
import { Options } from "./hooks";
export declare type CesiumComponentOptions<Element, Props, State = any> = Options<Element, Props, State> & {
    renderContainer?: boolean;
    noChildren?: boolean;
    containerProps?: (keyof Props)[] | ((props: Props) => HTMLAttributes<HTMLDivElement>);
    defaultProps?: Partial<Props>;
};
export declare type CesiumComponentRef<Element> = {
    cesiumElement?: Element;
};
export declare type CesiumComponentType<Element, Props> = ForwardRefExoticComponent<PropsWithoutRef<Props> & RefAttributes<CesiumComponentRef<Element>>>;
export declare const createCesiumComponent: <Element_1, Props, State = any>({ renderContainer, noChildren, containerProps, defaultProps, ...options }: CesiumComponentOptions<Element_1, Props, State>) => CesiumComponentType<Element_1, Props>;
