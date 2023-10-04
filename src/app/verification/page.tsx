"use client";
import React from "react";
import { Connected } from "@/components/Connected";
import VerificationRequestsTable from "@/components/Verification/verificationRequestsTable";

const Verification = () => {
  return (
    <>
      <Connected>
        <div className="m-8">
          <VerificationRequestsTable />
        </div>
      </Connected>
    </>
  );
};

export default Verification;
