/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_core_v1_LoadBalancerStatus } from './io_k8s_api_core_v1_LoadBalancerStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Condition } from './io_k8s_apimachinery_pkg_apis_meta_v1_Condition';

/**
 * ServiceStatus represents the current status of a service.
 */
export type io_k8s_api_core_v1_ServiceStatus = {
    /**
     * Current service state
     */
    conditions?: Array<io_k8s_apimachinery_pkg_apis_meta_v1_Condition>;
    /**
     * LoadBalancer contains the current status of the load-balancer, if one is present.
     */
    loadBalancer?: io_k8s_api_core_v1_LoadBalancerStatus;
};

