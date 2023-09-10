import { type AppType } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "@/styles/globals.css";
import { splitLink } from "@/api/link";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <NextUIProvider>
      <ApolloProvider client={client}>
        <main className="bg-background text-foreground dark">
          <Component {...pageProps} />
        </main>
      </ApolloProvider>
    </NextUIProvider>
  );
};

export default MyApp;
