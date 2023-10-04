import React from "react";
import { sbts } from "@/constants/sbt";

const EmployeeId = () => {
  const employeeData = sbts["0xd83848Cf45B61D1D9BF934e0360e4844580c67f3"];
  const { sbtFields } = employeeData;
  return (
    <div>
      <h2>{employeeData.sbtName}</h2>
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

export default EmployeeId;