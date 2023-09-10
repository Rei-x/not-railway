/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_authentication_v1_BoundObjectReference } from './io_k8s_api_authentication_v1_BoundObjectReference';

/**
 * TokenRequestSpec contains client provided parameters of a token request.
 */
export type io_k8s_api_authentication_v1_TokenRequestSpec = {
    /**
     * Audiences are the intendend audiences of the token. A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.
     */
    audiences: Array<string>;
    /**
     * BoundObjectRef is a reference to an object that the token will be bound to. The token will only be valid for as long as the bound object exists. NOTE: The API server's TokenReview endpoint will validate the BoundObjectRef, but other audiences may not. Keep ExpirationSeconds small if you want prompt revocation.
     */
    boundObjectRef?: io_k8s_api_authentication_v1_BoundObjectReference;
    /**
     * ExpirationSeconds is the requested duration of validity of the request. The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response.
     */
    expirationSeconds?: number;
};
