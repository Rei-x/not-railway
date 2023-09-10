/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n        query Services($projectId: Int!) {\n          services(projectId: $projectId) {\n            id\n            name\n            port\n            githubRepoUrl\n            dockerImageUrl\n            deployments {\n              id\n              pipelineName\n              status\n            }\n          }\n        }\n      ": types.ServicesDocument,
    "\n          mutation CreateService($input: ServiceCreate!) {\n            createService(input: $input) {\n              deployments {\n                pipelineName\n                status\n              }\n            }\n          }\n        ": types.CreateServiceDocument,
    "\n      query Deployments($serviceId: Int!) {\n        deployments(serviceId: $serviceId) {\n          pipelineName\n          id\n          createdAt\n          status\n          logs\n          isActive\n        }\n        service(id: $serviceId) {\n          id\n          name\n        }\n      }\n    ": types.DeploymentsDocument,
    "\n        mutation DeleteService($id: Int!) {\n          deleteService(id: $id) {\n            id\n          }\n        }\n  ": types.DeleteServiceDocument,
    "\n      query Projects {\n        projects {\n          id\n          name\n          servicesCount\n        }\n      }\n    ": types.ProjectsDocument,
    "\n        mutation CreateProject {\n          createProject {\n            id\n          }\n        }\n    ": types.CreateProjectDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query Services($projectId: Int!) {\n          services(projectId: $projectId) {\n            id\n            name\n            port\n            githubRepoUrl\n            dockerImageUrl\n            deployments {\n              id\n              pipelineName\n              status\n            }\n          }\n        }\n      "): (typeof documents)["\n        query Services($projectId: Int!) {\n          services(projectId: $projectId) {\n            id\n            name\n            port\n            githubRepoUrl\n            dockerImageUrl\n            deployments {\n              id\n              pipelineName\n              status\n            }\n          }\n        }\n      "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n          mutation CreateService($input: ServiceCreate!) {\n            createService(input: $input) {\n              deployments {\n                pipelineName\n                status\n              }\n            }\n          }\n        "): (typeof documents)["\n          mutation CreateService($input: ServiceCreate!) {\n            createService(input: $input) {\n              deployments {\n                pipelineName\n                status\n              }\n            }\n          }\n        "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query Deployments($serviceId: Int!) {\n        deployments(serviceId: $serviceId) {\n          pipelineName\n          id\n          createdAt\n          status\n          logs\n          isActive\n        }\n        service(id: $serviceId) {\n          id\n          name\n        }\n      }\n    "): (typeof documents)["\n      query Deployments($serviceId: Int!) {\n        deployments(serviceId: $serviceId) {\n          pipelineName\n          id\n          createdAt\n          status\n          logs\n          isActive\n        }\n        service(id: $serviceId) {\n          id\n          name\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        mutation DeleteService($id: Int!) {\n          deleteService(id: $id) {\n            id\n          }\n        }\n  "): (typeof documents)["\n        mutation DeleteService($id: Int!) {\n          deleteService(id: $id) {\n            id\n          }\n        }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query Projects {\n        projects {\n          id\n          name\n          servicesCount\n        }\n      }\n    "): (typeof documents)["\n      query Projects {\n        projects {\n          id\n          name\n          servicesCount\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        mutation CreateProject {\n          createProject {\n            id\n          }\n        }\n    "): (typeof documents)["\n        mutation CreateProject {\n          createProject {\n            id\n          }\n        }\n    "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;