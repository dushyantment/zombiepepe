import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";

import "@/styles/globals.css";
import React from "react";
import Sites from "@/components/Site";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Sites>
      <Component {...pageProps} />
    </Sites>
  );
}
