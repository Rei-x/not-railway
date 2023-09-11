import { Layout } from "@/components/Layout";
import { gql } from "@/gql";
import { useMutation, useQuery } from "@apollo/client";
import {
  Input,
  Button,
  Card,
  CardHeader,
  CardFooter,
  Spinner,
} from "@nextui-org/react";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { namedOperations } from "@/gql/graphql";

const Projects = () => {
  const projects = useQuery(
    gql(`
      query Projects {
        projects {
          id
          name
          servicesCount
        }
      }
    `),
  );
  const [createProject, { loading }] = useMutation(
    gql(`
        mutation CreateProject {
          createProject {
            id
          }
        }
    `),
    {
      awaitRefetchQueries: true,
      refetchQueries: [namedOperations.Query.Projects],
    },
  );

  const [search, setSearch] = useState("");

  return (
    <Layout>
      <div className="mx-auto mt-4 w-full max-w-screen-lg">
        <div className="flex w-full gap-4">
          <Input
            placeholder="Search projects"
            className="w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            color="primary"
            endContent={<PlusIcon size={64} />}
            isLoading={loading}
            onClick={() => {
              void createProject();
            }}
          >
            Create new
          </Button>
        </div>
        <div className="mt-5 flex w-full gap-4">
          {projects.data?.projects
            ?.filter((project) => project.name.includes(search))
            .map((project) => (
              <Card
                key={project.id}
                as={Link}
                href={`/projects/${project.id}`}
                isHoverable={true}
                isPressable={true}
                className="min-w-[300px] max-w-[400px] gap-8 p-4"
              >
                <CardHeader className="flex gap-3">
                  <p className="text-lg font-bold">{project.name}</p>
                </CardHeader>
                <CardFooter className="text-gray-500">
                  {project.servicesCount} services
                </CardFooter>
              </Card>
            ))}
          {projects.loading ? (
            <Spinner className="mx-auto" />
          ) : projects.data?.projects.length === 0 ? (
            <p className="text-center text-gray-500">No projects found</p>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
