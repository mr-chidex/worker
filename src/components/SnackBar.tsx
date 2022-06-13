import React, { useEffect, useCallback } from "react";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
  visible?: boolean;
}

export const SnackBar: React.FC<Props> = ({ visible }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  console.log(visible);

  useEffect(() => {
    if (visible) {
      handleClick();
    }
  }, [handleClick, visible]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        sx={{
          width: "300px",
          position: "fixed",
          zIndex: "10000",
          top: 0,
          right: "10px",
        }}
      >
        This is a success message!
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
