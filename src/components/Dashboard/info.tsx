"use client";
import {
  CheckBadgeIcon,
  ClipboardIcon,
  DocumentDuplicateIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { ViewfinderCircleIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import { Account } from "../Account";
import { useAccount, useEnsName } from "wagmi";
import { useState } from "react";

export function InfoCard() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });

  // state 🟢
  const [tooltipContent, setTooltipContent] = useState("Copy Wallet Address");

  // 🟢 - here is onClick function
  function copyAddress() {
    navigator.clipboard.writeText(String(address));
    setTooltipContent("Address Copied!");
    setTimeout(() => {
      setTooltipContent("Copy Wallet Address");
    }, 2000);
  }

  return (
    <Card color="white" variant="gradient" className="w-full  p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 "
      >
        <Typography variant="h1" color="gray" className="font-normal uppercase">
          Welcome, <span className="text-blue-300 font-bold"> USER</span>
        </Typography>
        <Typography variant="h6" color="gray" className="font-normal uppercase">
          Wallet Address :{" "}
          <span className="font-semibold text-blue-400">
            {ensName ?? address}
          </span>{" "}
          {/* Here is copy icon 🟢 */}
          <Tooltip content={tooltipContent}>
            <span
              onClick={copyAddress}
              className="inline-flex  h-[18px] cursor-pointer"
            >
              <DocumentDuplicateIcon />
            </span>
          </Tooltip>
        </Typography>

        {/* <Typography
          variant="h3"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl">$</span>29{" "}
          <span className="self-end text-4xl">/mo</span>
        </Typography> */}
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-row gap-4 justify-around">
          {/* <li className="flex items-center gap-4">
            <CheckBadgeIcon className="h-10 text-green-400" />
            <Typography className="font-semibold">
              Auth Verified User
            </Typography>
          </li> */}
          <li className="flex items-center gap-4">
            <IdentificationIcon className="h-10 text-green-400" />

            <Typography className="font-semibold">
              Can view issued SBTs
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <ViewfinderCircleIcon className="h-10 text-green-400" />

            <Typography className="font-semibold">
              Can Request for verification
            </Typography>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}
