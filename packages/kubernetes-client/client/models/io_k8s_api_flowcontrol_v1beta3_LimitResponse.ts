/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_flowcontrol_v1beta3_QueuingConfiguration } from './io_k8s_api_flowcontrol_v1beta3_QueuingConfiguration';

/**
 * LimitResponse defines how to handle requests that can not be executed right now.
 */
export type io_k8s_api_flowcontrol_v1beta3_LimitResponse = {
    /**
     * `queuing` holds the configuration parameters for queuing. This field may be non-empty only if `type` is `"Queue"`.
     */
    queuing?: io_k8s_api_flowcontrol_v1beta3_QueuingConfiguration;
    /**
     * `type` is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required.
     */
    type: string;
};
