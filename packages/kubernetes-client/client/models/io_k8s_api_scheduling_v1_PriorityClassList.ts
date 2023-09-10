/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_scheduling_v1_PriorityClass } from './io_k8s_api_scheduling_v1_PriorityClass';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';

/**
 * PriorityClassList is a collection of priority classes.
 */
export type io_k8s_api_scheduling_v1_PriorityClassList = {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * items is the list of PriorityClasses
     */
    items: Array<io_k8s_api_scheduling_v1_PriorityClass>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    /**
     * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
};
