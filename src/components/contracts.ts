import { erc20ABI } from "wagmi";
import { wagmiABI, authorizationTokenABI } from "./abi";

export const wagmiContractConfig = {
  address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
  abi: wagmiABI,
} as const;

export const usdcContractConfig = {
  address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  abi: erc20ABI,
} as const;

export const authorizationTokenContractConfig = {
  address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
  abi: authorizationTokenABI,
} as const;
