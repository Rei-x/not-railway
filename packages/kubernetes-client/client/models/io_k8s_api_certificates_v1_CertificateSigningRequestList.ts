/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_certificates_v1_CertificateSigningRequest } from './io_k8s_api_certificates_v1_CertificateSigningRequest';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';

/**
 * CertificateSigningRequestList is a collection of CertificateSigningRequest objects
 */
export type io_k8s_api_certificates_v1_CertificateSigningRequestList = {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * items is a collection of CertificateSigningRequest objects
     */
    items: Array<io_k8s_api_certificates_v1_CertificateSigningRequest>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
};
