/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Patch } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_Patch';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Status } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_Status';
import type { io_k8s_storage_snapshot_v1_VolumeSnapshot } from '../models/io_k8s_storage_snapshot_v1_VolumeSnapshot';
import type { io_k8s_storage_snapshot_v1_VolumeSnapshotClass } from '../models/io_k8s_storage_snapshot_v1_VolumeSnapshotClass';
import type { io_k8s_storage_snapshot_v1_VolumeSnapshotClassList } from '../models/io_k8s_storage_snapshot_v1_VolumeSnapshotClassList';
import type { io_k8s_storage_snapshot_v1_VolumeSnapshotContent } from '../models/io_k8s_storage_snapshot_v1_VolumeSnapshotContent';
import type { io_k8s_storage_snapshot_v1_VolumeSnapshotContentList } from '../models/io_k8s_storage_snapshot_v1_VolumeSnapshotContentList';
import type { io_k8s_storage_snapshot_v1_VolumeSnapshotList } from '../models/io_k8s_storage_snapshot_v1_VolumeSnapshotList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SnapshotStorageV1Service {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * list objects of kind VolumeSnapshot
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotList OK
     * @throws ApiError
     */
    public listSnapshotStorageV1NamespacedVolumeSnapshot({
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/snapshot.storage.k8s.io/v1/namespaces/{namespace}/volumesnapshots',
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
     * create a VolumeSnapshot
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshot OK
     * @throws ApiError
     */
    public createSnapshotStorageV1NamespacedVolumeSnapshot({
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
        body: io_k8s_storage_snapshot_v1_VolumeSnapshot,
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshot> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apis/snapshot.storage.k8s.io/v1/namespaces/{namespace}/volumesnapshots',
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
     * delete collection of VolumeSnapshot
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteSnapshotStorageV1CollectionNamespacedVolumeSnapshot({
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
            url: '/apis/snapshot.storage.k8s.io/v1/namespaces/{namespace}/volumesnapshots',
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
     * read the specified VolumeSnapshot
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshot OK
     * @throws ApiError
     */
    public readSnapshotStorageV1NamespacedVolumeSnapshot({
        name,
        namespace,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the VolumeSnapshot
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshot> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/snapshot.storage.k8s.io/v1/namespaces/{namespace}/volumesnapshots/{name}',
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
     * replace the specified VolumeSnapshot
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshot OK
     * @throws ApiError
     */
    public replaceSnapshotStorageV1NamespacedVolumeSnapshot({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the VolumeSnapshot
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_storage_snapshot_v1_VolumeSnapshot,
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshot> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/snapshot.storage.k8s.io/v1/namespaces/{namespace}/volumesnapshots/{name}',
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
     * delete a VolumeSnapshot
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteSnapshotStorageV1NamespacedVolumeSnapshot({
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
         * name of the VolumeSnapshot
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
            url: '/apis/snapshot.storage.k8s.io/v1/namespaces/{namespace}/volumesnapshots/{name}',
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
     * partially update the specified VolumeSnapshot
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshot OK
     * @throws ApiError
     */
    public patchSnapshotStorageV1NamespacedVolumeSnapshot({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the VolumeSnapshot
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshot> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/snapshot.storage.k8s.io/v1/namespaces/{namespace}/volumesnapshots/{name}',
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
     * read status of the specified VolumeSnapshot
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshot OK
     * @throws ApiError
     */
    public readSnapshotStorageV1NamespacedVolumeSnapshotStatus({
        name,
        namespace,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the VolumeSnapshot
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshot> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/snapshot.storage.k8s.io/v1/namespaces/{namespace}/volumesnapshots/{name}/status',
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
     * replace status of the specified VolumeSnapshot
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshot OK
     * @throws ApiError
     */
    public replaceSnapshotStorageV1NamespacedVolumeSnapshotStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the VolumeSnapshot
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_storage_snapshot_v1_VolumeSnapshot,
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshot> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/snapshot.storage.k8s.io/v1/namespaces/{namespace}/volumesnapshots/{name}/status',
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
     * partially update status of the specified VolumeSnapshot
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshot OK
     * @throws ApiError
     */
    public patchSnapshotStorageV1NamespacedVolumeSnapshotStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the VolumeSnapshot
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshot> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/snapshot.storage.k8s.io/v1/namespaces/{namespace}/volumesnapshots/{name}/status',
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
     * list objects of kind VolumeSnapshotClass
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotClassList OK
     * @throws ApiError
     */
    public listSnapshotStorageV1VolumeSnapshotClass({
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotClassList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotclasses',
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
     * create a VolumeSnapshotClass
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotClass OK
     * @throws ApiError
     */
    public createSnapshotStorageV1VolumeSnapshotClass({
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        body: io_k8s_storage_snapshot_v1_VolumeSnapshotClass,
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotClass> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotclasses',
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
     * delete collection of VolumeSnapshotClass
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteSnapshotStorageV1CollectionVolumeSnapshotClass({
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
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotclasses',
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
     * read the specified VolumeSnapshotClass
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotClass OK
     * @throws ApiError
     */
    public readSnapshotStorageV1VolumeSnapshotClass({
        name,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the VolumeSnapshotClass
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotClass> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotclasses/{name}',
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
     * replace the specified VolumeSnapshotClass
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotClass OK
     * @throws ApiError
     */
    public replaceSnapshotStorageV1VolumeSnapshotClass({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the VolumeSnapshotClass
         */
        name: string,
        body: io_k8s_storage_snapshot_v1_VolumeSnapshotClass,
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotClass> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotclasses/{name}',
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
     * delete a VolumeSnapshotClass
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteSnapshotStorageV1VolumeSnapshotClass({
        name,
        pretty,
        body,
        dryRun,
        gracePeriodSeconds,
        orphanDependents,
        propagationPolicy,
    }: {
        /**
         * name of the VolumeSnapshotClass
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
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotclasses/{name}',
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
     * partially update the specified VolumeSnapshotClass
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotClass OK
     * @throws ApiError
     */
    public patchSnapshotStorageV1VolumeSnapshotClass({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the VolumeSnapshotClass
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotClass> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotclasses/{name}',
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
     * list objects of kind VolumeSnapshotContent
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotContentList OK
     * @throws ApiError
     */
    public listSnapshotStorageV1VolumeSnapshotContent({
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotContentList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotcontents',
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
     * create a VolumeSnapshotContent
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotContent OK
     * @throws ApiError
     */
    public createSnapshotStorageV1VolumeSnapshotContent({
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        body: io_k8s_storage_snapshot_v1_VolumeSnapshotContent,
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotContent> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotcontents',
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
     * delete collection of VolumeSnapshotContent
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteSnapshotStorageV1CollectionVolumeSnapshotContent({
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
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotcontents',
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
     * read the specified VolumeSnapshotContent
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotContent OK
     * @throws ApiError
     */
    public readSnapshotStorageV1VolumeSnapshotContent({
        name,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the VolumeSnapshotContent
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotContent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotcontents/{name}',
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
     * replace the specified VolumeSnapshotContent
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotContent OK
     * @throws ApiError
     */
    public replaceSnapshotStorageV1VolumeSnapshotContent({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the VolumeSnapshotContent
         */
        name: string,
        body: io_k8s_storage_snapshot_v1_VolumeSnapshotContent,
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotContent> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotcontents/{name}',
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
     * delete a VolumeSnapshotContent
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteSnapshotStorageV1VolumeSnapshotContent({
        name,
        pretty,
        body,
        dryRun,
        gracePeriodSeconds,
        orphanDependents,
        propagationPolicy,
    }: {
        /**
         * name of the VolumeSnapshotContent
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
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotcontents/{name}',
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
     * partially update the specified VolumeSnapshotContent
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotContent OK
     * @throws ApiError
     */
    public patchSnapshotStorageV1VolumeSnapshotContent({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the VolumeSnapshotContent
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotContent> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotcontents/{name}',
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
     * read status of the specified VolumeSnapshotContent
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotContent OK
     * @throws ApiError
     */
    public readSnapshotStorageV1VolumeSnapshotContentStatus({
        name,
        pretty,
        resourceVersion,
    }: {
        /**
         * name of the VolumeSnapshotContent
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotContent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotcontents/{name}/status',
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
     * replace status of the specified VolumeSnapshotContent
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotContent OK
     * @throws ApiError
     */
    public replaceSnapshotStorageV1VolumeSnapshotContentStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the VolumeSnapshotContent
         */
        name: string,
        body: io_k8s_storage_snapshot_v1_VolumeSnapshotContent,
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotContent> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotcontents/{name}/status',
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
     * partially update status of the specified VolumeSnapshotContent
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotContent OK
     * @throws ApiError
     */
    public patchSnapshotStorageV1VolumeSnapshotContentStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the VolumeSnapshotContent
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotContent> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshotcontents/{name}/status',
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
     * list objects of kind VolumeSnapshot
     * @returns io_k8s_storage_snapshot_v1_VolumeSnapshotList OK
     * @throws ApiError
     */
    public listSnapshotStorageV1VolumeSnapshotForAllNamespaces({
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
    }): CancelablePromise<io_k8s_storage_snapshot_v1_VolumeSnapshotList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/apis/snapshot.storage.k8s.io/v1/volumesnapshots',
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

}
