import type { AppProps } from "next/app";
import { wrapper } from "@/store/store";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";

import "@/styles/globals.scss";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </Provider>
  );
}

export default App;
