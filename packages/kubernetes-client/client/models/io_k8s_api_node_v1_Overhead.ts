/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_apimachinery_pkg_api_resource_Quantity } from './io_k8s_apimachinery_pkg_api_resource_Quantity';

/**
 * Overhead structure represents the resource overhead associated with running a pod.
 */
export type io_k8s_api_node_v1_Overhead = {
    /**
     * PodFixed represents the fixed resource overhead associated with running a pod.
     */
    podFixed?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
};

