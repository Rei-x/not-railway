/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AutoscalingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * get information of a group
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup OK
     * @throws ApiError
     */
    public getAutoscalingApiGroup(): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/autoscaling/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
