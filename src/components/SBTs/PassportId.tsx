import React from "react";
import { sbts } from "@/constants/sbt";

const PassportId = () => {
  const passportData = sbts["0xbDA5747bFD65F08deb54cb465eB87D40e51B197E"];
  const { sbtFields } = passportData;
  return (
    <div>
      <h2>{passportData.sbtName}</h2>
      <ul>
        {sbtFields.map((field: any) => (
          <li key={field.title}>
            <strong>{field.title}:</strong>{" "}
            {/* Add static values here if available */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PassportId;
