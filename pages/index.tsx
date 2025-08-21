import { useActiveAccount, useReadContract } from "thirdweb/react";
import { getContract } from "thirdweb";
import { getBalance } from "thirdweb/extensions/erc20";
import { polygon } from "thirdweb/chains";
import { client } from "../lib/client";

// 👇 Sostituisci con l'indirizzo ERC‑20 di Bitnun
const BITNUN_ADDRESS = 0x89b0bf7cc5e4361D9dcfbD6a897437E416af4aa0
export default function Home() {
  const account = useActiveAccount();
  const contract = getContract({ client, address: BITNUN_ADDRESS, chain: polygon });

  const { data: bal, isLoading } = useReadContract(getBalance, {
    contract,
    address: account?.address,
  });

  return (
    <main style={{ padding: 20 }}>
      {!account && <p>Collega il wallet per vedere il saldo Bitnun</p>}
      {account && (
        <p>
          {isLoading
            ? "Caricamento saldo..."
            : `Saldo Bitnun: ${bal?.value} ${bal?.symbol}`}
        </p>
      )}
    </main>
  );
}
