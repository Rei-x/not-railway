/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_networking_v1_IngressPortStatus } from './io_k8s_api_networking_v1_IngressPortStatus';

/**
 * IngressLoadBalancerIngress represents the status of a load-balancer ingress point.
 */
export type io_k8s_api_networking_v1_IngressLoadBalancerIngress = {
    /**
     * Hostname is set for load-balancer ingress points that are DNS based.
     */
    hostname?: string;
    /**
     * IP is set for load-balancer ingress points that are IP based.
     */
    ip?: string;
    /**
     * Ports provides information about the ports exposed by this LoadBalancer.
     */
    ports?: Array<io_k8s_api_networking_v1_IngressPortStatus>;
};

