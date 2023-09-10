/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_core_v1_LimitRangeItem } from './io_k8s_api_core_v1_LimitRangeItem';

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export type io_k8s_api_core_v1_LimitRangeSpec = {
    /**
     * Limits is the list of LimitRangeItem objects that are enforced.
     */
    limits: Array<io_k8s_api_core_v1_LimitRangeItem>;
};

