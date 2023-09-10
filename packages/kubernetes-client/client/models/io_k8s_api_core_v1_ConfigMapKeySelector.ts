/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Selects a key from a ConfigMap.
 */
export type io_k8s_api_core_v1_ConfigMapKeySelector = {
    /**
     * The key to select.
     */
    key: string;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: string;
    /**
     * Specify whether the ConfigMap or its key must be defined
     */
    optional?: boolean;
};

