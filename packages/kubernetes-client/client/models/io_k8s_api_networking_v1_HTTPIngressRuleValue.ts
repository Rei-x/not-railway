/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_networking_v1_HTTPIngressPath } from './io_k8s_api_networking_v1_HTTPIngressPath';

/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
export type io_k8s_api_networking_v1_HTTPIngressRuleValue = {
    /**
     * A collection of paths that map requests to backends.
     */
    paths: Array<io_k8s_api_networking_v1_HTTPIngressPath>;
};

