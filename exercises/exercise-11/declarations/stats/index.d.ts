declare module 'stats' {
    type IndexType = <T>(input: T[], comparator: (a: T, b: T) => number) => number;
    type ElementType = <T>(input: T[], comparator: (a: T, b: T) => number) => null | T;
    export const getMaxIndex: IndexType;
    export const getMaxElement: ElementType;
    export const getMinIndex: IndexType;
    export const getMinElement: ElementType;
    export const getMedianIndex: IndexType;
    export const getMedianElement: ElementType;
    export function getAverageValue<T>(input: T[], getValue: (obj: T) => number): number;
}