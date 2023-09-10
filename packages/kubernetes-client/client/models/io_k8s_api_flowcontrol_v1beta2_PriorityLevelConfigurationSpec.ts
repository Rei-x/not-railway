/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_flowcontrol_v1beta2_LimitedPriorityLevelConfiguration } from './io_k8s_api_flowcontrol_v1beta2_LimitedPriorityLevelConfiguration';

/**
 * PriorityLevelConfigurationSpec specifies the configuration of a priority level.
 */
export type io_k8s_api_flowcontrol_v1beta2_PriorityLevelConfigurationSpec = {
    /**
     * `limited` specifies how requests are handled for a Limited priority level. This field must be non-empty if and only if `type` is `"Limited"`.
     */
    limited?: io_k8s_api_flowcontrol_v1beta2_LimitedPriorityLevelConfiguration;
    /**
     * `type` indicates whether this priority level is subject to limitation on request execution.  A value of `"Exempt"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `"Limited"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.
     */
    type: string;
};

