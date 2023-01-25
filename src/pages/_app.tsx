import { DM_Sans, IBM_Plex_Sans, Oxygen, Sarabun } from "@next/font/google";
import clsx from "clsx";
import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

const font = DM_Sans({ weight: ["400", "500"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={clsx(
        font.className,
        "grid min-h-screen gap-16 bg-neutral-900 p-4 sm:p-8 md:p-12 lg:p-16"
      )}
    >
      <Head>
        <title>Ben Sampson</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Portfolio of Ben Sampson, full-stack engineer."
        />
        <link rel="icon" href="favicon.png" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
