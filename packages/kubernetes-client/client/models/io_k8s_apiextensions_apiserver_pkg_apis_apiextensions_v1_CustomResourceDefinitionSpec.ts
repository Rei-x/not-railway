/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion } from './io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion';
import type { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames } from './io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames';
import type { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionVersion } from './io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionVersion';

/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 */
export type io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpec = {
    /**
     * conversion defines conversion settings for the CRD.
     */
    conversion?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion;
    /**
     * group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).
     */
    group: string;
    /**
     * names specify the resource and kind names for the custom resource.
     */
    names: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames;
    /**
     * preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[*].schema.openAPIV3Schema`. See https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#field-pruning for details.
     */
    preserveUnknownFields?: boolean;
    /**
     * scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`.
     */
    scope: string;
    /**
     * versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
     */
    versions: Array<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionVersion>;
};

