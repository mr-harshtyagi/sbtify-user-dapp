import { getDefaultConfig } from "connectkit";
import { createConfig } from "wagmi";
import { Chain } from "@wagmi/core";
import { mainnet } from "wagmi/chains";

const walletConnectProjectId = "ac024c7d28d8bef7325a17fe7644c61e";

export const sapphireTestnet = {
  id: 23_295,
  name: "Sapphire Testnet",
  network: "Sapphire",
  nativeCurrency: {
    decimals: 18,
    name: "Sapphire",
    symbol: "TEST",
  },
  rpcUrls: {
    public: { http: ["https://testnet.sapphire.oasis.dev"] },
    default: { http: ["https://testnet.sapphire.oasis.dev"] },
  },
  blockExplorers: {
    etherscan: {
      name: "Oasis Explorer",
      url: "https://explorer.oasis.io/testnet/sapphire",
    },
    default: {
      name: "Oasis Explorer",
      url: "https://explorer.oasis.io/testnet/sapphire",
    },
  },
} as const satisfies Chain;

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: "P4W3-Organisation-dApp",
    walletConnectProjectId,
    chains: [sapphireTestnet],
  })
);
