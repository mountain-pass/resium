export declare function pick<T, K extends keyof T>(obj: T, keys?: K[]): Pick<T, K>;
export declare function entries<T>(obj: T): [keyof T, T[keyof T]][];
export declare function includes<T>(array: readonly T[] | null | undefined, value: T): boolean;
export declare function shallowEquals<T>(a1: T | null | undefined, a2: T | null | undefined): boolean;
export declare type Destroyable = {
    isDestroyed(): boolean;
    destroy(): void;
};
export declare function isDestroyable(d: any): d is Destroyable;
export declare function isDestroyed(d: any): boolean;
