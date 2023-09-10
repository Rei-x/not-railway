/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_networking_v1_IngressClassParametersReference } from './io_k8s_api_networking_v1_IngressClassParametersReference';

/**
 * IngressClassSpec provides information about the class of an Ingress.
 */
export type io_k8s_api_networking_v1_IngressClassSpec = {
    /**
     * Controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different Parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable.
     */
    controller?: string;
    /**
     * Parameters is a link to a custom resource containing additional configuration for the controller. This is optional if the controller does not require extra parameters.
     */
    parameters?: io_k8s_api_networking_v1_IngressClassParametersReference;
};

