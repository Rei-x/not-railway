/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { io_k8s_api_authentication_v1_TokenRequest } from '../models/io_k8s_api_authentication_v1_TokenRequest';
import type { io_k8s_api_autoscaling_v1_Scale } from '../models/io_k8s_api_autoscaling_v1_Scale';
import type { io_k8s_api_core_v1_Binding } from '../models/io_k8s_api_core_v1_Binding';
import type { io_k8s_api_core_v1_ComponentStatus } from '../models/io_k8s_api_core_v1_ComponentStatus';
import type { io_k8s_api_core_v1_ComponentStatusList } from '../models/io_k8s_api_core_v1_ComponentStatusList';
import type { io_k8s_api_core_v1_ConfigMap } from '../models/io_k8s_api_core_v1_ConfigMap';
import type { io_k8s_api_core_v1_ConfigMapList } from '../models/io_k8s_api_core_v1_ConfigMapList';
import type { io_k8s_api_core_v1_Endpoints } from '../models/io_k8s_api_core_v1_Endpoints';
import type { io_k8s_api_core_v1_EndpointsList } from '../models/io_k8s_api_core_v1_EndpointsList';
import type { io_k8s_api_core_v1_Event } from '../models/io_k8s_api_core_v1_Event';
import type { io_k8s_api_core_v1_EventList } from '../models/io_k8s_api_core_v1_EventList';
import type { io_k8s_api_core_v1_LimitRange } from '../models/io_k8s_api_core_v1_LimitRange';
import type { io_k8s_api_core_v1_LimitRangeList } from '../models/io_k8s_api_core_v1_LimitRangeList';
import type { io_k8s_api_core_v1_Namespace } from '../models/io_k8s_api_core_v1_Namespace';
import type { io_k8s_api_core_v1_NamespaceList } from '../models/io_k8s_api_core_v1_NamespaceList';
import type { io_k8s_api_core_v1_Node } from '../models/io_k8s_api_core_v1_Node';
import type { io_k8s_api_core_v1_NodeList } from '../models/io_k8s_api_core_v1_NodeList';
import type { io_k8s_api_core_v1_PersistentVolume } from '../models/io_k8s_api_core_v1_PersistentVolume';
import type { io_k8s_api_core_v1_PersistentVolumeClaim } from '../models/io_k8s_api_core_v1_PersistentVolumeClaim';
import type { io_k8s_api_core_v1_PersistentVolumeClaimList } from '../models/io_k8s_api_core_v1_PersistentVolumeClaimList';
import type { io_k8s_api_core_v1_PersistentVolumeList } from '../models/io_k8s_api_core_v1_PersistentVolumeList';
import type { io_k8s_api_core_v1_Pod } from '../models/io_k8s_api_core_v1_Pod';
import type { io_k8s_api_core_v1_PodList } from '../models/io_k8s_api_core_v1_PodList';
import type { io_k8s_api_core_v1_PodTemplate } from '../models/io_k8s_api_core_v1_PodTemplate';
import type { io_k8s_api_core_v1_PodTemplateList } from '../models/io_k8s_api_core_v1_PodTemplateList';
import type { io_k8s_api_core_v1_ReplicationController } from '../models/io_k8s_api_core_v1_ReplicationController';
import type { io_k8s_api_core_v1_ReplicationControllerList } from '../models/io_k8s_api_core_v1_ReplicationControllerList';
import type { io_k8s_api_core_v1_ResourceQuota } from '../models/io_k8s_api_core_v1_ResourceQuota';
import type { io_k8s_api_core_v1_ResourceQuotaList } from '../models/io_k8s_api_core_v1_ResourceQuotaList';
import type { io_k8s_api_core_v1_Secret } from '../models/io_k8s_api_core_v1_Secret';
import type { io_k8s_api_core_v1_SecretList } from '../models/io_k8s_api_core_v1_SecretList';
import type { io_k8s_api_core_v1_Service } from '../models/io_k8s_api_core_v1_Service';
import type { io_k8s_api_core_v1_ServiceAccount } from '../models/io_k8s_api_core_v1_ServiceAccount';
import type { io_k8s_api_core_v1_ServiceAccountList } from '../models/io_k8s_api_core_v1_ServiceAccountList';
import type { io_k8s_api_core_v1_ServiceList } from '../models/io_k8s_api_core_v1_ServiceList';
import type { io_k8s_api_policy_v1_Eviction } from '../models/io_k8s_api_policy_v1_Eviction';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Patch } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_Patch';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Status } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_Status';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CoreV1Service {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * get available resources
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList OK
     * @throws ApiError
     */
    public getCoreV1ApiResources(): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list objects of kind ComponentStatus
     * @returns io_k8s_api_core_v1_ComponentStatusList OK
     * @throws ApiError
     */
    public listCoreV1ComponentStatus({
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
    }): CancelablePromise<io_k8s_api_core_v1_ComponentStatusList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/componentstatuses',
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
     * read the specified ComponentStatus
     * @returns io_k8s_api_core_v1_ComponentStatus OK
     * @throws ApiError
     */
    public readCoreV1ComponentStatus({
        name,
        pretty,
    }: {
        /**
         * name of the ComponentStatus
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
    }): CancelablePromise<io_k8s_api_core_v1_ComponentStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/componentstatuses/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind ConfigMap
     * @returns io_k8s_api_core_v1_ConfigMapList OK
     * @throws ApiError
     */
    public listCoreV1ConfigMapForAllNamespaces({
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
    }): CancelablePromise<io_k8s_api_core_v1_ConfigMapList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/configmaps',
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
     * list or watch objects of kind Endpoints
     * @returns io_k8s_api_core_v1_EndpointsList OK
     * @throws ApiError
     */
    public listCoreV1EndpointsForAllNamespaces({
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
    }): CancelablePromise<io_k8s_api_core_v1_EndpointsList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/endpoints',
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
     * list or watch objects of kind Event
     * @returns io_k8s_api_core_v1_EventList OK
     * @throws ApiError
     */
    public listCoreV1EventForAllNamespaces({
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
    }): CancelablePromise<io_k8s_api_core_v1_EventList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/events',
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
     * list or watch objects of kind LimitRange
     * @returns io_k8s_api_core_v1_LimitRangeList OK
     * @throws ApiError
     */
    public listCoreV1LimitRangeForAllNamespaces({
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
    }): CancelablePromise<io_k8s_api_core_v1_LimitRangeList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/limitranges',
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
     * list or watch objects of kind Namespace
     * @returns io_k8s_api_core_v1_NamespaceList OK
     * @throws ApiError
     */
    public listCoreV1Namespace({
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
    }): CancelablePromise<io_k8s_api_core_v1_NamespaceList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces',
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
     * create a Namespace
     * @returns io_k8s_api_core_v1_Namespace OK
     * @throws ApiError
     */
    public createCoreV1Namespace({
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        body: io_k8s_api_core_v1_Namespace,
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
    }): CancelablePromise<io_k8s_api_core_v1_Namespace> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces',
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
     * create a Binding
     * @returns io_k8s_api_core_v1_Binding OK
     * @throws ApiError
     */
    public createCoreV1NamespacedBinding({
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
        body: io_k8s_api_core_v1_Binding,
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
    }): CancelablePromise<io_k8s_api_core_v1_Binding> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/bindings',
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
     * list or watch objects of kind ConfigMap
     * @returns io_k8s_api_core_v1_ConfigMapList OK
     * @throws ApiError
     */
    public listCoreV1NamespacedConfigMap({
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
    }): CancelablePromise<io_k8s_api_core_v1_ConfigMapList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/configmaps',
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
     * create a ConfigMap
     * @returns io_k8s_api_core_v1_ConfigMap OK
     * @throws ApiError
     */
    public createCoreV1NamespacedConfigMap({
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
        body: io_k8s_api_core_v1_ConfigMap,
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
    }): CancelablePromise<io_k8s_api_core_v1_ConfigMap> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/configmaps',
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
     * delete collection of ConfigMap
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionNamespacedConfigMap({
        namespace,
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
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
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/configmaps',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified ConfigMap
     * @returns io_k8s_api_core_v1_ConfigMap OK
     * @throws ApiError
     */
    public readCoreV1NamespacedConfigMap({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the ConfigMap
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
    }): CancelablePromise<io_k8s_api_core_v1_ConfigMap> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/configmaps/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified ConfigMap
     * @returns io_k8s_api_core_v1_ConfigMap OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedConfigMap({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the ConfigMap
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_ConfigMap,
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
    }): CancelablePromise<io_k8s_api_core_v1_ConfigMap> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/configmaps/{name}',
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
     * delete a ConfigMap
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1NamespacedConfigMap({
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
         * name of the ConfigMap
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
            url: '/api/v1/namespaces/{namespace}/configmaps/{name}',
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
     * partially update the specified ConfigMap
     * @returns io_k8s_api_core_v1_ConfigMap OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedConfigMap({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the ConfigMap
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_ConfigMap> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/configmaps/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind Endpoints
     * @returns io_k8s_api_core_v1_EndpointsList OK
     * @throws ApiError
     */
    public listCoreV1NamespacedEndpoints({
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
    }): CancelablePromise<io_k8s_api_core_v1_EndpointsList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/endpoints',
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
     * create Endpoints
     * @returns io_k8s_api_core_v1_Endpoints OK
     * @throws ApiError
     */
    public createCoreV1NamespacedEndpoints({
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
        body: io_k8s_api_core_v1_Endpoints,
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
    }): CancelablePromise<io_k8s_api_core_v1_Endpoints> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/endpoints',
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
     * delete collection of Endpoints
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionNamespacedEndpoints({
        namespace,
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
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
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/endpoints',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified Endpoints
     * @returns io_k8s_api_core_v1_Endpoints OK
     * @throws ApiError
     */
    public readCoreV1NamespacedEndpoints({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the Endpoints
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
    }): CancelablePromise<io_k8s_api_core_v1_Endpoints> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/endpoints/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified Endpoints
     * @returns io_k8s_api_core_v1_Endpoints OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedEndpoints({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the Endpoints
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_Endpoints,
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
    }): CancelablePromise<io_k8s_api_core_v1_Endpoints> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/endpoints/{name}',
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
     * delete Endpoints
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1NamespacedEndpoints({
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
         * name of the Endpoints
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
            url: '/api/v1/namespaces/{namespace}/endpoints/{name}',
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
     * partially update the specified Endpoints
     * @returns io_k8s_api_core_v1_Endpoints OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedEndpoints({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the Endpoints
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_Endpoints> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/endpoints/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind Event
     * @returns io_k8s_api_core_v1_EventList OK
     * @throws ApiError
     */
    public listCoreV1NamespacedEvent({
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
    }): CancelablePromise<io_k8s_api_core_v1_EventList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/events',
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
     * create an Event
     * @returns io_k8s_api_core_v1_Event OK
     * @throws ApiError
     */
    public createCoreV1NamespacedEvent({
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
        body: io_k8s_api_core_v1_Event,
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
    }): CancelablePromise<io_k8s_api_core_v1_Event> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/events',
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
     * delete collection of Event
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionNamespacedEvent({
        namespace,
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
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
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/events',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified Event
     * @returns io_k8s_api_core_v1_Event OK
     * @throws ApiError
     */
    public readCoreV1NamespacedEvent({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the Event
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
    }): CancelablePromise<io_k8s_api_core_v1_Event> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/events/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified Event
     * @returns io_k8s_api_core_v1_Event OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedEvent({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the Event
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_Event,
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
    }): CancelablePromise<io_k8s_api_core_v1_Event> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/events/{name}',
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
     * delete an Event
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1NamespacedEvent({
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
         * name of the Event
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
            url: '/api/v1/namespaces/{namespace}/events/{name}',
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
     * partially update the specified Event
     * @returns io_k8s_api_core_v1_Event OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedEvent({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the Event
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_Event> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/events/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind LimitRange
     * @returns io_k8s_api_core_v1_LimitRangeList OK
     * @throws ApiError
     */
    public listCoreV1NamespacedLimitRange({
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
    }): CancelablePromise<io_k8s_api_core_v1_LimitRangeList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/limitranges',
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
     * create a LimitRange
     * @returns io_k8s_api_core_v1_LimitRange OK
     * @throws ApiError
     */
    public createCoreV1NamespacedLimitRange({
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
        body: io_k8s_api_core_v1_LimitRange,
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
    }): CancelablePromise<io_k8s_api_core_v1_LimitRange> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/limitranges',
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
     * delete collection of LimitRange
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionNamespacedLimitRange({
        namespace,
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
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
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/limitranges',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified LimitRange
     * @returns io_k8s_api_core_v1_LimitRange OK
     * @throws ApiError
     */
    public readCoreV1NamespacedLimitRange({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the LimitRange
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
    }): CancelablePromise<io_k8s_api_core_v1_LimitRange> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/limitranges/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified LimitRange
     * @returns io_k8s_api_core_v1_LimitRange OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedLimitRange({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the LimitRange
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_LimitRange,
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
    }): CancelablePromise<io_k8s_api_core_v1_LimitRange> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/limitranges/{name}',
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
     * delete a LimitRange
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1NamespacedLimitRange({
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
         * name of the LimitRange
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
            url: '/api/v1/namespaces/{namespace}/limitranges/{name}',
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
     * partially update the specified LimitRange
     * @returns io_k8s_api_core_v1_LimitRange OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedLimitRange({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the LimitRange
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_LimitRange> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/limitranges/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind PersistentVolumeClaim
     * @returns io_k8s_api_core_v1_PersistentVolumeClaimList OK
     * @throws ApiError
     */
    public listCoreV1NamespacedPersistentVolumeClaim({
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
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolumeClaimList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/persistentvolumeclaims',
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
     * create a PersistentVolumeClaim
     * @returns io_k8s_api_core_v1_PersistentVolumeClaim OK
     * @throws ApiError
     */
    public createCoreV1NamespacedPersistentVolumeClaim({
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
        body: io_k8s_api_core_v1_PersistentVolumeClaim,
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
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolumeClaim> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/persistentvolumeclaims',
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
     * delete collection of PersistentVolumeClaim
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionNamespacedPersistentVolumeClaim({
        namespace,
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
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
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/persistentvolumeclaims',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified PersistentVolumeClaim
     * @returns io_k8s_api_core_v1_PersistentVolumeClaim OK
     * @throws ApiError
     */
    public readCoreV1NamespacedPersistentVolumeClaim({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the PersistentVolumeClaim
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
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolumeClaim> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified PersistentVolumeClaim
     * @returns io_k8s_api_core_v1_PersistentVolumeClaim OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedPersistentVolumeClaim({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the PersistentVolumeClaim
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_PersistentVolumeClaim,
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
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolumeClaim> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}',
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
     * delete a PersistentVolumeClaim
     * @returns io_k8s_api_core_v1_PersistentVolumeClaim OK
     * @throws ApiError
     */
    public deleteCoreV1NamespacedPersistentVolumeClaim({
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
         * name of the PersistentVolumeClaim
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
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolumeClaim> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}',
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
     * partially update the specified PersistentVolumeClaim
     * @returns io_k8s_api_core_v1_PersistentVolumeClaim OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedPersistentVolumeClaim({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the PersistentVolumeClaim
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolumeClaim> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read status of the specified PersistentVolumeClaim
     * @returns io_k8s_api_core_v1_PersistentVolumeClaim OK
     * @throws ApiError
     */
    public readCoreV1NamespacedPersistentVolumeClaimStatus({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the PersistentVolumeClaim
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
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolumeClaim> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace status of the specified PersistentVolumeClaim
     * @returns io_k8s_api_core_v1_PersistentVolumeClaim OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedPersistentVolumeClaimStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the PersistentVolumeClaim
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_PersistentVolumeClaim,
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
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolumeClaim> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status',
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
     * partially update status of the specified PersistentVolumeClaim
     * @returns io_k8s_api_core_v1_PersistentVolumeClaim OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedPersistentVolumeClaimStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the PersistentVolumeClaim
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolumeClaim> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind Pod
     * @returns io_k8s_api_core_v1_PodList OK
     * @throws ApiError
     */
    public listCoreV1NamespacedPod({
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
    }): CancelablePromise<io_k8s_api_core_v1_PodList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/pods',
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
     * create a Pod
     * @returns io_k8s_api_core_v1_Pod OK
     * @throws ApiError
     */
    public createCoreV1NamespacedPod({
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
        body: io_k8s_api_core_v1_Pod,
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
    }): CancelablePromise<io_k8s_api_core_v1_Pod> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/pods',
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
     * delete collection of Pod
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionNamespacedPod({
        namespace,
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
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
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/pods',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified Pod
     * @returns io_k8s_api_core_v1_Pod OK
     * @throws ApiError
     */
    public readCoreV1NamespacedPod({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the Pod
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
    }): CancelablePromise<io_k8s_api_core_v1_Pod> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/pods/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified Pod
     * @returns io_k8s_api_core_v1_Pod OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedPod({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the Pod
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_Pod,
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
    }): CancelablePromise<io_k8s_api_core_v1_Pod> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/pods/{name}',
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
     * delete a Pod
     * @returns io_k8s_api_core_v1_Pod OK
     * @throws ApiError
     */
    public deleteCoreV1NamespacedPod({
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
         * name of the Pod
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
    }): CancelablePromise<io_k8s_api_core_v1_Pod> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/pods/{name}',
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
     * partially update the specified Pod
     * @returns io_k8s_api_core_v1_Pod OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedPod({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the Pod
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_Pod> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/pods/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect GET requests to attach of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1GetNamespacedPodAttach({
        name,
        namespace,
        container,
        stderr,
        stdin,
        stdout,
        tty,
    }: {
        /**
         * name of the PodAttachOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * The container in which to execute the command. Defaults to only container if there is only one container in the pod.
         */
        container?: string,
        /**
         * Stderr if true indicates that stderr is to be redirected for the attach call. Defaults to true.
         */
        stderr?: boolean,
        /**
         * Stdin if true, redirects the standard input stream of the pod for this call. Defaults to false.
         */
        stdin?: boolean,
        /**
         * Stdout if true indicates that stdout is to be redirected for the attach call. Defaults to true.
         */
        stdout?: boolean,
        /**
         * TTY if true indicates that a tty will be allocated for the attach call. This is passed through the container runtime so the tty is allocated on the worker node by the container runtime. Defaults to false.
         */
        tty?: boolean,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/attach',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'container': container,
                'stderr': stderr,
                'stdin': stdin,
                'stdout': stdout,
                'tty': tty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect POST requests to attach of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PostNamespacedPodAttach({
        name,
        namespace,
        container,
        stderr,
        stdin,
        stdout,
        tty,
    }: {
        /**
         * name of the PodAttachOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * The container in which to execute the command. Defaults to only container if there is only one container in the pod.
         */
        container?: string,
        /**
         * Stderr if true indicates that stderr is to be redirected for the attach call. Defaults to true.
         */
        stderr?: boolean,
        /**
         * Stdin if true, redirects the standard input stream of the pod for this call. Defaults to false.
         */
        stdin?: boolean,
        /**
         * Stdout if true indicates that stdout is to be redirected for the attach call. Defaults to true.
         */
        stdout?: boolean,
        /**
         * TTY if true indicates that a tty will be allocated for the attach call. This is passed through the container runtime so the tty is allocated on the worker node by the container runtime. Defaults to false.
         */
        tty?: boolean,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/attach',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'container': container,
                'stderr': stderr,
                'stdin': stdin,
                'stdout': stdout,
                'tty': tty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * create binding of a Pod
     * @returns io_k8s_api_core_v1_Binding OK
     * @throws ApiError
     */
    public createCoreV1NamespacedPodBinding({
        name,
        namespace,
        body,
        dryRun,
        fieldManager,
        fieldValidation,
        pretty,
    }: {
        /**
         * name of the Binding
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_Binding,
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
    }): CancelablePromise<io_k8s_api_core_v1_Binding> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/binding',
            path: {
                'name': name,
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
     * read ephemeralcontainers of the specified Pod
     * @returns io_k8s_api_core_v1_Pod OK
     * @throws ApiError
     */
    public readCoreV1NamespacedPodEphemeralcontainers({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the Pod
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
    }): CancelablePromise<io_k8s_api_core_v1_Pod> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace ephemeralcontainers of the specified Pod
     * @returns io_k8s_api_core_v1_Pod OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedPodEphemeralcontainers({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the Pod
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_Pod,
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
    }): CancelablePromise<io_k8s_api_core_v1_Pod> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers',
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
     * partially update ephemeralcontainers of the specified Pod
     * @returns io_k8s_api_core_v1_Pod OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedPodEphemeralcontainers({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the Pod
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_Pod> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * create eviction of a Pod
     * @returns io_k8s_api_policy_v1_Eviction OK
     * @throws ApiError
     */
    public createCoreV1NamespacedPodEviction({
        name,
        namespace,
        body,
        dryRun,
        fieldManager,
        fieldValidation,
        pretty,
    }: {
        /**
         * name of the Eviction
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_policy_v1_Eviction,
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
    }): CancelablePromise<io_k8s_api_policy_v1_Eviction> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/eviction',
            path: {
                'name': name,
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
     * connect GET requests to exec of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1GetNamespacedPodExec({
        name,
        namespace,
        command,
        container,
        stderr,
        stdin,
        stdout,
        tty,
    }: {
        /**
         * name of the PodExecOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Command is the remote command to execute. argv array. Not executed within a shell.
         */
        command?: string,
        /**
         * Container in which to execute the command. Defaults to only container if there is only one container in the pod.
         */
        container?: string,
        /**
         * Redirect the standard error stream of the pod for this call.
         */
        stderr?: boolean,
        /**
         * Redirect the standard input stream of the pod for this call. Defaults to false.
         */
        stdin?: boolean,
        /**
         * Redirect the standard output stream of the pod for this call.
         */
        stdout?: boolean,
        /**
         * TTY if true indicates that a tty will be allocated for the exec call. Defaults to false.
         */
        tty?: boolean,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/exec',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'command': command,
                'container': container,
                'stderr': stderr,
                'stdin': stdin,
                'stdout': stdout,
                'tty': tty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect POST requests to exec of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PostNamespacedPodExec({
        name,
        namespace,
        command,
        container,
        stderr,
        stdin,
        stdout,
        tty,
    }: {
        /**
         * name of the PodExecOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Command is the remote command to execute. argv array. Not executed within a shell.
         */
        command?: string,
        /**
         * Container in which to execute the command. Defaults to only container if there is only one container in the pod.
         */
        container?: string,
        /**
         * Redirect the standard error stream of the pod for this call.
         */
        stderr?: boolean,
        /**
         * Redirect the standard input stream of the pod for this call. Defaults to false.
         */
        stdin?: boolean,
        /**
         * Redirect the standard output stream of the pod for this call.
         */
        stdout?: boolean,
        /**
         * TTY if true indicates that a tty will be allocated for the exec call. Defaults to false.
         */
        tty?: boolean,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/exec',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'command': command,
                'container': container,
                'stderr': stderr,
                'stdin': stdin,
                'stdout': stdout,
                'tty': tty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read log of the specified Pod
     * @returns string OK
     * @throws ApiError
     */
    public readCoreV1NamespacedPodLog({
        name,
        namespace,
        container,
        follow,
        insecureSkipTlsVerifyBackend,
        limitBytes,
        pretty,
        previous,
        sinceSeconds,
        tailLines,
        timestamps,
    }: {
        /**
         * name of the Pod
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * The container for which to stream logs. Defaults to only container if there is one container in the pod.
         */
        container?: string,
        /**
         * Follow the log stream of the pod. Defaults to false.
         */
        follow?: boolean,
        /**
         * insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver's TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet).
         */
        insecureSkipTlsVerifyBackend?: boolean,
        /**
         * If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit.
         */
        limitBytes?: number,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        /**
         * Return previous terminated container logs. Defaults to false.
         */
        previous?: boolean,
        /**
         * A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified.
         */
        sinceSeconds?: number,
        /**
         * If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime
         */
        tailLines?: number,
        /**
         * If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false.
         */
        timestamps?: boolean,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/log',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'container': container,
                'follow': follow,
                'insecureSkipTLSVerifyBackend': insecureSkipTlsVerifyBackend,
                'limitBytes': limitBytes,
                'pretty': pretty,
                'previous': previous,
                'sinceSeconds': sinceSeconds,
                'tailLines': tailLines,
                'timestamps': timestamps,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect GET requests to portforward of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1GetNamespacedPodPortforward({
        name,
        namespace,
        ports,
    }: {
        /**
         * name of the PodPortForwardOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * List of ports to forward Required when using WebSockets
         */
        ports?: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/portforward',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'ports': ports,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect POST requests to portforward of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PostNamespacedPodPortforward({
        name,
        namespace,
        ports,
    }: {
        /**
         * name of the PodPortForwardOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * List of ports to forward Required when using WebSockets
         */
        ports?: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/portforward',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'ports': ports,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect GET requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1GetNamespacedPodProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect PUT requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PutNamespacedPodProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect POST requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PostNamespacedPodProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect DELETE requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1DeleteNamespacedPodProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect OPTIONS requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1OptionsNamespacedPodProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'OPTIONS',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect HEAD requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1HeadNamespacedPodProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect PATCH requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PatchNamespacedPodProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect GET requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1GetNamespacedPodProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect PUT requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PutNamespacedPodProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect POST requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PostNamespacedPodProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect DELETE requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1DeleteNamespacedPodProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect OPTIONS requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1OptionsNamespacedPodProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'OPTIONS',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect HEAD requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1HeadNamespacedPodProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect PATCH requests to proxy of Pod
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PatchNamespacedPodProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the PodProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to pod.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read status of the specified Pod
     * @returns io_k8s_api_core_v1_Pod OK
     * @throws ApiError
     */
    public readCoreV1NamespacedPodStatus({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the Pod
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
    }): CancelablePromise<io_k8s_api_core_v1_Pod> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/status',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace status of the specified Pod
     * @returns io_k8s_api_core_v1_Pod OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedPodStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the Pod
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_Pod,
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
    }): CancelablePromise<io_k8s_api_core_v1_Pod> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/status',
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
     * partially update status of the specified Pod
     * @returns io_k8s_api_core_v1_Pod OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedPodStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the Pod
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_Pod> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/pods/{name}/status',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind PodTemplate
     * @returns io_k8s_api_core_v1_PodTemplateList OK
     * @throws ApiError
     */
    public listCoreV1NamespacedPodTemplate({
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
    }): CancelablePromise<io_k8s_api_core_v1_PodTemplateList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/podtemplates',
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
     * create a PodTemplate
     * @returns io_k8s_api_core_v1_PodTemplate OK
     * @throws ApiError
     */
    public createCoreV1NamespacedPodTemplate({
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
        body: io_k8s_api_core_v1_PodTemplate,
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
    }): CancelablePromise<io_k8s_api_core_v1_PodTemplate> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/podtemplates',
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
     * delete collection of PodTemplate
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionNamespacedPodTemplate({
        namespace,
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
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
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/podtemplates',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified PodTemplate
     * @returns io_k8s_api_core_v1_PodTemplate OK
     * @throws ApiError
     */
    public readCoreV1NamespacedPodTemplate({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the PodTemplate
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
    }): CancelablePromise<io_k8s_api_core_v1_PodTemplate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/podtemplates/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified PodTemplate
     * @returns io_k8s_api_core_v1_PodTemplate OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedPodTemplate({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the PodTemplate
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_PodTemplate,
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
    }): CancelablePromise<io_k8s_api_core_v1_PodTemplate> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/podtemplates/{name}',
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
     * delete a PodTemplate
     * @returns io_k8s_api_core_v1_PodTemplate OK
     * @throws ApiError
     */
    public deleteCoreV1NamespacedPodTemplate({
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
         * name of the PodTemplate
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
    }): CancelablePromise<io_k8s_api_core_v1_PodTemplate> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/podtemplates/{name}',
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
     * partially update the specified PodTemplate
     * @returns io_k8s_api_core_v1_PodTemplate OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedPodTemplate({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the PodTemplate
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_PodTemplate> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/podtemplates/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind ReplicationController
     * @returns io_k8s_api_core_v1_ReplicationControllerList OK
     * @throws ApiError
     */
    public listCoreV1NamespacedReplicationController({
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
    }): CancelablePromise<io_k8s_api_core_v1_ReplicationControllerList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/replicationcontrollers',
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
     * create a ReplicationController
     * @returns io_k8s_api_core_v1_ReplicationController OK
     * @throws ApiError
     */
    public createCoreV1NamespacedReplicationController({
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
        body: io_k8s_api_core_v1_ReplicationController,
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
    }): CancelablePromise<io_k8s_api_core_v1_ReplicationController> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/replicationcontrollers',
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
     * delete collection of ReplicationController
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionNamespacedReplicationController({
        namespace,
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
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
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/replicationcontrollers',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified ReplicationController
     * @returns io_k8s_api_core_v1_ReplicationController OK
     * @throws ApiError
     */
    public readCoreV1NamespacedReplicationController({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the ReplicationController
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
    }): CancelablePromise<io_k8s_api_core_v1_ReplicationController> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/replicationcontrollers/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified ReplicationController
     * @returns io_k8s_api_core_v1_ReplicationController OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedReplicationController({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the ReplicationController
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_ReplicationController,
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
    }): CancelablePromise<io_k8s_api_core_v1_ReplicationController> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/replicationcontrollers/{name}',
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
     * delete a ReplicationController
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1NamespacedReplicationController({
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
         * name of the ReplicationController
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
            url: '/api/v1/namespaces/{namespace}/replicationcontrollers/{name}',
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
     * partially update the specified ReplicationController
     * @returns io_k8s_api_core_v1_ReplicationController OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedReplicationController({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the ReplicationController
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_ReplicationController> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/replicationcontrollers/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read scale of the specified ReplicationController
     * @returns io_k8s_api_autoscaling_v1_Scale OK
     * @throws ApiError
     */
    public readCoreV1NamespacedReplicationControllerScale({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the Scale
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
    }): CancelablePromise<io_k8s_api_autoscaling_v1_Scale> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace scale of the specified ReplicationController
     * @returns io_k8s_api_autoscaling_v1_Scale OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedReplicationControllerScale({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the Scale
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_autoscaling_v1_Scale,
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
    }): CancelablePromise<io_k8s_api_autoscaling_v1_Scale> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale',
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
     * partially update scale of the specified ReplicationController
     * @returns io_k8s_api_autoscaling_v1_Scale OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedReplicationControllerScale({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the Scale
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_autoscaling_v1_Scale> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read status of the specified ReplicationController
     * @returns io_k8s_api_core_v1_ReplicationController OK
     * @throws ApiError
     */
    public readCoreV1NamespacedReplicationControllerStatus({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the ReplicationController
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
    }): CancelablePromise<io_k8s_api_core_v1_ReplicationController> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace status of the specified ReplicationController
     * @returns io_k8s_api_core_v1_ReplicationController OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedReplicationControllerStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the ReplicationController
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_ReplicationController,
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
    }): CancelablePromise<io_k8s_api_core_v1_ReplicationController> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status',
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
     * partially update status of the specified ReplicationController
     * @returns io_k8s_api_core_v1_ReplicationController OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedReplicationControllerStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the ReplicationController
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_ReplicationController> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind ResourceQuota
     * @returns io_k8s_api_core_v1_ResourceQuotaList OK
     * @throws ApiError
     */
    public listCoreV1NamespacedResourceQuota({
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
    }): CancelablePromise<io_k8s_api_core_v1_ResourceQuotaList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/resourcequotas',
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
     * create a ResourceQuota
     * @returns io_k8s_api_core_v1_ResourceQuota OK
     * @throws ApiError
     */
    public createCoreV1NamespacedResourceQuota({
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
        body: io_k8s_api_core_v1_ResourceQuota,
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
    }): CancelablePromise<io_k8s_api_core_v1_ResourceQuota> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/resourcequotas',
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
     * delete collection of ResourceQuota
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionNamespacedResourceQuota({
        namespace,
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
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
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/resourcequotas',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified ResourceQuota
     * @returns io_k8s_api_core_v1_ResourceQuota OK
     * @throws ApiError
     */
    public readCoreV1NamespacedResourceQuota({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the ResourceQuota
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
    }): CancelablePromise<io_k8s_api_core_v1_ResourceQuota> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/resourcequotas/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified ResourceQuota
     * @returns io_k8s_api_core_v1_ResourceQuota OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedResourceQuota({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the ResourceQuota
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_ResourceQuota,
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
    }): CancelablePromise<io_k8s_api_core_v1_ResourceQuota> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/resourcequotas/{name}',
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
     * delete a ResourceQuota
     * @returns io_k8s_api_core_v1_ResourceQuota OK
     * @throws ApiError
     */
    public deleteCoreV1NamespacedResourceQuota({
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
         * name of the ResourceQuota
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
    }): CancelablePromise<io_k8s_api_core_v1_ResourceQuota> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/resourcequotas/{name}',
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
     * partially update the specified ResourceQuota
     * @returns io_k8s_api_core_v1_ResourceQuota OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedResourceQuota({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the ResourceQuota
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_ResourceQuota> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/resourcequotas/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read status of the specified ResourceQuota
     * @returns io_k8s_api_core_v1_ResourceQuota OK
     * @throws ApiError
     */
    public readCoreV1NamespacedResourceQuotaStatus({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the ResourceQuota
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
    }): CancelablePromise<io_k8s_api_core_v1_ResourceQuota> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/resourcequotas/{name}/status',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace status of the specified ResourceQuota
     * @returns io_k8s_api_core_v1_ResourceQuota OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedResourceQuotaStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the ResourceQuota
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_ResourceQuota,
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
    }): CancelablePromise<io_k8s_api_core_v1_ResourceQuota> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/resourcequotas/{name}/status',
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
     * partially update status of the specified ResourceQuota
     * @returns io_k8s_api_core_v1_ResourceQuota OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedResourceQuotaStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the ResourceQuota
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_ResourceQuota> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/resourcequotas/{name}/status',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind Secret
     * @returns io_k8s_api_core_v1_SecretList OK
     * @throws ApiError
     */
    public listCoreV1NamespacedSecret({
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
    }): CancelablePromise<io_k8s_api_core_v1_SecretList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/secrets',
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
     * create a Secret
     * @returns io_k8s_api_core_v1_Secret OK
     * @throws ApiError
     */
    public createCoreV1NamespacedSecret({
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
        body: io_k8s_api_core_v1_Secret,
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
    }): CancelablePromise<io_k8s_api_core_v1_Secret> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/secrets',
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
     * delete collection of Secret
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionNamespacedSecret({
        namespace,
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
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
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/secrets',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified Secret
     * @returns io_k8s_api_core_v1_Secret OK
     * @throws ApiError
     */
    public readCoreV1NamespacedSecret({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the Secret
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
    }): CancelablePromise<io_k8s_api_core_v1_Secret> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/secrets/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified Secret
     * @returns io_k8s_api_core_v1_Secret OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedSecret({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the Secret
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_Secret,
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
    }): CancelablePromise<io_k8s_api_core_v1_Secret> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/secrets/{name}',
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
     * delete a Secret
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1NamespacedSecret({
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
         * name of the Secret
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
            url: '/api/v1/namespaces/{namespace}/secrets/{name}',
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
     * partially update the specified Secret
     * @returns io_k8s_api_core_v1_Secret OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedSecret({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the Secret
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_Secret> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/secrets/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind ServiceAccount
     * @returns io_k8s_api_core_v1_ServiceAccountList OK
     * @throws ApiError
     */
    public listCoreV1NamespacedServiceAccount({
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
    }): CancelablePromise<io_k8s_api_core_v1_ServiceAccountList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/serviceaccounts',
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
     * create a ServiceAccount
     * @returns io_k8s_api_core_v1_ServiceAccount OK
     * @throws ApiError
     */
    public createCoreV1NamespacedServiceAccount({
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
        body: io_k8s_api_core_v1_ServiceAccount,
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
    }): CancelablePromise<io_k8s_api_core_v1_ServiceAccount> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/serviceaccounts',
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
     * delete collection of ServiceAccount
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionNamespacedServiceAccount({
        namespace,
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
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
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/serviceaccounts',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified ServiceAccount
     * @returns io_k8s_api_core_v1_ServiceAccount OK
     * @throws ApiError
     */
    public readCoreV1NamespacedServiceAccount({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the ServiceAccount
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
    }): CancelablePromise<io_k8s_api_core_v1_ServiceAccount> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/serviceaccounts/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified ServiceAccount
     * @returns io_k8s_api_core_v1_ServiceAccount OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedServiceAccount({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the ServiceAccount
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_ServiceAccount,
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
    }): CancelablePromise<io_k8s_api_core_v1_ServiceAccount> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/serviceaccounts/{name}',
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
     * delete a ServiceAccount
     * @returns io_k8s_api_core_v1_ServiceAccount OK
     * @throws ApiError
     */
    public deleteCoreV1NamespacedServiceAccount({
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
         * name of the ServiceAccount
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
    }): CancelablePromise<io_k8s_api_core_v1_ServiceAccount> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/serviceaccounts/{name}',
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
     * partially update the specified ServiceAccount
     * @returns io_k8s_api_core_v1_ServiceAccount OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedServiceAccount({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the ServiceAccount
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_ServiceAccount> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/serviceaccounts/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * create token of a ServiceAccount
     * @returns io_k8s_api_authentication_v1_TokenRequest OK
     * @throws ApiError
     */
    public createCoreV1NamespacedServiceAccountToken({
        name,
        namespace,
        body,
        dryRun,
        fieldManager,
        fieldValidation,
        pretty,
    }: {
        /**
         * name of the TokenRequest
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_authentication_v1_TokenRequest,
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
    }): CancelablePromise<io_k8s_api_authentication_v1_TokenRequest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/serviceaccounts/{name}/token',
            path: {
                'name': name,
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
     * list or watch objects of kind Service
     * @returns io_k8s_api_core_v1_ServiceList OK
     * @throws ApiError
     */
    public listCoreV1NamespacedService({
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
    }): CancelablePromise<io_k8s_api_core_v1_ServiceList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/services',
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
     * create a Service
     * @returns io_k8s_api_core_v1_Service OK
     * @throws ApiError
     */
    public createCoreV1NamespacedService({
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
        body: io_k8s_api_core_v1_Service,
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
    }): CancelablePromise<io_k8s_api_core_v1_Service> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/services',
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
     * delete collection of Service
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionNamespacedService({
        namespace,
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
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
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/services',
            path: {
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified Service
     * @returns io_k8s_api_core_v1_Service OK
     * @throws ApiError
     */
    public readCoreV1NamespacedService({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the Service
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
    }): CancelablePromise<io_k8s_api_core_v1_Service> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/services/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified Service
     * @returns io_k8s_api_core_v1_Service OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedService({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the Service
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_Service,
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
    }): CancelablePromise<io_k8s_api_core_v1_Service> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/services/{name}',
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
     * delete a Service
     * @returns io_k8s_api_core_v1_Service OK
     * @throws ApiError
     */
    public deleteCoreV1NamespacedService({
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
         * name of the Service
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
    }): CancelablePromise<io_k8s_api_core_v1_Service> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/services/{name}',
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
     * partially update the specified Service
     * @returns io_k8s_api_core_v1_Service OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedService({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the Service
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_Service> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/services/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect GET requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1GetNamespacedServiceProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect PUT requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PutNamespacedServiceProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect POST requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PostNamespacedServiceProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect DELETE requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1DeleteNamespacedServiceProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect OPTIONS requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1OptionsNamespacedServiceProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'OPTIONS',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect HEAD requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1HeadNamespacedServiceProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect PATCH requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PatchNamespacedServiceProxy({
        name,
        namespace,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect GET requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1GetNamespacedServiceProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect PUT requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PutNamespacedServiceProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect POST requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PostNamespacedServiceProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect DELETE requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1DeleteNamespacedServiceProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect OPTIONS requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1OptionsNamespacedServiceProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'OPTIONS',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect HEAD requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1HeadNamespacedServiceProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect PATCH requests to proxy of Service
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PatchNamespacedServiceProxyWithPath({
        name,
        namespace,
        path,
        path,
    }: {
        /**
         * name of the ServiceProxyOptions
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the part of URLs that include service endpoints, suffixes, and parameters to use for the current proxy request to service. For example, the whole request URL is http://localhost/api/v1/namespaces/kube-system/services/elasticsearch-logging/_search?q=user:kimchy. Path is _search?q=user:kimchy.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}',
            path: {
                'name': name,
                'namespace': namespace,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read status of the specified Service
     * @returns io_k8s_api_core_v1_Service OK
     * @throws ApiError
     */
    public readCoreV1NamespacedServiceStatus({
        name,
        namespace,
        pretty,
    }: {
        /**
         * name of the Service
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
    }): CancelablePromise<io_k8s_api_core_v1_Service> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{namespace}/services/{name}/status',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace status of the specified Service
     * @returns io_k8s_api_core_v1_Service OK
     * @throws ApiError
     */
    public replaceCoreV1NamespacedServiceStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the Service
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
        body: io_k8s_api_core_v1_Service,
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
    }): CancelablePromise<io_k8s_api_core_v1_Service> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{namespace}/services/{name}/status',
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
     * partially update status of the specified Service
     * @returns io_k8s_api_core_v1_Service OK
     * @throws ApiError
     */
    public patchCoreV1NamespacedServiceStatus({
        name,
        namespace,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the Service
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_Service> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{namespace}/services/{name}/status',
            path: {
                'name': name,
                'namespace': namespace,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified Namespace
     * @returns io_k8s_api_core_v1_Namespace OK
     * @throws ApiError
     */
    public readCoreV1Namespace({
        name,
        pretty,
    }: {
        /**
         * name of the Namespace
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
    }): CancelablePromise<io_k8s_api_core_v1_Namespace> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified Namespace
     * @returns io_k8s_api_core_v1_Namespace OK
     * @throws ApiError
     */
    public replaceCoreV1Namespace({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the Namespace
         */
        name: string,
        body: io_k8s_api_core_v1_Namespace,
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
    }): CancelablePromise<io_k8s_api_core_v1_Namespace> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{name}',
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
     * delete a Namespace
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1Namespace({
        name,
        pretty,
        body,
        dryRun,
        gracePeriodSeconds,
        orphanDependents,
        propagationPolicy,
    }: {
        /**
         * name of the Namespace
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
            url: '/api/v1/namespaces/{name}',
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
     * partially update the specified Namespace
     * @returns io_k8s_api_core_v1_Namespace OK
     * @throws ApiError
     */
    public patchCoreV1Namespace({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the Namespace
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_Namespace> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace finalize of the specified Namespace
     * @returns io_k8s_api_core_v1_Namespace OK
     * @throws ApiError
     */
    public replaceCoreV1NamespaceFinalize({
        name,
        body,
        dryRun,
        fieldManager,
        fieldValidation,
        pretty,
    }: {
        /**
         * name of the Namespace
         */
        name: string,
        body: io_k8s_api_core_v1_Namespace,
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
    }): CancelablePromise<io_k8s_api_core_v1_Namespace> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{name}/finalize',
            path: {
                'name': name,
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
     * read status of the specified Namespace
     * @returns io_k8s_api_core_v1_Namespace OK
     * @throws ApiError
     */
    public readCoreV1NamespaceStatus({
        name,
        pretty,
    }: {
        /**
         * name of the Namespace
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
    }): CancelablePromise<io_k8s_api_core_v1_Namespace> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/namespaces/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace status of the specified Namespace
     * @returns io_k8s_api_core_v1_Namespace OK
     * @throws ApiError
     */
    public replaceCoreV1NamespaceStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the Namespace
         */
        name: string,
        body: io_k8s_api_core_v1_Namespace,
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
    }): CancelablePromise<io_k8s_api_core_v1_Namespace> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/namespaces/{name}/status',
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
     * partially update status of the specified Namespace
     * @returns io_k8s_api_core_v1_Namespace OK
     * @throws ApiError
     */
    public patchCoreV1NamespaceStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the Namespace
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_Namespace> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/namespaces/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind Node
     * @returns io_k8s_api_core_v1_NodeList OK
     * @throws ApiError
     */
    public listCoreV1Node({
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
    }): CancelablePromise<io_k8s_api_core_v1_NodeList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/nodes',
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
     * create a Node
     * @returns io_k8s_api_core_v1_Node OK
     * @throws ApiError
     */
    public createCoreV1Node({
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        body: io_k8s_api_core_v1_Node,
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
    }): CancelablePromise<io_k8s_api_core_v1_Node> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/nodes',
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
     * delete collection of Node
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionNode({
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/nodes',
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified Node
     * @returns io_k8s_api_core_v1_Node OK
     * @throws ApiError
     */
    public readCoreV1Node({
        name,
        pretty,
    }: {
        /**
         * name of the Node
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
    }): CancelablePromise<io_k8s_api_core_v1_Node> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/nodes/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified Node
     * @returns io_k8s_api_core_v1_Node OK
     * @throws ApiError
     */
    public replaceCoreV1Node({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the Node
         */
        name: string,
        body: io_k8s_api_core_v1_Node,
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
    }): CancelablePromise<io_k8s_api_core_v1_Node> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/nodes/{name}',
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
     * delete a Node
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1Node({
        name,
        pretty,
        body,
        dryRun,
        gracePeriodSeconds,
        orphanDependents,
        propagationPolicy,
    }: {
        /**
         * name of the Node
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
            url: '/api/v1/nodes/{name}',
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
     * partially update the specified Node
     * @returns io_k8s_api_core_v1_Node OK
     * @throws ApiError
     */
    public patchCoreV1Node({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the Node
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_Node> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/nodes/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect GET requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1GetNodeProxy({
        name,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/nodes/{name}/proxy',
            path: {
                'name': name,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect PUT requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PutNodeProxy({
        name,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/nodes/{name}/proxy',
            path: {
                'name': name,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect POST requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PostNodeProxy({
        name,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/nodes/{name}/proxy',
            path: {
                'name': name,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect DELETE requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1DeleteNodeProxy({
        name,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/nodes/{name}/proxy',
            path: {
                'name': name,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect OPTIONS requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1OptionsNodeProxy({
        name,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'OPTIONS',
            url: '/api/v1/nodes/{name}/proxy',
            path: {
                'name': name,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect HEAD requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1HeadNodeProxy({
        name,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/api/v1/nodes/{name}/proxy',
            path: {
                'name': name,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect PATCH requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PatchNodeProxy({
        name,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/nodes/{name}/proxy',
            path: {
                'name': name,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect GET requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1GetNodeProxyWithPath({
        name,
        path,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/nodes/{name}/proxy/{path}',
            path: {
                'name': name,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect PUT requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PutNodeProxyWithPath({
        name,
        path,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/nodes/{name}/proxy/{path}',
            path: {
                'name': name,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect POST requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PostNodeProxyWithPath({
        name,
        path,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/nodes/{name}/proxy/{path}',
            path: {
                'name': name,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect DELETE requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1DeleteNodeProxyWithPath({
        name,
        path,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/nodes/{name}/proxy/{path}',
            path: {
                'name': name,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect OPTIONS requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1OptionsNodeProxyWithPath({
        name,
        path,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'OPTIONS',
            url: '/api/v1/nodes/{name}/proxy/{path}',
            path: {
                'name': name,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect HEAD requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1HeadNodeProxyWithPath({
        name,
        path,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/api/v1/nodes/{name}/proxy/{path}',
            path: {
                'name': name,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * connect PATCH requests to proxy of Node
     * @returns string OK
     * @throws ApiError
     */
    public connectCoreV1PatchNodeProxyWithPath({
        name,
        path,
        path,
    }: {
        /**
         * name of the NodeProxyOptions
         */
        name: string,
        /**
         * path to the resource
         */
        path: string,
        /**
         * Path is the URL path to use for the current proxy request to node.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/nodes/{name}/proxy/{path}',
            path: {
                'name': name,
                'path': path,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read status of the specified Node
     * @returns io_k8s_api_core_v1_Node OK
     * @throws ApiError
     */
    public readCoreV1NodeStatus({
        name,
        pretty,
    }: {
        /**
         * name of the Node
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
    }): CancelablePromise<io_k8s_api_core_v1_Node> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/nodes/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace status of the specified Node
     * @returns io_k8s_api_core_v1_Node OK
     * @throws ApiError
     */
    public replaceCoreV1NodeStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the Node
         */
        name: string,
        body: io_k8s_api_core_v1_Node,
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
    }): CancelablePromise<io_k8s_api_core_v1_Node> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/nodes/{name}/status',
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
     * partially update status of the specified Node
     * @returns io_k8s_api_core_v1_Node OK
     * @throws ApiError
     */
    public patchCoreV1NodeStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the Node
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_Node> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/nodes/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind PersistentVolumeClaim
     * @returns io_k8s_api_core_v1_PersistentVolumeClaimList OK
     * @throws ApiError
     */
    public listCoreV1PersistentVolumeClaimForAllNamespaces({
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
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolumeClaimList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/persistentvolumeclaims',
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
     * list or watch objects of kind PersistentVolume
     * @returns io_k8s_api_core_v1_PersistentVolumeList OK
     * @throws ApiError
     */
    public listCoreV1PersistentVolume({
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
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolumeList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/persistentvolumes',
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
     * create a PersistentVolume
     * @returns io_k8s_api_core_v1_PersistentVolume OK
     * @throws ApiError
     */
    public createCoreV1PersistentVolume({
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        body: io_k8s_api_core_v1_PersistentVolume,
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
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolume> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/persistentvolumes',
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
     * delete collection of PersistentVolume
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
     * @throws ApiError
     */
    public deleteCoreV1CollectionPersistentVolume({
        pretty,
        body,
        _continue,
        dryRun,
        fieldSelector,
        gracePeriodSeconds,
        labelSelector,
        limit,
        orphanDependents,
        propagationPolicy,
        resourceVersion,
        resourceVersionMatch,
        timeoutSeconds,
    }: {
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
        body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions,
        /**
         * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        _continue?: string,
        /**
         * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
         */
        dryRun?: string,
        /**
         * A selector to restrict the list of returned objects by their fields. Defaults to everything.
         */
        fieldSelector?: string,
        /**
         * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
         */
        gracePeriodSeconds?: number,
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
         * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
         */
        orphanDependents?: boolean,
        /**
         * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
         */
        propagationPolicy?: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/persistentvolumes',
            query: {
                'pretty': pretty,
                'continue': _continue,
                'dryRun': dryRun,
                'fieldSelector': fieldSelector,
                'gracePeriodSeconds': gracePeriodSeconds,
                'labelSelector': labelSelector,
                'limit': limit,
                'orphanDependents': orphanDependents,
                'propagationPolicy': propagationPolicy,
                'resourceVersion': resourceVersion,
                'resourceVersionMatch': resourceVersionMatch,
                'timeoutSeconds': timeoutSeconds,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read the specified PersistentVolume
     * @returns io_k8s_api_core_v1_PersistentVolume OK
     * @throws ApiError
     */
    public readCoreV1PersistentVolume({
        name,
        pretty,
    }: {
        /**
         * name of the PersistentVolume
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolume> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/persistentvolumes/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace the specified PersistentVolume
     * @returns io_k8s_api_core_v1_PersistentVolume OK
     * @throws ApiError
     */
    public replaceCoreV1PersistentVolume({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the PersistentVolume
         */
        name: string,
        body: io_k8s_api_core_v1_PersistentVolume,
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
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolume> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/persistentvolumes/{name}',
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
     * delete a PersistentVolume
     * @returns io_k8s_api_core_v1_PersistentVolume OK
     * @throws ApiError
     */
    public deleteCoreV1PersistentVolume({
        name,
        pretty,
        body,
        dryRun,
        gracePeriodSeconds,
        orphanDependents,
        propagationPolicy,
    }: {
        /**
         * name of the PersistentVolume
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
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolume> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/persistentvolumes/{name}',
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
     * partially update the specified PersistentVolume
     * @returns io_k8s_api_core_v1_PersistentVolume OK
     * @throws ApiError
     */
    public patchCoreV1PersistentVolume({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the PersistentVolume
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolume> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/persistentvolumes/{name}',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * read status of the specified PersistentVolume
     * @returns io_k8s_api_core_v1_PersistentVolume OK
     * @throws ApiError
     */
    public readCoreV1PersistentVolumeStatus({
        name,
        pretty,
    }: {
        /**
         * name of the PersistentVolume
         */
        name: string,
        /**
         * If 'true', then the output is pretty printed.
         */
        pretty?: string,
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolume> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/persistentvolumes/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * replace status of the specified PersistentVolume
     * @returns io_k8s_api_core_v1_PersistentVolume OK
     * @throws ApiError
     */
    public replaceCoreV1PersistentVolumeStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
    }: {
        /**
         * name of the PersistentVolume
         */
        name: string,
        body: io_k8s_api_core_v1_PersistentVolume,
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
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolume> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/persistentvolumes/{name}/status',
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
     * partially update status of the specified PersistentVolume
     * @returns io_k8s_api_core_v1_PersistentVolume OK
     * @throws ApiError
     */
    public patchCoreV1PersistentVolumeStatus({
        name,
        body,
        pretty,
        dryRun,
        fieldManager,
        fieldValidation,
        force,
    }: {
        /**
         * name of the PersistentVolume
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
         * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
         */
        fieldManager?: string,
        /**
         * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields, provided that the `ServerSideFieldValidation` feature gate is also enabled. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23 and is the default behavior when the `ServerSideFieldValidation` feature gate is disabled. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default when the `ServerSideFieldValidation` feature gate is enabled. - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
         */
        fieldValidation?: string,
        /**
         * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
         */
        force?: boolean,
    }): CancelablePromise<io_k8s_api_core_v1_PersistentVolume> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/persistentvolumes/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'pretty': pretty,
                'dryRun': dryRun,
                'fieldManager': fieldManager,
                'fieldValidation': fieldValidation,
                'force': force,
            },
            body: body,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * list or watch objects of kind Pod
     * @returns io_k8s_api_core_v1_PodList OK
     * @throws ApiError
     */
    public listCoreV1PodForAllNamespaces({
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
    }): CancelablePromise<io_k8s_api_core_v1_PodList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/pods',
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
     * list or watch objects of kind PodTemplate
     * @returns io_k8s_api_core_v1_PodTemplateList OK
     * @throws ApiError
     */
    public listCoreV1PodTemplateForAllNamespaces({
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
    }): CancelablePromise<io_k8s_api_core_v1_PodTemplateList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/podtemplates',
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
     * list or watch objects of kind ReplicationController
     * @returns io_k8s_api_core_v1_ReplicationControllerList OK
     * @throws ApiError
     */
    public listCoreV1ReplicationControllerForAllNamespaces({
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
    }): CancelablePromise<io_k8s_api_core_v1_ReplicationControllerList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/replicationcontrollers',
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
     * list or watch objects of kind ResourceQuota
     * @returns io_k8s_api_core_v1_ResourceQuotaList OK
     * @throws ApiError
     */
    public listCoreV1ResourceQuotaForAllNamespaces({
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
    }): CancelablePromise<io_k8s_api_core_v1_ResourceQuotaList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/resourcequotas',
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
     * list or watch objects of kind Secret
     * @returns io_k8s_api_core_v1_SecretList OK
     * @throws ApiError
     */
    public listCoreV1SecretForAllNamespaces({
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
    }): CancelablePromise<io_k8s_api_core_v1_SecretList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/secrets',
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
     * list or watch objects of kind ServiceAccount
     * @returns io_k8s_api_core_v1_ServiceAccountList OK
     * @throws ApiError
     */
    public listCoreV1ServiceAccountForAllNamespaces({
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
    }): CancelablePromise<io_k8s_api_core_v1_ServiceAccountList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/serviceaccounts',
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
     * list or watch objects of kind Service
     * @returns io_k8s_api_core_v1_ServiceList OK
     * @throws ApiError
     */
    public listCoreV1ServiceForAllNamespaces({
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
    }): CancelablePromise<io_k8s_api_core_v1_ServiceList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/services',
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
     * watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1ConfigMapListForAllNamespaces({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/configmaps',
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
     * watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1EndpointsListForAllNamespaces({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/endpoints',
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
     * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1EventListForAllNamespaces({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/events',
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
     * watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1LimitRangeListForAllNamespaces({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/limitranges',
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
     * watch individual changes to a list of Namespace. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespaceList({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces',
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
     * watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedConfigMapList({
        namespace,
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
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/configmaps',
            path: {
                'namespace': namespace,
            },
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
     * watch changes to an object of kind ConfigMap. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedConfigMap({
        name,
        namespace,
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
         * name of the ConfigMap
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/configmaps/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
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
     * watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedEndpointsList({
        namespace,
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
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/endpoints',
            path: {
                'namespace': namespace,
            },
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
     * watch changes to an object of kind Endpoints. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedEndpoints({
        name,
        namespace,
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
         * name of the Endpoints
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/endpoints/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
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
     * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedEventList({
        namespace,
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
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/events',
            path: {
                'namespace': namespace,
            },
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
     * watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedEvent({
        name,
        namespace,
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
         * name of the Event
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/events/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
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
     * watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedLimitRangeList({
        namespace,
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
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/limitranges',
            path: {
                'namespace': namespace,
            },
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
     * watch changes to an object of kind LimitRange. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedLimitRange({
        name,
        namespace,
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
         * name of the LimitRange
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/limitranges/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
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
     * watch individual changes to a list of PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedPersistentVolumeClaimList({
        namespace,
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
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims',
            path: {
                'namespace': namespace,
            },
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
     * watch changes to an object of kind PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedPersistentVolumeClaim({
        name,
        namespace,
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
         * name of the PersistentVolumeClaim
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
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
     * watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedPodList({
        namespace,
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
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/pods',
            path: {
                'namespace': namespace,
            },
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
     * watch changes to an object of kind Pod. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedPod({
        name,
        namespace,
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
         * name of the Pod
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/pods/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
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
     * watch individual changes to a list of PodTemplate. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedPodTemplateList({
        namespace,
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
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/podtemplates',
            path: {
                'namespace': namespace,
            },
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
     * watch changes to an object of kind PodTemplate. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedPodTemplate({
        name,
        namespace,
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
         * name of the PodTemplate
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/podtemplates/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
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
     * watch individual changes to a list of ReplicationController. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedReplicationControllerList({
        namespace,
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
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/replicationcontrollers',
            path: {
                'namespace': namespace,
            },
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
     * watch changes to an object of kind ReplicationController. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedReplicationController({
        name,
        namespace,
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
         * name of the ReplicationController
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/replicationcontrollers/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
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
     * watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedResourceQuotaList({
        namespace,
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
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/resourcequotas',
            path: {
                'namespace': namespace,
            },
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
     * watch changes to an object of kind ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedResourceQuota({
        name,
        namespace,
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
         * name of the ResourceQuota
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/resourcequotas/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
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
     * watch individual changes to a list of Secret. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedSecretList({
        namespace,
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
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/secrets',
            path: {
                'namespace': namespace,
            },
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
     * watch changes to an object of kind Secret. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedSecret({
        name,
        namespace,
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
         * name of the Secret
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/secrets/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
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
     * watch individual changes to a list of ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedServiceAccountList({
        namespace,
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
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/serviceaccounts',
            path: {
                'namespace': namespace,
            },
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
     * watch changes to an object of kind ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedServiceAccount({
        name,
        namespace,
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
         * name of the ServiceAccount
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/serviceaccounts/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
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
     * watch individual changes to a list of Service. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedServiceList({
        namespace,
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
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/services',
            path: {
                'namespace': namespace,
            },
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
     * watch changes to an object of kind Service. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NamespacedService({
        name,
        namespace,
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
         * name of the Service
         */
        name: string,
        /**
         * object name and auth scope, such as for teams and projects
         */
        namespace: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{namespace}/services/{name}',
            path: {
                'name': name,
                'namespace': namespace,
            },
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
     * watch changes to an object of kind Namespace. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1Namespace({
        name,
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
         * name of the Namespace
         */
        name: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/namespaces/{name}',
            path: {
                'name': name,
            },
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
     * watch individual changes to a list of Node. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1NodeList({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/nodes',
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
     * watch changes to an object of kind Node. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1Node({
        name,
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
         * name of the Node
         */
        name: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/nodes/{name}',
            path: {
                'name': name,
            },
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
     * watch individual changes to a list of PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1PersistentVolumeClaimListForAllNamespaces({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/persistentvolumeclaims',
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
     * watch individual changes to a list of PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1PersistentVolumeList({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/persistentvolumes',
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
     * watch changes to an object of kind PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1PersistentVolume({
        name,
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
         * name of the PersistentVolume
         */
        name: string,
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/persistentvolumes/{name}',
            path: {
                'name': name,
            },
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
     * watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1PodListForAllNamespaces({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/pods',
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
     * watch individual changes to a list of PodTemplate. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1PodTemplateListForAllNamespaces({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/podtemplates',
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
     * watch individual changes to a list of ReplicationController. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1ReplicationControllerListForAllNamespaces({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/replicationcontrollers',
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
     * watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1ResourceQuotaListForAllNamespaces({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/resourcequotas',
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
     * watch individual changes to a list of Secret. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1SecretListForAllNamespaces({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/secrets',
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
     * watch individual changes to a list of ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1ServiceAccountListForAllNamespaces({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/serviceaccounts',
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
     * watch individual changes to a list of Service. deprecated: use the 'watch' parameter with a list operation instead.
     * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
     * @throws ApiError
     */
    public watchCoreV1ServiceListForAllNamespaces({
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
    }): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/watch/services',
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
