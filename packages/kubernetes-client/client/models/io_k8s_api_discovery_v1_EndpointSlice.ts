/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_discovery_v1_Endpoint } from './io_k8s_api_discovery_v1_Endpoint';
import type { io_k8s_api_discovery_v1_EndpointPort } from './io_k8s_api_discovery_v1_EndpointPort';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
 */
export type io_k8s_api_discovery_v1_EndpointSlice = {
    /**
     * addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name.
     *
     * Possible enum values:
     * - `"FQDN"` represents a FQDN.
     * - `"IPv4"` represents an IPv4 Address.
     * - `"IPv6"` represents an IPv6 Address.
     */
    addressType: io_k8s_api_discovery_v1_EndpointSlice.addressType;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints.
     */
    endpoints: Array<io_k8s_api_discovery_v1_Endpoint>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    /**
     * Standard object's metadata.
     */
    metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
    /**
     * ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates "all ports". Each slice may include a maximum of 100 ports.
     */
    ports?: Array<io_k8s_api_discovery_v1_EndpointPort>;
};

export namespace io_k8s_api_discovery_v1_EndpointSlice {

    /**
     * addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name.
     *
     * Possible enum values:
     * - `"FQDN"` represents a FQDN.
     * - `"IPv4"` represents an IPv4 Address.
     * - `"IPv6"` represents an IPv6 Address.
     */
    export enum addressType {
        FQDN = 'FQDN',
        IPV4 = 'IPv4',
        IPV6 = 'IPv6',
    }


}

