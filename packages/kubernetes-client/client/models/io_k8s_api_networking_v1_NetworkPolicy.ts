/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_networking_v1_NetworkPolicySpec } from './io_k8s_api_networking_v1_NetworkPolicySpec';
import type { io_k8s_api_networking_v1_NetworkPolicyStatus } from './io_k8s_api_networking_v1_NetworkPolicyStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export type io_k8s_api_networking_v1_NetworkPolicy = {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
    /**
     * Specification of the desired behavior for this NetworkPolicy.
     */
    spec?: io_k8s_api_networking_v1_NetworkPolicySpec;
    /**
     * Status is the current state of the NetworkPolicy. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    status?: io_k8s_api_networking_v1_NetworkPolicyStatus;
};

