"use client";

import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export function Connected({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAccount();
  const router = useRouter();

  if (!isConnected) router.push("/");
  return <>{children}</>;
}
