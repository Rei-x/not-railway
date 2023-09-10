/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_core_v1_PersistentVolumeClaimCondition } from './io_k8s_api_core_v1_PersistentVolumeClaimCondition';
import type { io_k8s_apimachinery_pkg_api_resource_Quantity } from './io_k8s_apimachinery_pkg_api_resource_Quantity';

/**
 * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
 */
export type io_k8s_api_core_v1_PersistentVolumeClaimStatus = {
    /**
     * accessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
     */
    accessModes?: Array<string>;
    /**
     * allocatedResources is the storage resource within AllocatedResources tracks the capacity allocated to a PVC. It may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
     */
    allocatedResources?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
    /**
     * capacity represents the actual resources of the underlying volume.
     */
    capacity?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
    /**
     * conditions is the current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'.
     */
    conditions?: Array<io_k8s_api_core_v1_PersistentVolumeClaimCondition>;
    /**
     * phase represents the current phase of PersistentVolumeClaim.
     *
     * Possible enum values:
     * - `"Bound"` used for PersistentVolumeClaims that are bound
     * - `"Lost"` used for PersistentVolumeClaims that lost their underlying PersistentVolume. The claim was bound to a PersistentVolume and this volume does not exist any longer and all data on it was lost.
     * - `"Pending"` used for PersistentVolumeClaims that are not yet bound
     */
    phase?: io_k8s_api_core_v1_PersistentVolumeClaimStatus.phase;
    /**
     * resizeStatus stores status of resize operation. ResizeStatus is not set by default but when expansion is complete resizeStatus is set to empty string by resize controller or kubelet. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
     */
    resizeStatus?: string;
};

export namespace io_k8s_api_core_v1_PersistentVolumeClaimStatus {

    /**
     * phase represents the current phase of PersistentVolumeClaim.
     *
     * Possible enum values:
     * - `"Bound"` used for PersistentVolumeClaims that are bound
     * - `"Lost"` used for PersistentVolumeClaims that lost their underlying PersistentVolume. The claim was bound to a PersistentVolume and this volume does not exist any longer and all data on it was lost.
     * - `"Pending"` used for PersistentVolumeClaims that are not yet bound
     */
    export enum phase {
        BOUND = 'Bound',
        LOST = 'Lost',
        PENDING = 'Pending',
    }


}

