import { RefObject } from "react";
import { Context } from "./context";
export declare type EventkeyMap<T, P> = {
    [K in keyof P]?: keyof T;
};
export declare type Options<Element, Props, State = any> = {
    name: string;
    create?: (ctx: Context, props: Props, wrapperRef: HTMLDivElement | null) => Element | [Element, State] | undefined;
    destroy?: (element: Element, ctx: Context, wrapperRef: HTMLDivElement | null, state?: State) => void;
    provide?: (element: Element, ctx: Context, state?: State) => Partial<Context>;
    update?: (element: Element, props: Props, prevProps: Props, context: Context) => void;
    cesiumProps?: readonly (keyof Props)[];
    cesiumReadonlyProps?: readonly (keyof Props)[];
    cesiumEventProps?: EventkeyMap<Element, Props>;
    setCesiumPropsAfterCreate?: boolean;
    useCommonEvent?: boolean;
    useRootEvent?: boolean;
};
export declare const useCesiumComponent: <Element_1, Props, State = any>({ name, create, destroy, provide, update, cesiumProps, cesiumReadonlyProps, cesiumEventProps, setCesiumPropsAfterCreate, useCommonEvent, useRootEvent, }: Options<Element_1, Props, State>, props: Props, ref: any) => [Partial<Context> | undefined, boolean, RefObject<HTMLDivElement>];
