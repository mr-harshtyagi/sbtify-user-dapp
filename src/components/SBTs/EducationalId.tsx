import React from "react";
import { sbts } from "@/constants/sbt";

const EducationalId = () => {
  const educationalData = sbts["0xdD2FD4581271e230360230F9337D5c0430Bf44C0"];
  const { sbtFields } = educationalData;
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

export default EducationalId;
