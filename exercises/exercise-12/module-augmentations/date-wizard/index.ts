// This enabled module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    // Add your module extensions here.
    interface DateDetails {
        hours: number;
        year: number;
        month: number;
        date: number;
    }
    export const pad: (arg: number | string) => string;
}
