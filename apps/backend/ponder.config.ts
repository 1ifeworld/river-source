import type { Config } from "@ponder/core";

export const config: Config = {
  networks: [
    {
      name: "optimism-goerli",
      chainId: 420,
      rpcUrl: process.env.PONDER_RPC_URL_420,
    },
  ],
  contracts: [
    {
      name: "Router",
      network: "optimism-goerli",
      abi: "./abis/Router.json",
      address: "0x880253BF121374121fE21948DE3A426a695924ee",
      startBlock: 13777523,
    },
  ],
};
