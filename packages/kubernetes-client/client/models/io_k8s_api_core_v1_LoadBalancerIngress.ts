/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_core_v1_PortStatus } from './io_k8s_api_core_v1_PortStatus';

/**
 * LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
 */
export type io_k8s_api_core_v1_LoadBalancerIngress = {
    /**
     * Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
     */
    hostname?: string;
    /**
     * IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
     */
    ip?: string;
    /**
     * Ports is a list of records of service ports If used, every port defined in the service should have an entry in it
     */
    ports?: Array<io_k8s_api_core_v1_PortStatus>;
};

