import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import EducationalId from "../SBTs/EducationalId";
import PassportId from "../SBTs/PassportId";
import NationalId from "../SBTs/NationalId";
import EmployeeId from "../SBTs/EmployeeId";

interface ViewModalProps {
  sbtName: string;
}

export function ViewModal({ sbtName }: ViewModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const renderContent = () => {
    switch (sbtName) {
      case "Educational ID":
        return <EducationalId />;
      case "Passport ID":
        return <PassportId />;
      case "National ID":
        return <NationalId />;
      case "Employee ID":
        return <EmployeeId />;
      default:
        return <div>Default Component</div>;
    }
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
        <DialogBody>{renderContent()}</DialogBody>
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
