/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
 */
export type io_k8s_api_core_v1_Taint = {
    /**
     * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
     *
     * Possible enum values:
     * - `"NoExecute"` Evict any already-running pods that do not tolerate the taint. Currently enforced by NodeController.
     * - `"NoSchedule"` Do not allow new pods to schedule onto the node unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running. Enforced by the scheduler.
     * - `"PreferNoSchedule"` Like TaintEffectNoSchedule, but the scheduler tries not to schedule new pods onto the node, rather than prohibiting new pods from scheduling onto the node entirely. Enforced by the scheduler.
     */
    effect: io_k8s_api_core_v1_Taint.effect;
    /**
     * Required. The taint key to be applied to a node.
     */
    key: string;
    /**
     * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
     */
    timeAdded?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
    /**
     * The taint value corresponding to the taint key.
     */
    value?: string;
};

export namespace io_k8s_api_core_v1_Taint {

    /**
     * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
     *
     * Possible enum values:
     * - `"NoExecute"` Evict any already-running pods that do not tolerate the taint. Currently enforced by NodeController.
     * - `"NoSchedule"` Do not allow new pods to schedule onto the node unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running. Enforced by the scheduler.
     * - `"PreferNoSchedule"` Like TaintEffectNoSchedule, but the scheduler tries not to schedule new pods onto the node, rather than prohibiting new pods from scheduling onto the node entirely. Enforced by the scheduler.
     */
    export enum effect {
        NO_EXECUTE = 'NoExecute',
        NO_SCHEDULE = 'NoSchedule',
        PREFER_NO_SCHEDULE = 'PreferNoSchedule',
    }


}

