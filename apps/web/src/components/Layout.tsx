import { Navbar, NavbarBrand, Tab, Tabs } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { type PropsWithChildren } from "react";

export const EmptyLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>NotRailway</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <Navbar maxWidth="full">
          <NavbarBrand>
            <p className="font-bold text-inherit">NotRailway</p>
          </NavbarBrand>
        </Navbar>
        {children}
      </div>
    </>
  );
};

export const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const pathname = router.pathname;

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
          key="/projects"
          title="Projects"
          className="flex h-full w-auto flex-col items-center justify-center"
        />
        <Tab key="/settings" className="h-full w-auto" title="Settings" />
      </Tabs>
      {children}
    </EmptyLayout>
  );
};
