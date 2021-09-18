import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ColorModeProvider
      options={{
        useSystemColorMode: true,
      }}
    >
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}

export default MyApp;
