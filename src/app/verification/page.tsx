"use client";
import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Alert,
} from "@material-tailwind/react";
import { Connected } from "@/components/Connected";
import { DefaultSpinner } from "@/components/Spinner/page";
import VerificationRequestsTable from "@/components/Verification/verificationRequestsTable";

const Verification = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [loading, setLoading] = React.useState<Boolean>();
  const [transactionStatus, setTransactionStatus] = React.useState<String>("");

  function showTransactionAlert(type: string) {
    setTransactionStatus(type);
    setTimeout(() => {
      setTransactionStatus("");
    }, 5000);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //activate spinner on screen//
    setLoading(true);
    //send transaction to blockchain//
    setTimeout(() => {
      setLoading(false);
      showTransactionAlert("error");
      handleOpen();
    }, 2000);
    //if transaction is succesful show success message else error message//
    //deactivate spinner//
    // console.log("submitted");
  }

  return (
    <>
      <Connected>
        <div className="m-8">
          {/* <VerificationForm /> */}
          <VerificationRequestsTable requestVerification={handleOpen} />
          {/* Request for Verification Dialog */}
          <Dialog
            size="xs"
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none"
          >
            {loading ? (
              <div className="flex justify-center mt-24">
                <DefaultSpinner />
              </div>
            ) : (
              <Card className="mx-auto w-full max-w-[24rem]">
                <CardHeader
                  variant="gradient"
                  color="blue"
                  className="mb-4 grid h-28 place-items-center"
                >
                  <Typography variant="h4" color="white">
                    Request for Verification
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                  <form
                    className="mb-4 flex flex-col gap-6"
                    onSubmit={handleSubmit}
                  >
                    <Input
                      className="focus:ring-0 "
                      size="lg"
                      label="SBT Holder Wallet Address"
                      crossOrigin={undefined}
                      required={true}
                    />
                    <Input
                      className="focus:ring-0 "
                      size="lg"
                      label="SBT Address"
                      required={true}
                      crossOrigin={undefined}
                    />
                    <Input
                      className="focus:ring-0 "
                      size="lg"
                      label="Document/Token ID"
                      required={true}
                      crossOrigin={undefined}
                    />
                    {/* <div className="-ml-2.5">
                  <Checkbox label="Remember Me" crossOrigin={undefined} />
                </div> */}
                    <Button
                      color="blue"
                      type="submit"
                      variant="gradient"
                      fullWidth
                    >
                      Send Request
                    </Button>
                  </form>
                </CardBody>

                {/* <Typography
                  variant="small"
                  className="mt-6 flex justify-center"
                >
                  Don&apos;t have an account?
                  <Typography
                    as="a"
                    href="#signup"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                    onClick={handleOpen}
                  >
                    Sign up
                  </Typography>
                </Typography> */}
              </Card>
            )}
          </Dialog>
        </div>
        <div className="absolute top-10 right-5">
          {transactionStatus == "success" && (
            <Alert icon={<SuccessIcon />} color="green">
              Transaction Succesful
            </Alert>
          )}
          {transactionStatus == "error" && (
            <Alert icon={<ErrorIcon />} color="red">
              At this moment he knew he fucked up!
            </Alert>
          )}
        </div>
      </Connected>
    </>
  );
};

export default Verification;

// icons
function SuccessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function ErrorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    </svg>
  );
}
