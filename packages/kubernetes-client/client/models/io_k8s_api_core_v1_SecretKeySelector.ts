/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * SecretKeySelector selects a key of a Secret.
 */
export type io_k8s_api_core_v1_SecretKeySelector = {
    /**
     * The key of the secret to select from.  Must be a valid secret key.
     */
    key: string;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: string;
    /**
     * Specify whether the Secret or its key must be defined
     */
    optional?: boolean;
};

