/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export type io_k8s_api_autoscaling_v2_CrossVersionObjectReference = {
    /**
     * API version of the referent
     */
    apiVersion?: string;
    /**
     * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind: string;
    /**
     * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
     */
    name: string;
};

