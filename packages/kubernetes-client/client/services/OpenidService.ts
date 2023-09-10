/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OpenidService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
     * @returns string OK
     * @throws ApiError
     */
    public getServiceAccountIssuerOpenIdKeyset(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/openid/v1/jwks/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
