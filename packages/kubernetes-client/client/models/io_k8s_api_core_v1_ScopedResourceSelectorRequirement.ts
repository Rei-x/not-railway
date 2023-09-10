/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
 */
export type io_k8s_api_core_v1_ScopedResourceSelectorRequirement = {
    /**
     * Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.
     *
     * Possible enum values:
     * - `"DoesNotExist"`
     * - `"Exists"`
     * - `"In"`
     * - `"NotIn"`
     */
    operator: io_k8s_api_core_v1_ScopedResourceSelectorRequirement.operator;
    /**
     * The name of the scope that the selector applies to.
     *
     * Possible enum values:
     * - `"BestEffort"` Match all pod objects that have best effort quality of service
     * - `"CrossNamespacePodAffinity"` Match all pod objects that have cross-namespace pod (anti)affinity mentioned.
     * - `"NotBestEffort"` Match all pod objects that do not have best effort quality of service
     * - `"NotTerminating"` Match all pod objects where spec.activeDeadlineSeconds is nil
     * - `"PriorityClass"` Match all pod objects that have priority class mentioned
     * - `"Terminating"` Match all pod objects where spec.activeDeadlineSeconds >=0
     */
    scopeName: io_k8s_api_core_v1_ScopedResourceSelectorRequirement.scopeName;
    /**
     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
     */
    values?: Array<string>;
};

export namespace io_k8s_api_core_v1_ScopedResourceSelectorRequirement {

    /**
     * Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.
     *
     * Possible enum values:
     * - `"DoesNotExist"`
     * - `"Exists"`
     * - `"In"`
     * - `"NotIn"`
     */
    export enum operator {
        DOES_NOT_EXIST = 'DoesNotExist',
        EXISTS = 'Exists',
        IN = 'In',
        NOT_IN = 'NotIn',
    }

    /**
     * The name of the scope that the selector applies to.
     *
     * Possible enum values:
     * - `"BestEffort"` Match all pod objects that have best effort quality of service
     * - `"CrossNamespacePodAffinity"` Match all pod objects that have cross-namespace pod (anti)affinity mentioned.
     * - `"NotBestEffort"` Match all pod objects that do not have best effort quality of service
     * - `"NotTerminating"` Match all pod objects where spec.activeDeadlineSeconds is nil
     * - `"PriorityClass"` Match all pod objects that have priority class mentioned
     * - `"Terminating"` Match all pod objects where spec.activeDeadlineSeconds >=0
     */
    export enum scopeName {
        BEST_EFFORT = 'BestEffort',
        CROSS_NAMESPACE_POD_AFFINITY = 'CrossNamespacePodAffinity',
        NOT_BEST_EFFORT = 'NotBestEffort',
        NOT_TERMINATING = 'NotTerminating',
        PRIORITY_CLASS = 'PriorityClass',
        TERMINATING = 'Terminating',
    }


}

