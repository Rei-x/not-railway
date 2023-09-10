/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ServiceBackendPort is the service port being referenced.
 */
export type io_k8s_api_networking_v1_ServiceBackendPort = {
    /**
     * Name is the name of the port on the Service. This is a mutually exclusive setting with "Number".
     */
    name?: string;
    /**
     * Number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with "Name".
     */
    number?: number;
};

