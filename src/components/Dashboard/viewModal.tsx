import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function ViewModal({ sbtName }: { sbtName: string }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} color="green" variant="gradient">
        View
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{sbtName}</DialogHeader>

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
