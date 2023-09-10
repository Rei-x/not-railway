/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export type io_k8s_api_core_v1_NodeSelectorRequirement = {
    /**
     * The label key that the selector applies to.
     */
    key: string;
    /**
     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
     *
     * Possible enum values:
     * - `"DoesNotExist"`
     * - `"Exists"`
     * - `"Gt"`
     * - `"In"`
     * - `"Lt"`
     * - `"NotIn"`
     */
    operator: io_k8s_api_core_v1_NodeSelectorRequirement.operator;
    /**
     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
     */
    values?: Array<string>;
};

export namespace io_k8s_api_core_v1_NodeSelectorRequirement {

    /**
     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
     *
     * Possible enum values:
     * - `"DoesNotExist"`
     * - `"Exists"`
     * - `"Gt"`
     * - `"In"`
     * - `"Lt"`
     * - `"NotIn"`
     */
    export enum operator {
        DOES_NOT_EXIST = 'DoesNotExist',
        EXISTS = 'Exists',
        GT = 'Gt',
        IN = 'In',
        LT = 'Lt',
        NOT_IN = 'NotIn',
    }


}

