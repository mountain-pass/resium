import { Event } from "cesium";
export declare type ValueOf<T> = T[keyof T];
export declare type ArrayKeys<K> = StringOnly<K extends readonly (infer E)[] ? E : K extends (infer E)[] ? E : K>;
export declare type Merge<A, B> = Omit<A, keyof B> & B;
export declare type UnionMerge<A, B> = Omit<A, keyof A & keyof B> & Omit<B, keyof A & keyof B> & {
    [K in keyof A & keyof B]: A[K] | B[K];
};
export declare type PickCesiumProps<T, K extends readonly any[] | string, Required extends ArrayKeys<K> = never> = RemoveReadOnlyAndPartial<Pick<T, ArrayKeys<K>>, Required>;
export declare type ConstructorOptions<T extends new (...args: any[]) => any> = NonNullable<ConstructorParameters<T>[0]>;
export declare type ConstructorOptions2<T extends new (...args: any[]) => any> = NonNullable<ConstructorParameters<T>[1]>;
export declare type StaticMethodOptions<T extends {
    [J in K]: (...args: any[]) => any;
}, K extends keyof T> = NonNullable<Parameters<T[K]>[0]>;
export declare type StaticMethodOptions2<T extends {
    [J in K]: (...args: any[]) => any;
}, K extends keyof T> = NonNullable<Parameters<T[K]>[1]>;
export declare type MethodOptions<T extends new (...args: any) => any & {
    [J in K]: (...args: any[]) => any;
}, K extends keyof T> = NonNullable<Parameters<InstanceType<T>[K]>[0]>;
export declare type MethodOptions2<T extends new (...args: any) => any & {
    [J in K]: (...args: any[]) => any;
}, K extends keyof T> = NonNullable<Parameters<InstanceType<T>[K]>[1]>;
export declare type UnusedCesiumProps<T, K> = Exclude<Exclude<keyof T, FunctionKeys<T> | Exclude<ReadonlyKeys<T>, CesiumEventKeys<T>>>, ArrayKeys<K>>;
declare type StringOnly<K> = K extends string ? K : never;
declare type CesiumEventKeys<T> = {
    [K in keyof T]: T[K] extends Event ? K : never;
}[keyof T];
declare type FunctionKeys<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];
declare type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;
declare type ReadonlyKeys<T> = {
    [P in keyof T]-?: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, never, P>;
}[keyof T];
declare type RemoveReadOnlyAndPartial<T, Required extends keyof T = never> = {
    -readonly [key in keyof Pick<T, Required>]: T[key];
} & {
    -readonly [key in keyof Omit<T, Required>]?: T[key];
};
export {};
