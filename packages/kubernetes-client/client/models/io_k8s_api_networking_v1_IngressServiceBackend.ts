/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_networking_v1_ServiceBackendPort } from './io_k8s_api_networking_v1_ServiceBackendPort';

/**
 * IngressServiceBackend references a Kubernetes Service as a Backend.
 */
export type io_k8s_api_networking_v1_IngressServiceBackend = {
    /**
     * Name is the referenced service. The service must exist in the same namespace as the Ingress object.
     */
    name: string;
    /**
     * Port of the referenced service. A port name or port number is required for a IngressServiceBackend.
     */
    port?: io_k8s_api_networking_v1_ServiceBackendPort;
};
