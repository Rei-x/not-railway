/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 */
export type io_k8s_api_core_v1_TopologySelectorLabelRequirement = {
    /**
     * The label key that the selector applies to.
     */
    key: string;
    /**
     * An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
     */
    values: Array<string>;
};

