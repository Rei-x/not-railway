/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_networking_v1_IngressLoadBalancerStatus } from './io_k8s_api_networking_v1_IngressLoadBalancerStatus';

/**
 * IngressStatus describe the current state of the Ingress.
 */
export type io_k8s_api_networking_v1_IngressStatus = {
    /**
     * LoadBalancer contains the current status of the load-balancer.
     */
    loadBalancer?: io_k8s_api_networking_v1_IngressLoadBalancerStatus;
};

