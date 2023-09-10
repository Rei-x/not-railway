/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { io_cilium_v2_CiliumClusterwideNetworkPolicy } from '../models/io_cilium_v2_CiliumClusterwideNetworkPolicy';
import type { io_cilium_v2_CiliumClusterwideNetworkPolicyList } from '../models/io_cilium_v2_CiliumClusterwideNetworkPolicyList';
import type { io_cilium_v2_CiliumEndpoint } from '../models/io_cilium_v2_CiliumEndpoint';
import type { io_cilium_v2_CiliumEndpointList } from '../models/io_cilium_v2_CiliumEndpointList';
import type { io_cilium_v2_CiliumExternalWorkload } from '../models/io_cilium_v2_CiliumExternalWorkload';
import type { io_cilium_v2_CiliumExternalWorkloadList } from '../models/io_cilium_v2_CiliumExternalWorkloadList';
import type { io_cilium_v2_CiliumIdentity } from '../models/io_cilium_v2_CiliumIdentity';
import type { io_cilium_v2_CiliumIdentityList } from '../models/io_cilium_v2_CiliumIdentityList';
import type { io_cilium_v2_CiliumNetworkPolicy } from '../models/io_cilium_v2_CiliumNetworkPolicy';
import type { io_cilium_v2_CiliumNetworkPolicyList } from '../models/io_cilium_v2_CiliumNetworkPolicyList';
import type { io_cilium_v2_CiliumNode } from '../models/io_cilium_v2_CiliumNode';
import type { io_cilium_v2_CiliumNodeList } from '../models/io_cilium_v2_CiliumNodeList';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Patch } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_Patch';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Status } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_Status';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CiliumIoV2Service {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * list objects of kind CiliumClusterwideNetworkPolicy
     * @returns io_cilium_v2_CiliumClusterwideNetworkPolicyList OK
     * @throws ApiError
     */
    public listCiliumIoV2CiliumClusterwideNetworkPolicy({
        pretty,
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_cilium_v2_CiliumClusterwideNetworkPolicyList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumclusterwidenetworkpolicies',
            query: {
                'pretty': pretty,
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * create a CiliumClusterwideNetworkPolicy
     * @returns io_cilium_v2_CiliumClusterwideNetworkPolicy OK
     * @throws ApiError
     */
    public createCiliumIoV2CiliumClusterwideNetworkPolicy({
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        body: io_cilium_v2_CiliumClusterwideNetworkPolicy,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumClusterwideNetworkPolicy> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apis/cilium.io/v2/ciliumclusterwidenetworkpolicies',
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * delete collection of CiliumClusterwideNetworkPolicy
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCiliumIoV2CollectionCiliumClusterwideNetworkPolicy({
        pretty,
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/apis/cilium.io/v2/ciliumclusterwidenetworkpolicies',
            query: {
                'pretty': pretty,
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified CiliumClusterwideNetworkPolicy
     * @returns io_cilium_v2_CiliumClusterwideNetworkPolicy OK
     * @throws ApiError
     */
    public readCiliumIoV2CiliumClusterwideNetworkPolicy({
        name,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the CiliumClusterwideNetworkPolicy
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
    }): CancelablePromise<io_cilium_v2_CiliumClusterwideNetworkPolicy> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumclusterwidenetworkpolicies/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'resourceVersion': resourceVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified CiliumClusterwideNetworkPolicy
     * @returns io_cilium_v2_CiliumClusterwideNetworkPolicy OK
     * @throws ApiError
     */
    public replaceCiliumIoV2CiliumClusterwideNetworkPolicy({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumClusterwideNetworkPolicy
         */
        name: string,
        body: io_cilium_v2_CiliumClusterwideNetworkPolicy,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumClusterwideNetworkPolicy> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/cilium.io/v2/ciliumclusterwidenetworkpolicies/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * delete a CiliumClusterwideNetworkPolicy
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCiliumIoV2CiliumClusterwideNetworkPolicy({
        name,
        pretty,
        body,
        dryRun,
        gracePeriodSeconds,
        orphanDependents,
        propagationPolicy,
    }: {
        /**
         * name of the CiliumClusterwideNetworkPolicy
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
        /**
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/apis/cilium.io/v2/ciliumclusterwidenetworkpolicies/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'gracePeriodSeconds': gracePeriodSeconds,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * partially update the specified CiliumClusterwideNetworkPolicy
     * @returns io_cilium_v2_CiliumClusterwideNetworkPolicy OK
     * @throws ApiError
     */
    public patchCiliumIoV2CiliumClusterwideNetworkPolicy({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumClusterwideNetworkPolicy
         */
        name: string,
        body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumClusterwideNetworkPolicy> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/cilium.io/v2/ciliumclusterwidenetworkpolicies/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read status of the specified CiliumClusterwideNetworkPolicy
     * @returns io_cilium_v2_CiliumClusterwideNetworkPolicy OK
     * @throws ApiError
     */
    public readCiliumIoV2CiliumClusterwideNetworkPolicyStatus({
        name,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the CiliumClusterwideNetworkPolicy
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
    }): CancelablePromise<io_cilium_v2_CiliumClusterwideNetworkPolicy> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumclusterwidenetworkpolicies/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'resourceVersion': resourceVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace status of the specified CiliumClusterwideNetworkPolicy
     * @returns io_cilium_v2_CiliumClusterwideNetworkPolicy OK
     * @throws ApiError
     */
    public replaceCiliumIoV2CiliumClusterwideNetworkPolicyStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumClusterwideNetworkPolicy
         */
        name: string,
        body: io_cilium_v2_CiliumClusterwideNetworkPolicy,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumClusterwideNetworkPolicy> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/cilium.io/v2/ciliumclusterwidenetworkpolicies/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * partially update status of the specified CiliumClusterwideNetworkPolicy
     * @returns io_cilium_v2_CiliumClusterwideNetworkPolicy OK
     * @throws ApiError
     */
    public patchCiliumIoV2CiliumClusterwideNetworkPolicyStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumClusterwideNetworkPolicy
         */
        name: string,
        body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumClusterwideNetworkPolicy> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/cilium.io/v2/ciliumclusterwidenetworkpolicies/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list objects of kind CiliumEndpoint
     * @returns io_cilium_v2_CiliumEndpointList OK
     * @throws ApiError
     */
    public listCiliumIoV2CiliumEndpointForAllNamespaces({
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        pretty,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_cilium_v2_CiliumEndpointList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumendpoints',
            query: {
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'pretty': pretty,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list objects of kind CiliumExternalWorkload
     * @returns io_cilium_v2_CiliumExternalWorkloadList OK
     * @throws ApiError
     */
    public listCiliumIoV2CiliumExternalWorkload({
        pretty,
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_cilium_v2_CiliumExternalWorkloadList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumexternalworkloads',
            query: {
                'pretty': pretty,
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * create a CiliumExternalWorkload
     * @returns io_cilium_v2_CiliumExternalWorkload OK
     * @throws ApiError
     */
    public createCiliumIoV2CiliumExternalWorkload({
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        body: io_cilium_v2_CiliumExternalWorkload,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumExternalWorkload> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apis/cilium.io/v2/ciliumexternalworkloads',
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * delete collection of CiliumExternalWorkload
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCiliumIoV2CollectionCiliumExternalWorkload({
        pretty,
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/apis/cilium.io/v2/ciliumexternalworkloads',
            query: {
                'pretty': pretty,
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified CiliumExternalWorkload
     * @returns io_cilium_v2_CiliumExternalWorkload OK
     * @throws ApiError
     */
    public readCiliumIoV2CiliumExternalWorkload({
        name,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the CiliumExternalWorkload
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
    }): CancelablePromise<io_cilium_v2_CiliumExternalWorkload> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumexternalworkloads/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'resourceVersion': resourceVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified CiliumExternalWorkload
     * @returns io_cilium_v2_CiliumExternalWorkload OK
     * @throws ApiError
     */
    public replaceCiliumIoV2CiliumExternalWorkload({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumExternalWorkload
         */
        name: string,
        body: io_cilium_v2_CiliumExternalWorkload,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumExternalWorkload> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/cilium.io/v2/ciliumexternalworkloads/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * delete a CiliumExternalWorkload
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCiliumIoV2CiliumExternalWorkload({
        name,
        pretty,
        body,
        dryRun,
        gracePeriodSeconds,
        orphanDependents,
        propagationPolicy,
    }: {
        /**
         * name of the CiliumExternalWorkload
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
        /**
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/apis/cilium.io/v2/ciliumexternalworkloads/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'gracePeriodSeconds': gracePeriodSeconds,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * partially update the specified CiliumExternalWorkload
     * @returns io_cilium_v2_CiliumExternalWorkload OK
     * @throws ApiError
     */
    public patchCiliumIoV2CiliumExternalWorkload({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumExternalWorkload
         */
        name: string,
        body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumExternalWorkload> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/cilium.io/v2/ciliumexternalworkloads/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read status of the specified CiliumExternalWorkload
     * @returns io_cilium_v2_CiliumExternalWorkload OK
     * @throws ApiError
     */
    public readCiliumIoV2CiliumExternalWorkloadStatus({
        name,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the CiliumExternalWorkload
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
    }): CancelablePromise<io_cilium_v2_CiliumExternalWorkload> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumexternalworkloads/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'resourceVersion': resourceVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace status of the specified CiliumExternalWorkload
     * @returns io_cilium_v2_CiliumExternalWorkload OK
     * @throws ApiError
     */
    public replaceCiliumIoV2CiliumExternalWorkloadStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumExternalWorkload
         */
        name: string,
        body: io_cilium_v2_CiliumExternalWorkload,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumExternalWorkload> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/cilium.io/v2/ciliumexternalworkloads/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * partially update status of the specified CiliumExternalWorkload
     * @returns io_cilium_v2_CiliumExternalWorkload OK
     * @throws ApiError
     */
    public patchCiliumIoV2CiliumExternalWorkloadStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumExternalWorkload
         */
        name: string,
        body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumExternalWorkload> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/cilium.io/v2/ciliumexternalworkloads/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list objects of kind CiliumIdentity
     * @returns io_cilium_v2_CiliumIdentityList OK
     * @throws ApiError
     */
    public listCiliumIoV2CiliumIdentity({
        pretty,
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_cilium_v2_CiliumIdentityList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumidentities',
            query: {
                'pretty': pretty,
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * create a CiliumIdentity
     * @returns io_cilium_v2_CiliumIdentity OK
     * @throws ApiError
     */
    public createCiliumIoV2CiliumIdentity({
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        body: io_cilium_v2_CiliumIdentity,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumIdentity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apis/cilium.io/v2/ciliumidentities',
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * delete collection of CiliumIdentity
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCiliumIoV2CollectionCiliumIdentity({
        pretty,
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/apis/cilium.io/v2/ciliumidentities',
            query: {
                'pretty': pretty,
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified CiliumIdentity
     * @returns io_cilium_v2_CiliumIdentity OK
     * @throws ApiError
     */
    public readCiliumIoV2CiliumIdentity({
        name,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the CiliumIdentity
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
    }): CancelablePromise<io_cilium_v2_CiliumIdentity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumidentities/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'resourceVersion': resourceVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified CiliumIdentity
     * @returns io_cilium_v2_CiliumIdentity OK
     * @throws ApiError
     */
    public replaceCiliumIoV2CiliumIdentity({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumIdentity
         */
        name: string,
        body: io_cilium_v2_CiliumIdentity,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumIdentity> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/cilium.io/v2/ciliumidentities/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * delete a CiliumIdentity
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCiliumIoV2CiliumIdentity({
        name,
        pretty,
        body,
        dryRun,
        gracePeriodSeconds,
        orphanDependents,
        propagationPolicy,
    }: {
        /**
         * name of the CiliumIdentity
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
        /**
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/apis/cilium.io/v2/ciliumidentities/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'gracePeriodSeconds': gracePeriodSeconds,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * partially update the specified CiliumIdentity
     * @returns io_cilium_v2_CiliumIdentity OK
     * @throws ApiError
     */
    public patchCiliumIoV2CiliumIdentity({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumIdentity
         */
        name: string,
        body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumIdentity> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/cilium.io/v2/ciliumidentities/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read status of the specified CiliumIdentity
     * @returns io_cilium_v2_CiliumIdentity OK
     * @throws ApiError
     */
    public readCiliumIoV2CiliumIdentityStatus({
        name,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the CiliumIdentity
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
    }): CancelablePromise<io_cilium_v2_CiliumIdentity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumidentities/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'resourceVersion': resourceVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace status of the specified CiliumIdentity
     * @returns io_cilium_v2_CiliumIdentity OK
     * @throws ApiError
     */
    public replaceCiliumIoV2CiliumIdentityStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumIdentity
         */
        name: string,
        body: io_cilium_v2_CiliumIdentity,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumIdentity> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/cilium.io/v2/ciliumidentities/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * partially update status of the specified CiliumIdentity
     * @returns io_cilium_v2_CiliumIdentity OK
     * @throws ApiError
     */
    public patchCiliumIoV2CiliumIdentityStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumIdentity
         */
        name: string,
        body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumIdentity> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/cilium.io/v2/ciliumidentities/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list objects of kind CiliumNetworkPolicy
     * @returns io_cilium_v2_CiliumNetworkPolicyList OK
     * @throws ApiError
     */
    public listCiliumIoV2CiliumNetworkPolicyForAllNamespaces({
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        pretty,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_cilium_v2_CiliumNetworkPolicyList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumnetworkpolicies',
            query: {
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'pretty': pretty,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list objects of kind CiliumNode
     * @returns io_cilium_v2_CiliumNodeList OK
     * @throws ApiError
     */
    public listCiliumIoV2CiliumNode({
        pretty,
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_cilium_v2_CiliumNodeList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumnodes',
            query: {
                'pretty': pretty,
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * create a CiliumNode
     * @returns io_cilium_v2_CiliumNode OK
     * @throws ApiError
     */
    public createCiliumIoV2CiliumNode({
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        body: io_cilium_v2_CiliumNode,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumNode> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apis/cilium.io/v2/ciliumnodes',
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * delete collection of CiliumNode
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCiliumIoV2CollectionCiliumNode({
        pretty,
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/apis/cilium.io/v2/ciliumnodes',
            query: {
                'pretty': pretty,
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified CiliumNode
     * @returns io_cilium_v2_CiliumNode OK
     * @throws ApiError
     */
    public readCiliumIoV2CiliumNode({
        name,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the CiliumNode
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
    }): CancelablePromise<io_cilium_v2_CiliumNode> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumnodes/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'resourceVersion': resourceVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified CiliumNode
     * @returns io_cilium_v2_CiliumNode OK
     * @throws ApiError
     */
    public replaceCiliumIoV2CiliumNode({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumNode
         */
        name: string,
        body: io_cilium_v2_CiliumNode,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumNode> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/cilium.io/v2/ciliumnodes/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * delete a CiliumNode
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCiliumIoV2CiliumNode({
        name,
        pretty,
        body,
        dryRun,
        gracePeriodSeconds,
        orphanDependents,
        propagationPolicy,
    }: {
        /**
         * name of the CiliumNode
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
        /**
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/apis/cilium.io/v2/ciliumnodes/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'gracePeriodSeconds': gracePeriodSeconds,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * partially update the specified CiliumNode
     * @returns io_cilium_v2_CiliumNode OK
     * @throws ApiError
     */
    public patchCiliumIoV2CiliumNode({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumNode
         */
        name: string,
        body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumNode> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/cilium.io/v2/ciliumnodes/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read status of the specified CiliumNode
     * @returns io_cilium_v2_CiliumNode OK
     * @throws ApiError
     */
    public readCiliumIoV2CiliumNodeStatus({
        name,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the CiliumNode
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
    }): CancelablePromise<io_cilium_v2_CiliumNode> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/ciliumnodes/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'resourceVersion': resourceVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace status of the specified CiliumNode
     * @returns io_cilium_v2_CiliumNode OK
     * @throws ApiError
     */
    public replaceCiliumIoV2CiliumNodeStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumNode
         */
        name: string,
        body: io_cilium_v2_CiliumNode,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumNode> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/cilium.io/v2/ciliumnodes/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * partially update status of the specified CiliumNode
     * @returns io_cilium_v2_CiliumNode OK
     * @throws ApiError
     */
    public patchCiliumIoV2CiliumNodeStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumNode
         */
        name: string,
        body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumNode> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/cilium.io/v2/ciliumnodes/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list objects of kind CiliumEndpoint
     * @returns io_cilium_v2_CiliumEndpointList OK
     * @throws ApiError
     */
    public listCiliumIoV2NamespacedCiliumEndpoint({
        namespace,
        pretty,
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_cilium_v2_CiliumEndpointList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumendpoints',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * create a CiliumEndpoint
     * @returns io_cilium_v2_CiliumEndpoint OK
     * @throws ApiError
     */
    public createCiliumIoV2NamespacedCiliumEndpoint({
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_cilium_v2_CiliumEndpoint,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumEndpoint> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumendpoints',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * delete collection of CiliumEndpoint
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCiliumIoV2CollectionNamespacedCiliumEndpoint({
        namespace,
        pretty,
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumendpoints',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified CiliumEndpoint
     * @returns io_cilium_v2_CiliumEndpoint OK
     * @throws ApiError
     */
    public readCiliumIoV2NamespacedCiliumEndpoint({
        name,
        namespace,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the CiliumEndpoint
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
    }): CancelablePromise<io_cilium_v2_CiliumEndpoint> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumendpoints/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'resourceVersion': resourceVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified CiliumEndpoint
     * @returns io_cilium_v2_CiliumEndpoint OK
     * @throws ApiError
     */
    public replaceCiliumIoV2NamespacedCiliumEndpoint({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumEndpoint
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_cilium_v2_CiliumEndpoint,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumEndpoint> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumendpoints/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * delete a CiliumEndpoint
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCiliumIoV2NamespacedCiliumEndpoint({
        name,
        namespace,
        pretty,
        body,
        dryRun,
        gracePeriodSeconds,
        orphanDependents,
        propagationPolicy,
    }: {
        /**
         * name of the CiliumEndpoint
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
        /**
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumendpoints/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'gracePeriodSeconds': gracePeriodSeconds,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * partially update the specified CiliumEndpoint
     * @returns io_cilium_v2_CiliumEndpoint OK
     * @throws ApiError
     */
    public patchCiliumIoV2NamespacedCiliumEndpoint({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumEndpoint
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumEndpoint> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumendpoints/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list objects of kind CiliumNetworkPolicy
     * @returns io_cilium_v2_CiliumNetworkPolicyList OK
     * @throws ApiError
     */
    public listCiliumIoV2NamespacedCiliumNetworkPolicy({
        namespace,
        pretty,
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_cilium_v2_CiliumNetworkPolicyList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumnetworkpolicies',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * create a CiliumNetworkPolicy
     * @returns io_cilium_v2_CiliumNetworkPolicy OK
     * @throws ApiError
     */
    public createCiliumIoV2NamespacedCiliumNetworkPolicy({
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_cilium_v2_CiliumNetworkPolicy,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumNetworkPolicy> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumnetworkpolicies',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * delete collection of CiliumNetworkPolicy
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCiliumIoV2CollectionNamespacedCiliumNetworkPolicy({
        namespace,
        pretty,
        allowWatchBookmarks,
        _continue,
        fieldSelector,
        labelSelector,
        limit,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
        watch,
    }: {
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
         */
        allowWatchBookmarks?: boolean,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * A selector to restrict the list of returned objects by their labels. Defaults to everything.
         */
        labelSelector?: string,
        /**
         * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
        /**
         * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersionMatch?: string,
        /**
         * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
         */
        timeoutSeconds?: number,
        /**
         * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
         */
        watch?: boolean,
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumnetworkpolicies',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'allowWatchBookmarks': allowWatchBookmarks,
                'continue': _continue,
                'fieldSelector': fieldSelector,
                'labelSelector': labelSelector,
                'limit': limit,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
                'watch': watch,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified CiliumNetworkPolicy
     * @returns io_cilium_v2_CiliumNetworkPolicy OK
     * @throws ApiError
     */
    public readCiliumIoV2NamespacedCiliumNetworkPolicy({
        name,
        namespace,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the CiliumNetworkPolicy
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
    }): CancelablePromise<io_cilium_v2_CiliumNetworkPolicy> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumnetworkpolicies/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'resourceVersion': resourceVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified CiliumNetworkPolicy
     * @returns io_cilium_v2_CiliumNetworkPolicy OK
     * @throws ApiError
     */
    public replaceCiliumIoV2NamespacedCiliumNetworkPolicy({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumNetworkPolicy
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_cilium_v2_CiliumNetworkPolicy,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumNetworkPolicy> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumnetworkpolicies/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * delete a CiliumNetworkPolicy
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCiliumIoV2NamespacedCiliumNetworkPolicy({
        name,
        namespace,
        pretty,
        body,
        dryRun,
        gracePeriodSeconds,
        orphanDependents,
        propagationPolicy,
    }: {
        /**
         * name of the CiliumNetworkPolicy
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
        /**
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumnetworkpolicies/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'gracePeriodSeconds': gracePeriodSeconds,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * partially update the specified CiliumNetworkPolicy
     * @returns io_cilium_v2_CiliumNetworkPolicy OK
     * @throws ApiError
     */
    public patchCiliumIoV2NamespacedCiliumNetworkPolicy({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumNetworkPolicy
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumNetworkPolicy> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumnetworkpolicies/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read status of the specified CiliumNetworkPolicy
     * @returns io_cilium_v2_CiliumNetworkPolicy OK
     * @throws ApiError
     */
    public readCiliumIoV2NamespacedCiliumNetworkPolicyStatus({
        name,
        namespace,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the CiliumNetworkPolicy
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         * Defaults to unset
         */
        resourceVersion?: string,
    }): CancelablePromise<io_cilium_v2_CiliumNetworkPolicy> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumnetworkpolicies/{name}/status',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'resourceVersion': resourceVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace status of the specified CiliumNetworkPolicy
     * @returns io_cilium_v2_CiliumNetworkPolicy OK
     * @throws ApiError
     */
    public replaceCiliumIoV2NamespacedCiliumNetworkPolicyStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumNetworkPolicy
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_cilium_v2_CiliumNetworkPolicy,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumNetworkPolicy> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumnetworkpolicies/{name}/status',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * partially update status of the specified CiliumNetworkPolicy
     * @returns io_cilium_v2_CiliumNetworkPolicy OK
     * @throws ApiError
     */
    public patchCiliumIoV2NamespacedCiliumNetworkPolicyStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the CiliumNetworkPolicy
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
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
    }): CancelablePromise<io_cilium_v2_CiliumNetworkPolicy> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/cilium.io/v2/namespaces/{namespace}/ciliumnetworkpolicies/{name}/status',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
