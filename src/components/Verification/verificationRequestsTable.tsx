"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
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

const TABLE_HEAD = ["SBT Name", "SBT Symbol", "Requested By", "Status", ""];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    userName: "vitalik",
    walletAddress: "0xb8b39ed3BebE64f835463Cb8b9F046cB827F90f8",
    sbtName: "DID (Digital Identity Token)",
    sbtAddress: "0xb8b39ed3BebE64f835463Cb8b9F046cB827F90f9",
    sbtSymbol: "DID",
    online: true,
    status: "Pending",
    requestedBy: "0xb8b39ed3BebE64f835463Cb8b9F046cB827F90f9",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    userName: "harsh",
    walletAddress: "0xb8b39ed3BebE64f835463Cb8b9F046cB827F90f8",
    sbtName: "Programator",
    sbtAddress: "0xb8b39ed3BebE64f835463Cb8b9F046cB827F90f9",
    sbtSymbol: "DID",
    online: false,
    status: "Accepted",
    requestedBy: "0xb8b39ed3BebE64f835463Cb8b9F046cB827F90f9",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    userName: "yshv",
    walletAddress: "0xb8b39ed3BebE64f835463Cb8b9F046cB827F90f8",
    sbtName: "Executive",
    sbtAddress: "0xb8b39ed3BebE64f835463Cb8b9F046cB827F90f9",
    sbtSymbol: "DID",
    online: false,
    status: "Rejected",
    requestedBy: "0xb8b39ed3BebE64f835463Cb8b9F046cB827F90f9",
  },
];

export default function VerificationRequestsTable() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRows, setFilteredRows] = useState(TABLE_ROWS);
  const [tooltipContent, setTooltipContent] = useState("Copy Address");

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredRows(TABLE_ROWS);
    } else {
      let filtered = TABLE_ROWS.filter((row) =>
        row.userName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRows(filtered);
    }
  }, [searchTerm]);

  const handleClick = () => {
    // replace hard coded string with sbt userName
    router.push(`https://www.google.com`);
  };

  function copyAddress(address: string) {
    navigator.clipboard.writeText(address);
    setTooltipContent("Address Copied!");
    setTimeout(() => {
      setTooltipContent("Copy Address");
    }, 2000);
  }

  const handleClickAllow = () => {
    console.log("Allowed!");
  };

  const handleClickDeny = () => {
    console.log("Denied!");
  };

  const handleClickRevoke = () => {
    console.log("Revoked!");
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              All Received Requests
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Here are all the requests sent by organizations for verification.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              label="Search"
              className="focus:ring-0 "
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
                (
                  {
                    userName,
                    sbtName,
                    sbtAddress,
                    sbtSymbol,
                    status,
                    requestedBy,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={userName}>
                      <td className={classes}>
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
                            {sbtAddress.substring(0, 6) +
                              "..." +
                              sbtAddress.substring(sbtAddress.length - 6)}
                            {/* Add a span of copy icon here 🟡 */}
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
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {sbtSymbol}
                          </Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {requestedBy.substring(0, 6) +
                            "..." +
                            requestedBy.substring(requestedBy.length - 6)}
                          {/* Add a span of copy icon here 🟡 */}
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
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={
                              status == "Pending"
                                ? "Pending"
                                : status == "Accepted"
                                ? "Accepted"
                                : "Rejected"
                            }
                            color={
                              status == "Pending"
                                ? "yellow"
                                : status == "Accepted"
                                ? "green"
                                : "red"
                            }
                          />
                        </div>
                      </td>
                      {/* Allow , Deny for pending revoke for accepted */}
                      <td className={classes}>
                        {status === "Pending" && (
                          <div className="flex gap-4">
                            <Button color="green" onClick={handleClickAllow}>
                              Approve
                            </Button>

                            <Button color="red" onClick={handleClickDeny}>
                              Reject
                            </Button>
                          </div>
                        )}

                        {status === "Accepted" && (
                          <Button color="red" onClick={handleClickRevoke}>
                            Revoke
                          </Button>
                        )}

                        {status === "Rejected" && (
                          <Button disabled={true}>Denied</Button>
                        )}
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
