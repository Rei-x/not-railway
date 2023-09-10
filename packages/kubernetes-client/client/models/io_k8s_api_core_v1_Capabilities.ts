/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Adds and removes POSIX capabilities from running containers.
 */
export type io_k8s_api_core_v1_Capabilities = {
    /**
     * Added capabilities
     */
    add?: Array<string>;
    /**
     * Removed capabilities
     */
    drop?: Array<string>;
};

