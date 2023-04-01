import type { ExtractPropTypes } from 'vue';
export declare const buttonTypes: readonly ["default", "primary", "success", "warning", "info", "danger", "text", ""];
export declare const buttonProps: {
    type: {
        type: StringConstructor;
        values: readonly ["default", "primary", "success", "warning", "info", "danger", "text", ""];
        default: string;
    };
    size: {
        type: StringConstructor;
    };
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
