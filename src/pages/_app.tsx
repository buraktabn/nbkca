import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { createTheme, NextUIProvider } from "@nextui-org/react"

import themeData from "@/theme"

export default function App({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: themeData
  });

  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps}/>
    </NextUIProvider>
  );
}
