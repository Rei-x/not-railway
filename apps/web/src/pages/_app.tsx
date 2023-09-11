import { type AppType } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "@/styles/globals.css";
import { env } from "@/env.mjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${env.NEXT_PUBLIC_API_URL}/graphql`,
});

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <NextUIProvider>
      <ApolloProvider client={client}>
        <main>
          <Component {...pageProps} />
        </main>
        <ToastContainer position="top-center" theme="dark" />
      </ApolloProvider>
    </NextUIProvider>
  );
};

export default MyApp;
