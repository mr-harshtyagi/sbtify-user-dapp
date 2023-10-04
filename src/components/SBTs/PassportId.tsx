import React from "react";
import { sbts } from "@/constants/sbt";

const PassportId = () => {
  const passportData = sbts["0xbDA5747bFD65F08deb54cb465eB87D40e51B197E"];
  const { sbtFields } = passportData;
  return (
    <div className="bg-deep-purple-200 w-96 p-8 rounded-lg shadow-xl max-w-sm mx-auto border deep-purple-700">
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
