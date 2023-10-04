import EducationalId from "@/components/SBTs/EducationalId";
import EmployeeId from "@/components/SBTs/EmployeeId";
import NationalId from "@/components/SBTs/NationalId";
import PassportId from "@/components/SBTs/PassportId";
import React from "react";

const page = () => {
  return (
    <div>
      <PassportId />
      <EmployeeId />
      <NationalId />
      <EducationalId />
    </div>
  );
};

export default page;
