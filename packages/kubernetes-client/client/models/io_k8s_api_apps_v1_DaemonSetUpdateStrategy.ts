/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_apps_v1_RollingUpdateDaemonSet } from './io_k8s_api_apps_v1_RollingUpdateDaemonSet';

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export type io_k8s_api_apps_v1_DaemonSetUpdateStrategy = {
    /**
     * Rolling update config params. Present only if type = "RollingUpdate".
     */
    rollingUpdate?: io_k8s_api_apps_v1_RollingUpdateDaemonSet;
    /**
     * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
     *
     * Possible enum values:
     * - `"OnDelete"` Replace the old daemons only when it's killed
     * - `"RollingUpdate"` Replace the old daemons by new ones using rolling update i.e replace them on each node one after the other.
     */
    type?: io_k8s_api_apps_v1_DaemonSetUpdateStrategy.type;
};

export namespace io_k8s_api_apps_v1_DaemonSetUpdateStrategy {

    /**
     * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
     *
     * Possible enum values:
     * - `"OnDelete"` Replace the old daemons only when it's killed
     * - `"RollingUpdate"` Replace the old daemons by new ones using rolling update i.e replace them on each node one after the other.
     */
    export enum type {
        ON_DELETE = 'OnDelete',
        ROLLING_UPDATE = 'RollingUpdate',
    }


}

