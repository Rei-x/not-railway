/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_core_v1_ConfigMapProjection } from './io_k8s_api_core_v1_ConfigMapProjection';
import type { io_k8s_api_core_v1_DownwardAPIProjection } from './io_k8s_api_core_v1_DownwardAPIProjection';
import type { io_k8s_api_core_v1_SecretProjection } from './io_k8s_api_core_v1_SecretProjection';
import type { io_k8s_api_core_v1_ServiceAccountTokenProjection } from './io_k8s_api_core_v1_ServiceAccountTokenProjection';

/**
 * Projection that may be projected along with other supported volume types
 */
export type io_k8s_api_core_v1_VolumeProjection = {
    /**
     * configMap information about the configMap data to project
     */
    configMap?: io_k8s_api_core_v1_ConfigMapProjection;
    /**
     * downwardAPI information about the downwardAPI data to project
     */
    downwardAPI?: io_k8s_api_core_v1_DownwardAPIProjection;
    /**
     * secret information about the secret data to project
     */
    secret?: io_k8s_api_core_v1_SecretProjection;
    /**
     * serviceAccountToken is information about the serviceAccountToken data to project
     */
    serviceAccountToken?: io_k8s_api_core_v1_ServiceAccountTokenProjection;
};

