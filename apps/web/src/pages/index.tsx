import Head from "next/head";
import { useQuery } from "@apollo/client";
import { gql } from "@/gql";
import {
  Button,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Tab,
  Tabs,
} from "@nextui-org/react";

export default function Home() {
  const query = useQuery(
    gql(`
    query Namespaces{
      namespaces
    }
  `),
  );

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <Navbar maxWidth="full">
          <NavbarBrand>
            <p className="font-bold text-inherit">NotRailway</p>
          </NavbarBrand>
        </Navbar>
        <Tabs
          variant="underlined"
          className="h-full"
          classNames={{
            tabList: "rounded-none w-screen border-b-1 border-b-zinc-800",
            cursor: "bottom-[-4px]",
          }}
        >
          <Tab title="Projects" className="flex h-full w-auto justify-center">
            <div className="mt-5 flex w-full max-w-screen-xl items-center gap-4">
              <Input
                variant="flat"
                label="Search"
                labelPlacement="outside"
                className="w-full"
              />
              <Button size="md" color="primary" >
                New
              </Button>
            </div>
          </Tab>
          <Tab className="h-full w-auto" title="Usage" />
          <Tab className="h-full w-auto" title="Settings" />
        </Tabs>
      </div>
    </>
  );
}