/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_storage_v1_VolumeAttachmentSource } from './io_k8s_api_storage_v1_VolumeAttachmentSource';

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export type io_k8s_api_storage_v1_VolumeAttachmentSpec = {
    /**
     * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
     */
    attacher: string;
    /**
     * The node that the volume should be attached to.
     */
    nodeName: string;
    /**
     * Source represents the volume that should be attached.
     */
    source: io_k8s_api_storage_v1_VolumeAttachmentSource;
};

