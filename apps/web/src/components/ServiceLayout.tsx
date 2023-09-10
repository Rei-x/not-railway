import React, { type PropsWithChildren } from "react";
import { EmptyLayout } from "./Layout";
import { useRouter } from "next/router";
import { Tabs, Tab, Spinner } from "@nextui-org/react";

export const ServiceLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const projectId = router.query.projectId;
  const serviceId = router.query.serviceId;
  const pathname = router.asPath;

  if (!router.isReady) {
    return (
      <EmptyLayout>
        <Spinner className="mx-auto" />
      </EmptyLayout>
    );
  }

  return (
    <EmptyLayout>
      <Tabs
        selectedKey={pathname}
        onSelectionChange={async (key) => {
          await router.push(key.toString());
        }}
        variant="underlined"
        className="h-full"
        classNames={{
          tabList: "rounded-none w-screen border-b-1 border-b-zinc-800",
          cursor: "bottom-[-4px]",
        }}
      >
        <Tab
          key={`/projects/${projectId?.toString()}/service/${serviceId?.toString()}`}
          title="Service"
          className="flex h-full w-auto flex-col items-center justify-center"
        />
        <Tab
          key={`/projects/${projectId?.toString()}/service/${serviceId?.toString()}/env`}
          className="h-full w-auto"
          title="Env variables"
        />
      </Tabs>
      {children}
    </EmptyLayout>
  );
};
