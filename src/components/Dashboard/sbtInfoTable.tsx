"use client";
import React, { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Tooltip,
} from "@material-tailwind/react";
import { ViewModal } from "./viewModal";
import { sbts } from "@/constants/sbt";
import { useContractReads } from "wagmi";

const TABLE_HEAD = ["SBT Name", "SBT Symbol", "Token ID", ""];

const SBTS = Object.keys(sbts).map((key) => {
  return {
    sbtName: sbts[key].sbtName,
    sbtSymbol: sbts[key].sbtSymbol,
    sbtAddress: sbts[key].sbtAddress,
    tokenId: sbts[key].tokenId,
    abi: sbts[key].abi,
    active: sbts[key].active,
  };
});

export function SbtInfoTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);
  const [walletSbts, setWalletSbts] = useState([]);
  const [tooltipContent, setTooltipContent] = useState("Copy Address");

  const { data, isSuccess, isLoading } = useContractReads({
    contracts: [
      {
        address: SBTS[0].sbtAddress,
        abi: SBTS[0].abi,
        functionName: "getTokenIdsByWallet",
      },
      {
        address: SBTS[1].sbtAddress,
        abi: SBTS[1].abi,
        functionName: "getTokenIdsByWallet",
      },
      {
        address: SBTS[2].sbtAddress,
        abi: SBTS[2].abi,
        functionName: "getTokenIdsByWallet",
      },
      {
        address: SBTS[3].sbtAddress,
        abi: SBTS[3].abi,
        functionName: "getTokenIdsByWallet",
      },
    ],
    onSuccess: (data: any) => {
      let allWalletSbts: any = [];

      let educationIdSbts = data[0].result;
      let employeeIdSbts = data[1].result;
      let nationalIdSbts = data[2].result;
      let passportIdSbts = data[3].result;

      educationIdSbts.forEach((element: any) => {
        allWalletSbts.push({
          sbtName: SBTS[0].sbtName,
          sbtSymbol: SBTS[0].sbtSymbol,
          sbtAddress: SBTS[0].sbtAddress,
          tokenId: Number(element),
        });
      });

      employeeIdSbts.forEach((element: any) => {
        allWalletSbts.push({
          sbtName: SBTS[1].sbtName,
          sbtSymbol: SBTS[1].sbtSymbol,
          sbtAddress: SBTS[1].sbtAddress,
          tokenId: Number(element),
        });
      });

      nationalIdSbts.forEach((element: any) => {
        allWalletSbts.push({
          sbtName: SBTS[2].sbtName,
          sbtSymbol: SBTS[2].sbtSymbol,
          sbtAddress: SBTS[2].sbtAddress,
          tokenId: Number(element),
        });
      });

      passportIdSbts.forEach((element: any) => {
        allWalletSbts.push({
          sbtName: SBTS[3].sbtName,
          sbtSymbol: SBTS[3].sbtSymbol,
          sbtAddress: SBTS[3].sbtAddress,
          tokenId: Number(element),
        });
      });

      setWalletSbts(allWalletSbts);
      console.log("ALL SBTS", allWalletSbts);
    },
  });

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredRows(walletSbts);
    } else {
      const filtered = walletSbts.filter(
        (row: { sbtName: string; sbtSymbol: string; tokenId: number }) => {
          return (
            row.sbtName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.sbtSymbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.tokenId.toString().includes(searchTerm.toLowerCase())
          );
        }
      );
      setFilteredRows(filtered);
      console.log("FILTERED", filtered);
    }
  }, [searchTerm, walletSbts]);

  function copyAddress(address: string) {
    navigator.clipboard.writeText(address);
    setTooltipContent("Address Copied!");
    setTimeout(() => {
      setTooltipContent("Copy Address");
    }, 2000);
  }

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Issued SBTs
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              List of all soul-bound tokens (SBTs) that you hold.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              label="Search"
              className="focus:ring-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              crossOrigin={undefined}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-none px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.length == 0 ? (
              <>
                <div className="justify-center w-full m-4">No data found</div>
              </>
            ) : (
              filteredRows.map(
                ({ sbtName, sbtSymbol, sbtAddress, tokenId }, index) => {
                  const isLast = index === SBTS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={sbtName}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          {/* <Avatar src={img} alt={name} size="sm" /> */}
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {sbtName}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {String(sbtAddress).substring(0, 6) +
                                "..." +
                                String(sbtAddress).substring(
                                  String(sbtAddress).length - 6
                                )}
                              {/* Add a span of copy icon here 🟢*/}
                              <Tooltip content={tooltipContent}>
                                <span
                                  onClick={() => {
                                    copyAddress(sbtAddress);
                                  }}
                                  className="inline-flex ml-1 h-[15px] cursor-pointer"
                                >
                                  <DocumentDuplicateIcon />
                                </span>
                              </Tooltip>
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="black"
                            className="font-bold"
                          >
                            {sbtSymbol}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="black"
                            className="font-bold"
                          >
                            {tokenId}
                          </Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <div className="flex flex-col">
                          <ViewModal
                            sbtName={sbtName}
                            tokenId={tokenId}
                            sbtAddress={sbtAddress}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                }
              )
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
