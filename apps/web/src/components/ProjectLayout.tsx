import React, { type PropsWithChildren } from "react";
import { EmptyLayout } from "./Layout";
import { useRouter } from "next/router";
import { Tabs, Tab, Spinner } from "@nextui-org/react";

export const ProjectLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const id = router.query.projectId;
  const pathname = router.asPath;

  if (typeof id === "undefined") {
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
          key={`/projects/${id?.toString()}`}
          title="Project"
          className="flex h-full w-auto flex-col items-center justify-center"
        />
      </Tabs>
      {children}
    </EmptyLayout>
  );
};
