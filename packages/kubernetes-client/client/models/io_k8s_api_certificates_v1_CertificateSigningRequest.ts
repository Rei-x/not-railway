/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_certificates_v1_CertificateSigningRequestSpec } from './io_k8s_api_certificates_v1_CertificateSigningRequestSpec';
import type { io_k8s_api_certificates_v1_CertificateSigningRequestStatus } from './io_k8s_api_certificates_v1_CertificateSigningRequestStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * CertificateSigningRequest objects provide a mechanism to obtain x509 certificates by submitting a certificate signing request, and having it asynchronously approved and issued.
 *
 * Kubelets use this API to obtain:
 * 1. client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client-kubelet" signerName).
 * 2. serving certificates for TLS endpoints kube-apiserver can connect to securely (with the "kubernetes.io/kubelet-serving" signerName).
 *
 * This API can be used to request client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client" signerName), or to obtain certificates from custom non-Kubernetes signers.
 */
export type io_k8s_api_certificates_v1_CertificateSigningRequest = {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
    /**
     * spec contains the certificate request, and is immutable after creation. Only the request, signerName, expirationSeconds, and usages fields can be set on creation. Other fields are derived by Kubernetes and cannot be modified by users.
     */
    spec: io_k8s_api_certificates_v1_CertificateSigningRequestSpec;
    /**
     * status contains information about whether the request is approved or denied, and the certificate issued by the signer, or the failure condition indicating signer failure.
     */
    status?: io_k8s_api_certificates_v1_CertificateSigningRequestStatus;
};

