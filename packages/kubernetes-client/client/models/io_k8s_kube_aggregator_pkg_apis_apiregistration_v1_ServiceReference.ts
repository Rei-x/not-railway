/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export type io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReference = {
    /**
     * Name is the name of the service
     */
    name?: string;
    /**
     * Namespace is the namespace of the service
     */
    namespace?: string;
    /**
     * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
     */
    port?: number;
};
