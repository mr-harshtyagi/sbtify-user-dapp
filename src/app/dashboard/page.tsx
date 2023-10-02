import { InfoCard } from "@/components/Dashboard/info";
import { SbtInfoTable } from "@/components/Dashboard/sbtInfoTable";
import React from "react";
import { Connected } from "@/components/Connected";

const Dashboard = () => {
  return (
    <>
      <Connected>
        <div className="m-8">
          <InfoCard />
          <br />
          <SbtInfoTable />
          <br />
        </div>
      </Connected>
    </>
  );
};

export default Dashboard;
