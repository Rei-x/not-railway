/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * PriorityLevelConfigurationCondition defines the condition of priority level.
 */
export type io_k8s_api_flowcontrol_v1beta2_PriorityLevelConfigurationCondition = {
    /**
     * `lastTransitionTime` is the last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
    /**
     * `message` is a human-readable message indicating details about last transition.
     */
    message?: string;
    /**
     * `reason` is a unique, one-word, CamelCase reason for the condition's last transition.
     */
    reason?: string;
    /**
     * `status` is the status of the condition. Can be True, False, Unknown. Required.
     */
    status?: string;
    /**
     * `type` is the type of the condition. Required.
     */
    type?: string;
};
