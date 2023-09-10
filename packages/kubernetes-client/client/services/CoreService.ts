/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { io_k8s_apimachinery_pkg_apis_meta_v1_APIVersions } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_APIVersions';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CoreService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * get available API versions
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_APIVersions OK
     * @throws ApiError
     */
    public getCoreApiVersions(): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_APIVersions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
