/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { io_k8s_apimachinery_pkg_version_Info } from '../models/io_k8s_apimachinery_pkg_version_Info';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class VersionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * get the code version
     * @returns io_k8s_apimachinery_pkg_version_Info OK
     * @throws ApiError
     */
    public getCodeVersion(): CancelablePromise<io_k8s_apimachinery_pkg_version_Info> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/version/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
