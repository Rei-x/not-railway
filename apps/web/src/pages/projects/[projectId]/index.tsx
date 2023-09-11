import { ProjectLayout } from "@/components/ProjectLayout";
import { gql } from "@/gql";
import { useQuery } from "@apollo/client";
import { Card, CardHeader, Spinner, Image, CardBody } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { CreateService } from "@/components/CreateService";

const Page = () => {
  const router = useRouter();

  const projectId = Number(router.query.projectId);

  const services = useQuery(
    gql(`
        query Services($projectId: Int!) {
          services(projectId: $projectId) {
            id
            name
            port
            subdomain
            githubRepoUrl
            dockerImageUrl
          }
        }
      `),
    {
      variables: {
        projectId,
      },
    },
  );

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Services</h1>
        <CreateService projectId={projectId} />
      </div>
      <div className="mx-auto mt-4 flex w-full gap-4">
        {services.data?.services.map((service) => (
          <Card
            key={service.id}
            isPressable
            isHoverable
            as={Link}
            href={`/projects/${projectId}/service/${service.id}`}
          >
            <Card className="py-4">
              <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                <p className="text-tiny font-bold uppercase">
                  Port: {service.port}
                </p>
                <small className="text-default-500">
                  {service.githubRepoUrl}
                </small>
                <h4 className="text-large font-bold">{service.name}</h4>
              </CardHeader>
              <CardBody className="flex items-center justify-center overflow-visible py-2">
                <Image
                  as={NextImage}
                  alt="Card background"
                  className="rounded-xl object-cover"
                  src={`https://cataas.com/cat/gif/says/${service.name}?width=300&height=200`}
                  width={300}
                  height={200}
                />
              </CardBody>
            </Card>
          </Card>
        ))}
        {services.loading ? (
          <Spinner className="mx-auto" />
        ) : services.data?.services.length === 0 ? (
          <p className="mx-auto text-center text-gray-500">No services found</p>
        ) : null}
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <ProjectLayout>
      <Page />
    </ProjectLayout>
  );
};

export default Project;
