/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export type io_k8s_api_autoscaling_v1_ScaleStatus = {
    /**
     * actual number of observed instances of the scaled object.
     */
    replicas: number;
    /**
     * label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: http://kubernetes.io/docs/user-guide/labels#label-selectors
     */
    selector?: string;
};

