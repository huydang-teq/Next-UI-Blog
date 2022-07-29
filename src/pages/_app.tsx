import { ThemeProvider } from "@mui/material";
import { BaseLayout } from "@src/components/layouts";
import { lightTheme } from "@src/themes";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  session: Session | undefined | null;
};
function MyApp({ Component, pageProps, session }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <BaseLayout>{page}</BaseLayout>);
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={lightTheme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
