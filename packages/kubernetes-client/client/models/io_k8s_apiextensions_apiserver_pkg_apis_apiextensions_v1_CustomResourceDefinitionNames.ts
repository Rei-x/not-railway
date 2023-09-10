/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 */
export type io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames = {
    /**
     * categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.
     */
    categories?: Array<string>;
    /**
     * kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.
     */
    kind: string;
    /**
     * listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".
     */
    listKind?: string;
    /**
     * plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.
     */
    plural: string;
    /**
     * shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.
     */
    shortNames?: Array<string>;
    /**
     * singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.
     */
    singular?: string;
};

