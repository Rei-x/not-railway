/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_apimachinery_pkg_apis_meta_v1_Condition } from './io_k8s_apimachinery_pkg_apis_meta_v1_Condition';

/**
 * NetworkPolicyStatus describe the current state of the NetworkPolicy.
 */
export type io_k8s_api_networking_v1_NetworkPolicyStatus = {
    /**
     * Conditions holds an array of metav1.Condition that describe the state of the NetworkPolicy. Current service state
     */
    conditions?: Array<io_k8s_apimachinery_pkg_apis_meta_v1_Condition>;
};

