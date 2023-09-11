import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { ServiceLayout } from "@/components/ServiceLayout";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@/gql";
import {
  Accordion,
  AccordionItem,
  Button,
  Chip,
  Divider,
  Link,
  ScrollShadow,
  Spinner,
} from "@nextui-org/react";
import { namedOperations } from "@/gql/graphql";
import { ServiceForm } from "@/components/ServiceForm";
import { toast } from "react-toastify";
import { DeleteService } from "@/components/DeleteService";

const Logs = ({ logs }: { logs: string }) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (anchorRef.current) {
      anchorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <ScrollShadow
      ref={scrollRef}
      className="h-full max-h-[400px] overflow-y-scroll pb-4"
    >
      {logs.split("\n").map((log) => (
        <code
          style={{
            overflowAnchor: "none",
            display: "block",
          }}
          className="whitespace-pre-wrap"
          key={log}
        >
          {log}
        </code>
      ))}
      {logs.length === 0 ? <code>No logs yet</code> : null}
      <div
        style={{
          overflowAnchor: "auto",
          height: "1px",
        }}
        ref={anchorRef}
      ></div>
    </ScrollShadow>
  );
};

const Page = () => {
  const router = useRouter();

  const serviceId = Number(router.query.serviceId);
  const projectId = Number(router.query.projectId);

  const [redeploy, redeployMutation] = useMutation(
    gql(`
        mutation RedeployService($id: Int!) {
          redeployService(id: $id) {
            id
          }
        }
  `),
    {
      refetchQueries: [namedOperations.Query.Deployments],
    },
  );

  const [update] = useMutation(
    gql(`
        mutation UpdateService($id: Int!, $input: ServiceUpdateInput!) {
          updateService(id: $id, input: $input) {
            id
          }
        }
            `),
    {
      refetchQueries: [namedOperations.Query.Deployments],
    },
  );

  const query = useQuery(
    gql(`
      query Deployments($serviceId: Int!) {
        deployments(serviceId: $serviceId) {
          pipelineName
          id
          createdAt
          buildStatus
          logs
          isActive
        }
        service(id: $serviceId) {
          id
          name
          status
          githubRepoUrl
          port
          builder
          subdomain
          envVars {
            name
            value
          }
        }
      }
    `),
    {
      variables: {
        serviceId,
      },
      pollInterval: 4000,
    },
  );

  const serviceUrl = `https://${query.data?.service?.subdomain}.up.reix.tech`;

  if (query.loading) {
    return <Spinner className="mx-auto mt-5 w-full" />;
  }

  if (!query.data) {
    return null;
  }

  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-1 gap-4">
      <div className="mx-auto flex w-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="mb-4 mt-4 text-4xl font-bold">
              {query.data?.service?.name}
            </h1>
            {query.data.service.status === "Running" ? (
              <Chip color="success">Running</Chip>
            ) : null}
            {query.data.service.status === "Deploying" ? <Spinner /> : null}
          </div>

          <div className="flex items-center gap-4">
            <Button
              color="secondary"
              isLoading={redeployMutation.loading}
              onClick={() => {
                void toast.promise(
                  redeploy({
                    variables: {
                      id: serviceId,
                    },
                  }),
                  {
                    pending: "Redeploying service...",
                    success: "Service redeployed",
                    error: "Failed to redeploy service",
                  },
                );
              }}
            >
              Redeploy
            </Button>
            <DeleteService serviceId={serviceId} projectId={projectId} />
          </div>
        </div>
        <Link
          isExternal
          isDisabled={query.data.service.status !== "Running"}
          showAnchorIcon
          href={serviceUrl}
        >
          {serviceUrl}
        </Link>

        <div className="mt-5 flex w-full gap-4">
          <Accordion variant="splitted">
            {query.data.deployments
              .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
              .map((deployment) => (
                <AccordionItem
                  key={deployment.id}
                  title={
                    <div className="flex items-center gap-4">
                      <p
                        className={
                          deployment.isActive
                            ? "text-green-500"
                            : deployment.buildStatus === "Failed"
                            ? "text-red-500"
                            : ""
                        }
                      >
                        Deployment #{deployment.id}
                      </p>
                      {deployment.buildStatus === "Failed" ? (
                        <p>Failed</p>
                      ) : null}
                      {deployment.buildStatus === "Running" ? (
                        <Spinner />
                      ) : null}
                    </div>
                  }
                >
                  <Logs logs={deployment.logs} />
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </div>
      <Divider orientation="vertical" className="my-4 h-full" />
      <div className="mt-4">
        <ServiceForm
          onSubmit={async (input) => {
            await toast.promise(
              update({
                variables: {
                  id: serviceId,
                  input,
                },
              }),
              {
                pending: "Updating service...",
                success: "Service updated. Remember to redeploy!",
                error: "Failed to update service",
              },
            );
          }}
          buttonText="Update"
          initialValues={{
            port: query.data.service.port,
            githubRepoUrl: query.data.service.githubRepoUrl ?? undefined,
            builder: query.data.service.builder,
            envVars: query.data.service.envVars
              .map((envVar) => `${envVar.name}=${envVar.value}`)
              .join("\n"),
          }}
        />
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <ServiceLayout>
      <Page />
    </ServiceLayout>
  );
};

export default Service;
