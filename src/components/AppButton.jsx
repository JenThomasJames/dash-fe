import React from "react";
import { Button } from "@mui/material";
const AppButton = ({
  children,
  variant = "contained",
  type = "button",
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      color="primary"
      variant={variant}
      disableElevation
      type={type}
    >
      {children}
    </Button>
  );
};

export default AppButton;
