import { type AppType } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "@/styles/globals.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <NextUIProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </NextUIProvider>
  );
};

export default MyApp;
