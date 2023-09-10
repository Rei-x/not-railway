/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ContainerPort represents a network port in a single container.
 */
export type io_k8s_api_core_v1_ContainerPort = {
    /**
     * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
     */
    containerPort: number;
    /**
     * What host IP to bind the external port to.
     */
    hostIP?: string;
    /**
     * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
     */
    hostPort?: number;
    /**
     * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
     */
    name?: string;
    /**
     * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
     *
     * Possible enum values:
     * - `"SCTP"` is the SCTP protocol.
     * - `"TCP"` is the TCP protocol.
     * - `"UDP"` is the UDP protocol.
     */
    protocol?: io_k8s_api_core_v1_ContainerPort.protocol;
};

export namespace io_k8s_api_core_v1_ContainerPort {

    /**
     * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
     *
     * Possible enum values:
     * - `"SCTP"` is the SCTP protocol.
     * - `"TCP"` is the TCP protocol.
     * - `"UDP"` is the UDP protocol.
     */
    export enum protocol {
        SCTP = 'SCTP',
        TCP = 'TCP',
        UDP = 'UDP',
    }


}
