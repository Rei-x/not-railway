/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_networking_v1_IPBlock } from './io_k8s_api_networking_v1_IPBlock';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from './io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';

/**
 * NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed
 */
export type io_k8s_api_networking_v1_NetworkPolicyPeer = {
    /**
     * IPBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
     */
    ipBlock?: io_k8s_api_networking_v1_IPBlock;
    /**
     * Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.
     *
     * If PodSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects all Pods in the Namespaces selected by NamespaceSelector.
     */
    namespaceSelector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
    /**
     * This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.
     *
     * If NamespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the Pods matching PodSelector in the policy's own Namespace.
     */
    podSelector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
};

