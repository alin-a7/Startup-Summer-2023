import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

import "@/styles/globals.scss";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
  );
}
