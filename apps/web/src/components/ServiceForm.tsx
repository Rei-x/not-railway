import { Buildpacks } from "@/gql/graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Input,
  Select,
  Avatar,
  SelectItem,
  Button,
  Textarea,
} from "@nextui-org/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const createServiceSchema = z.object({
  port: z.coerce.number().min(80).max(65535),
  githubRepoUrl: z
    .string()
    .startsWith("https:", "Only https protocol is supported")
    .url(),
  envVars: z.string().default(""),
  builder: z.nativeEnum(Buildpacks),
});

const buildPacks = [
  {
    name: "Nixpacks",
    value: Buildpacks.Nixpacks,
    url: "https://raw.githubusercontent.com/railwayapp/nixpacks/main/docs/public/box.svg",
  },
  {
    name: "Dockerfile",
    value: Buildpacks.Docker,
    url: "https://devicons.railway.app/i/docker.svg",
  },
];
export const ServiceForm = ({
  onSubmit,
  initialValues,
  buttonText = "Create",
}: {
  onSubmit: (
    input: z.infer<typeof createServiceSchema>,
  ) => Promise<void> | void;
  initialValues?: Partial<z.infer<typeof createServiceSchema>>;
  buttonText?: string;
}) => {
  const { handleSubmit, register, formState, control } = useForm<
    z.infer<typeof createServiceSchema>
  >({
    resolver: zodResolver(createServiceSchema),
    defaultValues: {
      port: 3000,
      githubRepoUrl: "https://github.com/shuding/nextra-docs-template.git",
      builder: Buildpacks.Nixpacks,
      ...initialValues,
    },
  });

  return (
    <form
      className="w-full min-w-[300px]"
      onSubmit={
        handleSubmit(onSubmit, (error) => {
          console.error(error);
        }) as never
      }
    >
      <div className="flex w-full flex-col gap-6">
        <Input
          label="Port"
          placeholder="3000"
          isRequired
          description="On which port your app listens"
          labelPlacement="outside"
          {...register("port")}
          validationState={formState.errors.port ? "invalid" : undefined}
          errorMessage={formState.errors.port?.message}
        />
        <Input
          label="Github repository url"
          labelPlacement="outside"
          description="Must be https://"
          isRequired
          placeholder="https://github.com/rei-x/not-railway"
          {...register("githubRepoUrl")}
          validationState={
            formState.errors.githubRepoUrl ? "invalid" : undefined
          }
          errorMessage={formState.errors.githubRepoUrl?.message}
        />
        <Controller
          control={control}
          name="builder"
          render={({ field }) => (
            <Select
              items={buildPacks}
              isRequired
              className="mt-6"
              labelPlacement="outside"
              label="Buildpack"
              ref={field.ref}
              selectedKeys={[field.value]}
              onBlur={field.onBlur}
              onChange={field.onChange}
              renderValue={(items) => {
                return items.map((item) => (
                  <div key={item.key} className="flex items-center gap-2">
                    <Avatar
                      radius="none"
                      alt={item.data?.name}
                      className="flex-shrink-0"
                      size="sm"
                      src={item.data?.url}
                    />
                    <div className="flex flex-col">
                      <span>{item.data?.name}</span>
                    </div>
                  </div>
                ));
              }}
              defaultSelectedKeys={["nixpacks"]}
            >
              {(buildPack) => (
                <SelectItem key={buildPack.value} textValue={buildPack.name}>
                  <div className="flex items-center gap-2">
                    <Avatar
                      radius="none"
                      alt={buildPack.name}
                      className="flex-shrink-0"
                      size="sm"
                      src={buildPack.url}
                    />
                    <div className="flex flex-col">
                      <span className="text-small">{buildPack.name}</span>
                    </div>
                  </div>
                </SelectItem>
              )}
            </Select>
          )}
        />

        <Textarea
          {...register("envVars")}
          label=".env"
          labelPlacement="outside"
          description="Available during build and deployment"
          placeholder={`OPENAI_SECRET=my-secret\nREDIS_URL=redis://redis:6379`}
        />
        <Button
          color="primary"
          type="submit"
          isLoading={formState.isSubmitting}
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
};
