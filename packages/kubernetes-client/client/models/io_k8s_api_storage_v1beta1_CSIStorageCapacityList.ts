/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_storage_v1beta1_CSIStorageCapacity } from './io_k8s_api_storage_v1beta1_CSIStorageCapacity';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';

/**
 * CSIStorageCapacityList is a collection of CSIStorageCapacity objects.
 */
export type io_k8s_api_storage_v1beta1_CSIStorageCapacityList = {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * Items is the list of CSIStorageCapacity objects.
     */
    items: Array<io_k8s_api_storage_v1beta1_CSIStorageCapacity>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    /**
     * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
};

