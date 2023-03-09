import { Snackbar, Alert } from "@mui/material";

const Toast = ({ children, open, setOpen, severity = "error" }) => {
  const handleClose = () => {
    setOpen({
      show: false,
      message: "",
      severity: "error",
    });
  };
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
