import { useRouter } from "next/router";
import React from "react";
import { ServiceLayout } from "@/components/ServiceLayout";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { gql } from "@/gql";
import { Button, Link, ScrollShadow } from "@nextui-org/react";
import { TrashIcon } from "lucide-react";

const Page = () => {
  const router = useRouter();

  const serviceId = Number(router.query.serviceId);
  const projectId = Number(router.query.projectId);

  const query = useQuery(
    gql(`
      query Deployments($serviceId: Int!) {
        deployments(serviceId: $serviceId) {
          pipelineName
          id
          createdAt
          status
          logs
          isActive
        }
        service(id: $serviceId) {
          id
          name
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

  const [deleteService] = useMutation(
    gql(`
        mutation DeleteService($id: Int!) {
          deleteService(id: $id) {
            id
          }
        }
  `),
  );

  const serviceUrl = `https://${query.data?.service?.name}.up.reix.tech`;

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 mt-4 text-4xl font-bold">
        {query.data?.service?.name}
      </h1>
      <Link isExternal showAnchorIcon href={serviceUrl}>
        {serviceUrl}
      </Link>
      <div>
        <Button
          isIconOnly
          onClick={(e) => {
            e.stopPropagation();
            void deleteService({
              variables: {
                id: serviceId,
              },
            }).then(() => {
              void router.push(`/projects/${projectId}`);
            });
          }}
        >
          <TrashIcon />
        </Button>
      </div>
      <div className="mx-auto mt-5 flex w-full max-w-screen-xl gap-4">
        {query.data?.deployments?.map((deployment) => (
          <div key={deployment.id}>
            <p className={deployment.isActive ? "text-green-500" : ""}>
              {deployment.pipelineName} -{" "}
              {new Date(deployment.createdAt).toUTCString()}
            </p>
            <ScrollShadow className="h-full max-h-[400px] overflow-y-scroll">
              <code className="h-full whitespace-pre-wrap">
                {deployment.logs}
              </code>
            </ScrollShadow>
          </div>
        ))}
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
