import type { AppProps } from "next/app";
import { ThirdwebProvider, ConnectButton } from "thirdweb/react";
import { polygon } from "thirdweb/chains";
import { client } from "../lib/client";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider client={client} chain={polygon}>
      <div style={{ padding: 20 }}>
        <ConnectButton />
      </div>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
