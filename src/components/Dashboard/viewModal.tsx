import React, { use } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useContractRead } from "wagmi";
import { sbts } from "@/constants/sbt";

interface ViewModalProps {
  sbtName: string;
  sbtAddress: string;
  tokenId: string;
}

export function ViewModal({ sbtName, sbtAddress, tokenId }: ViewModalProps) {
  const [open, setOpen] = React.useState(false);

  const { data, isRefetching, refetch } = useContractRead({
    address: sbts[sbtAddress].sbtAddress,
    abi: sbts[sbtAddress].abi,
    functionName: "verifyCredential",
    args: [tokenId],
    onSuccess: (data: any) => {
      console.log(data);
    },
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleOpen} color="green" variant="gradient">
        View
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="flex justify-center items-center">
          {sbtName}
        </DialogHeader>
        <DialogBody>
          <div className="bg-green-200 w-96 p-8 rounded-lg shadow-xl max-w-sm mx-auto border deep-purple-700">
            <ul>
              {Object.keys(data).map((field: string) => (
                <li key={field}>
                  <strong>
                    {field} : {String(data?.[field])}
                  </strong>{" "}
                  {/* Add static values here if available */}
                </li>
              ))}
            </ul>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="green"
            onClick={handleOpen}
            fullWidth
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
