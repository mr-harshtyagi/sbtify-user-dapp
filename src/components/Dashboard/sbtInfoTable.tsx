"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

// const TABS = [
//   {
//     label: "Active",
//     value: "all",
//   },
//   {
//     label: "Inactive",
//     value: "monitored",
//   },
// ];

const TABLE_HEAD = ["SBT Address", "Token ID", ""];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    ensName: "vitalik.eth",
    sbtSymbol: "DID",
    sbtName: "Digital Identity Token",
    sbtAddress: "0xb8b39ed3BebE64f835463Cb8b9F046cB827F90f8",
    tokenID: 20,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    ensName: "harsh.eth",
    sbtSymbol: "Aadhar",
    sbtName: "Unique Identity Token",
    sbtAddress: "0xb8b39ed3BebE64f835463Cb8b9F046cB827F90f8",
    tokenID: 1560000,
  },
];

export function SbtInfoTable() {
  // const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRows, setFilteredRows] = useState(TABLE_ROWS);
  const [tooltipContent, setTooltipContent] = useState("Copy Address");

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredRows(TABLE_ROWS);
    } else {
      const filtered = TABLE_ROWS.filter((row) =>
        row.sbtName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRows(filtered);
    }
  }, [searchTerm]);

  // const handleClick = () => {
  //   // replace hard coded string with sbt name
  //   router.push(`/issue/?tokenName=${"DID"}&tokenAddress=${"0x123456789"}`);
  // };

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
              List of all soul-bound tokens (SBTs) that are issued to user.
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {/* <Button color="blue" className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Request new
              SBT
            </Button> */}
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
            {filteredRows.length === 0 ? (
              <>
                <div className="justify-center w-full m-4">No data found</div>
              </>
            ) : (
              filteredRows.map(
                ({ sbtName, sbtSymbol, sbtAddress, tokenID }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
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
                              {sbtName} {`(${sbtSymbol})`}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {sbtAddress.substring(0, 6) +
                                "..." +
                                sbtAddress.substring(sbtAddress.length - 6)}
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
                            {tokenID}
                          </Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <div className="flex flex-col">
                          <Button
                            color="green"
                            type="submit"
                            variant="gradient"
                          >
                            View
                          </Button>
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
