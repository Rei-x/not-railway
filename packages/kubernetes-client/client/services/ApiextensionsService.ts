/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ApiextensionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * get information of a group
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup OK
     * @throws ApiError
     */
    public getApiextensionsApiGroup(): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/apiextensions.k8s.io/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
