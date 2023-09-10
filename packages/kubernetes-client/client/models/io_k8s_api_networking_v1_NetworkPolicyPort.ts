/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_apimachinery_pkg_util_intstr_IntOrString } from './io_k8s_apimachinery_pkg_util_intstr_IntOrString';

/**
 * NetworkPolicyPort describes a port to allow traffic on
 */
export type io_k8s_api_networking_v1_NetworkPolicyPort = {
    /**
     * If set, indicates that the range of ports from port to endPort, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
     */
    endPort?: number;
    /**
     * The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
     */
    port?: io_k8s_apimachinery_pkg_util_intstr_IntOrString;
    /**
     * The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
     */
    protocol?: string;
};

