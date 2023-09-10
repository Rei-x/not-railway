/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { io_k8s_api_core_v1_ExecAction } from './io_k8s_api_core_v1_ExecAction';
import type { io_k8s_api_core_v1_HTTPGetAction } from './io_k8s_api_core_v1_HTTPGetAction';
import type { io_k8s_api_core_v1_TCPSocketAction } from './io_k8s_api_core_v1_TCPSocketAction';

/**
 * LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
 */
export type io_k8s_api_core_v1_LifecycleHandler = {
    /**
     * Exec specifies the action to take.
     */
    exec?: io_k8s_api_core_v1_ExecAction;
    /**
     * HTTPGet specifies the http request to perform.
     */
    httpGet?: io_k8s_api_core_v1_HTTPGetAction;
    /**
     * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified.
     */
    tcpSocket?: io_k8s_api_core_v1_TCPSocketAction;
};

