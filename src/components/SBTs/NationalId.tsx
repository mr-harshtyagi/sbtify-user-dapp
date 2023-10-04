import React from "react";
import { sbts } from "@/constants/sbt";

const NationalId = () => {
  const nationalData = sbts["0xdD2FD4581271e230360230F9337D5c0430Bf44C0"];
  const { sbtFields } = nationalData;
  return (
    <div>
      <h2>{nationalData.sbtName}</h2>
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

export default NationalId;
