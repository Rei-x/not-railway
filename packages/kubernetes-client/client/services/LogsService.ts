/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LogsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns void
     * @throws ApiError
     */
    public logFileListHandler(): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/logs/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public logFileHandler({
        logpath,
    }: {
        /**
         * path to the log
         */
        logpath: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/logs/{logpath}',
            path: {
                'logpath': logpath,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
