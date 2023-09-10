/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_apps_v1_DaemonSetUpdateStrategy } from './io_k8s_api_apps_v1_DaemonSetUpdateStrategy';
import type { io_k8s_api_core_v1_PodTemplateSpec } from './io_k8s_api_core_v1_PodTemplateSpec';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from './io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';

/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export type io_k8s_api_apps_v1_DaemonSetSpec = {
    /**
     * The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
     */
    minReadySeconds?: number;
    /**
     * The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
     */
    revisionHistoryLimit?: number;
    /**
     * A label query over pods that are managed by the daemon set. Must match in order to be controlled. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
     */
    selector: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
    /**
     * An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
     */
    template: io_k8s_api_core_v1_PodTemplateSpec;
    /**
     * An update strategy to replace existing DaemonSet pods with new pods.
     */
    updateStrategy?: io_k8s_api_apps_v1_DaemonSetUpdateStrategy;
};
