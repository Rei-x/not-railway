/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_core_v1_NamespaceCondition } from './io_k8s_api_core_v1_NamespaceCondition';

/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
export type io_k8s_api_core_v1_NamespaceStatus = {
    /**
     * Represents the latest available observations of a namespace's current state.
     */
    conditions?: Array<io_k8s_api_core_v1_NamespaceCondition>;
    /**
     * Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
     *
     * Possible enum values:
     * - `"Active"` means the namespace is available for use in the system
     * - `"Terminating"` means the namespace is undergoing graceful termination
     */
    phase?: io_k8s_api_core_v1_NamespaceStatus.phase;
};

export namespace io_k8s_api_core_v1_NamespaceStatus {

    /**
     * Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
     *
     * Possible enum values:
     * - `"Active"` means the namespace is available for use in the system
     * - `"Terminating"` means the namespace is undergoing graceful termination
     */
    export enum phase {
        ACTIVE = 'Active',
        TERMINATING = 'Terminating',
    }


}

