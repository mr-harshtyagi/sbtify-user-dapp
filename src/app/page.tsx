"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { ConnectKitButton } from "connectkit";

export default function Homepage() {
  const { address, isDisconnected } = useAccount();
  const router = useRouter();

  React.useEffect(() => {
    if (address) {
      router.push("/dashboard");
    }
  }, [address]);

  return (
    <>
      {isDisconnected && (
        <Card className="mt-6 mx-16">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Hello there 👋
            </Typography>
            <Typography>
              If you are an User, Connect your wallet to get started.
              <br />
              <br />
              In case you are a Organization,{" "}
              <a
                href="https://www.google.com"
                className="cursor-pointer underline"
              >
                Click here
              </a>{" "}
              to got to user dashboard.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <ConnectKitButton />
          </CardFooter>
        </Card>
      )}
    </>
  );
}
