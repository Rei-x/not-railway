/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ApisService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * get available API versions
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList OK
     * @throws ApiError
     */
    public getApiVersions(): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
