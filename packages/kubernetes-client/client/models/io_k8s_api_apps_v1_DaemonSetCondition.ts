/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export type io_k8s_api_apps_v1_DaemonSetCondition = {
    /**
     * Last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
    /**
     * A human readable message indicating details about the transition.
     */
    message?: string;
    /**
     * The reason for the condition's last transition.
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     */
    status: string;
    /**
     * Type of DaemonSet condition.
     */
    type: string;
};

