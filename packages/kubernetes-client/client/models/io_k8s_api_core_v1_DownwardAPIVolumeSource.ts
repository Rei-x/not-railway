/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_core_v1_DownwardAPIVolumeFile } from './io_k8s_api_core_v1_DownwardAPIVolumeFile';

/**
 * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
 */
export type io_k8s_api_core_v1_DownwardAPIVolumeSource = {
    /**
     * Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     */
    defaultMode?: number;
    /**
     * Items is a list of downward API volume file
     */
    items?: Array<io_k8s_api_core_v1_DownwardAPIVolumeFile>;
};

