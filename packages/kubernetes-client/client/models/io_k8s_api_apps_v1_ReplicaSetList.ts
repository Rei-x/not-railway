/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_apps_v1_ReplicaSet } from './io_k8s_api_apps_v1_ReplicaSet';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export type io_k8s_api_apps_v1_ReplicaSetList = {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
     */
    items: Array<io_k8s_api_apps_v1_ReplicaSet>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
};

