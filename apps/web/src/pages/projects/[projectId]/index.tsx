import { ProjectLayout } from "@/components/ProjectLayout";
import { gql } from "@/gql";
import { useMutation, useQuery } from "@apollo/client";
import {
  Card,
  CardHeader,
  CardFooter,
  Spinner,
  Input,
  Button,
  CardBody,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

const createServiceSchema = z.object({
  port: z.coerce.number().min(1).max(65535),
  githubRepoUrl: z.string().url(),
});

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
            githubRepoUrl
            dockerImageUrl
            deployments {
              id
              pipelineName
              status
            }
          }
        }
      `),
    {
      variables: {
        projectId,
      },
    },
  );

  const [createService, data] = useMutation(
    gql(`
          mutation CreateService($input: ServiceCreate!) {
            createService(input: $input) {
              deployments {
                pipelineName
                status
              }
            }
          }
        `),
    {
      awaitRefetchQueries: true,
    },
  );

  const { handleSubmit, register, formState } = useForm<
    z.infer<typeof createServiceSchema>
  >({
    resolver: zodResolver(createServiceSchema),
    defaultValues: {
      githubRepoUrl: "https://github.com/nawok/prost",
      port: 3000,
    },
  });

  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto mt-5 flex w-full max-w-screen-xl gap-4">
        {services.data?.services.map((service) => (
          <Card
            key={service.id}
            isHoverable={true}
            isPressable={true}
            as={Link}
            href={`/projects/${projectId}/service/${service.id}`}
            className="min-w-[300px] max-w-[400px] gap-8 p-4"
          >
            <CardHeader className="flex gap-3">
              <p className="text-lg font-bold">{service.name}</p>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-2">
                {service.deployments.map((deployment) => (
                  <div key={deployment.id}>
                    {deployment.pipelineName} - {deployment.status}
                  </div>
                ))}
              </div>
            </CardBody>
            <CardFooter className="text-gray-500"></CardFooter>
          </Card>
        ))}
        {services.loading ? (
          <Spinner className="mx-auto" />
        ) : services.data?.services.length === 0 ? (
          <p className="mx-auto text-center text-gray-500">No services found</p>
        ) : null}
      </div>
      <div className="flex max-w-screen-sm flex-col items-center justify-center">
        <p className="my-4 text-lg font-bold">Create new service</p>
        <form
          onSubmit={
            handleSubmit(async (input) => {
              await createService({
                variables: {
                  input: {
                    ...input,
                    projectId,
                  },
                },
              });
            }) as never
          }
        >
          <div className="flex flex-col gap-4">
            <Input
              label="Port"
              {...register("port")}
              validationState={formState.errors.port ? "invalid" : undefined}
              errorMessage={formState.errors.port?.message}
            />
            <Input
              label="Github repository url"
              {...register("githubRepoUrl")}
              validationState={
                formState.errors.githubRepoUrl ? "invalid" : undefined
              }
              errorMessage={formState.errors.githubRepoUrl?.message}
            />
            <Button
              color="primary"
              type="submit"
              isLoading={formState.isSubmitting}
            >
              Create
            </Button>
          </div>
        </form>
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
