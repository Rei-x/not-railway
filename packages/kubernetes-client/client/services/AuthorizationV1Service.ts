/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { io_k8s_api_authorization_v1_LocalSubjectAccessReview } from '../models/io_k8s_api_authorization_v1_LocalSubjectAccessReview';
import type { io_k8s_api_authorization_v1_SelfSubjectAccessReview } from '../models/io_k8s_api_authorization_v1_SelfSubjectAccessReview';
import type { io_k8s_api_authorization_v1_SelfSubjectRulesReview } from '../models/io_k8s_api_authorization_v1_SelfSubjectRulesReview';
import type { io_k8s_api_authorization_v1_SubjectAccessReview } from '../models/io_k8s_api_authorization_v1_SubjectAccessReview';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthorizationV1Service {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * get available resources
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList OK
     * @throws ApiError
     */
    public getAuthorizationV1ApiResources(): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/authorization.k8s.io/v1/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * create a LocalSubjectAccessReview
     * @returns io_k8s_api_authorization_v1_LocalSubjectAccessReview OK
     * @throws ApiError
     */
    public createAuthorizationV1NamespacedLocalSubjectAccessReview({
        namespace,
        body,
        dryRun,
        fieldManager,
        fieldValidation,
        pretty,
    }: {
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_authorization_v1_LocalSubjectAccessReview,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
    }): CancelablePromise<io_k8s_api_authorization_v1_LocalSubjectAccessReview> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews',
            path: {
                'namespace': namespace,
            },
            query: {
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'pretty': pretty,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * create a SelfSubjectAccessReview
     * @returns io_k8s_api_authorization_v1_SelfSubjectAccessReview OK
     * @throws ApiError
     */
    public createAuthorizationV1SelfSubjectAccessReview({
        body,
        dryRun,
        fieldManager,
        fieldValidation,
        pretty,
    }: {
        body: io_k8s_api_authorization_v1_SelfSubjectAccessReview,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
    }): CancelablePromise<io_k8s_api_authorization_v1_SelfSubjectAccessReview> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apis/authorization.k8s.io/v1/selfsubjectaccessreviews',
            query: {
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'pretty': pretty,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * create a SelfSubjectRulesReview
     * @returns io_k8s_api_authorization_v1_SelfSubjectRulesReview OK
     * @throws ApiError
     */
    public createAuthorizationV1SelfSubjectRulesReview({
        body,
        dryRun,
        fieldManager,
        fieldValidation,
        pretty,
    }: {
        body: io_k8s_api_authorization_v1_SelfSubjectRulesReview,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
    }): CancelablePromise<io_k8s_api_authorization_v1_SelfSubjectRulesReview> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apis/authorization.k8s.io/v1/selfsubjectrulesreviews',
            query: {
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'pretty': pretty,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * create a SubjectAccessReview
     * @returns io_k8s_api_authorization_v1_SubjectAccessReview OK
     * @throws ApiError
     */
    public createAuthorizationV1SubjectAccessReview({
        body,
        dryRun,
        fieldManager,
        fieldValidation,
        pretty,
    }: {
        body: io_k8s_api_authorization_v1_SubjectAccessReview,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
    }): CancelablePromise<io_k8s_api_authorization_v1_SubjectAccessReview> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apis/authorization.k8s.io/v1/subjectaccessreviews',
            query: {
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'pretty': pretty,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
