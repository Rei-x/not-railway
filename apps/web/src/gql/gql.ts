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
    "\n          mutation CreateService($input: ServiceCreate!) {\n            createService(input: $input) {\n              id\n            }\n          }\n        ": types.CreateServiceDocument,
    "\n        mutation DeleteService($id: Int!) {\n          deleteService(id: $id) {\n            id\n          }\n        }\n  ": types.DeleteServiceDocument,
    "\n        query Services($projectId: Int!) {\n          services(projectId: $projectId) {\n            id\n            name\n            port\n            subdomain\n            githubRepoUrl\n            dockerImageUrl\n          }\n        }\n      ": types.ServicesDocument,
    "\n        mutation RedeployService($id: Int!) {\n          redeployService(id: $id) {\n            id\n          }\n        }\n  ": types.RedeployServiceDocument,
    "\n        mutation UpdateService($id: Int!, $input: ServiceUpdateInput!) {\n          updateService(id: $id, input: $input) {\n            id\n          }\n        }\n            ": types.UpdateServiceDocument,
    "\n      query Deployments($serviceId: Int!) {\n        deployments(serviceId: $serviceId) {\n          pipelineName\n          id\n          createdAt\n          buildStatus\n          logs\n          isActive\n        }\n        service(id: $serviceId) {\n          id\n          name\n          status\n          githubRepoUrl\n          port\n          builder\n          subdomain\n          envVars {\n            name\n            value\n          }\n        }\n      }\n    ": types.DeploymentsDocument,
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
export function gql(source: "\n          mutation CreateService($input: ServiceCreate!) {\n            createService(input: $input) {\n              id\n            }\n          }\n        "): (typeof documents)["\n          mutation CreateService($input: ServiceCreate!) {\n            createService(input: $input) {\n              id\n            }\n          }\n        "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        mutation DeleteService($id: Int!) {\n          deleteService(id: $id) {\n            id\n          }\n        }\n  "): (typeof documents)["\n        mutation DeleteService($id: Int!) {\n          deleteService(id: $id) {\n            id\n          }\n        }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query Services($projectId: Int!) {\n          services(projectId: $projectId) {\n            id\n            name\n            port\n            subdomain\n            githubRepoUrl\n            dockerImageUrl\n          }\n        }\n      "): (typeof documents)["\n        query Services($projectId: Int!) {\n          services(projectId: $projectId) {\n            id\n            name\n            port\n            subdomain\n            githubRepoUrl\n            dockerImageUrl\n          }\n        }\n      "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        mutation RedeployService($id: Int!) {\n          redeployService(id: $id) {\n            id\n          }\n        }\n  "): (typeof documents)["\n        mutation RedeployService($id: Int!) {\n          redeployService(id: $id) {\n            id\n          }\n        }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        mutation UpdateService($id: Int!, $input: ServiceUpdateInput!) {\n          updateService(id: $id, input: $input) {\n            id\n          }\n        }\n            "): (typeof documents)["\n        mutation UpdateService($id: Int!, $input: ServiceUpdateInput!) {\n          updateService(id: $id, input: $input) {\n            id\n          }\n        }\n            "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query Deployments($serviceId: Int!) {\n        deployments(serviceId: $serviceId) {\n          pipelineName\n          id\n          createdAt\n          buildStatus\n          logs\n          isActive\n        }\n        service(id: $serviceId) {\n          id\n          name\n          status\n          githubRepoUrl\n          port\n          builder\n          subdomain\n          envVars {\n            name\n            value\n          }\n        }\n      }\n    "): (typeof documents)["\n      query Deployments($serviceId: Int!) {\n        deployments(serviceId: $serviceId) {\n          pipelineName\n          id\n          createdAt\n          buildStatus\n          logs\n          isActive\n        }\n        service(id: $serviceId) {\n          id\n          name\n          status\n          githubRepoUrl\n          port\n          builder\n          subdomain\n          envVars {\n            name\n            value\n          }\n        }\n      }\n    "];
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