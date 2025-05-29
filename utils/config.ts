import { createConfig, http, createStorage, cookieStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

declare module "wagmi" {
  interface Register {
    config: ReturnType<typeof getConfig>;
  }
}

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
    connectors: [
      injected(),
      walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID ?? "" }),
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
  });
}
