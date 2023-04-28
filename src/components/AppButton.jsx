import React from "react";
import { Button } from "@mui/material";
const AppButton = ({
  children,
  variant = "contained",
  type = "button",
  onClick,
  icon,
}) => {
  return (
    <Button
      onClick={onClick}
      color="primary"
      variant={variant}
      disableElevation
      type={type}
      startIcon={icon ? icon : null}
    >
      {children}
    </Button>
  );
};

export default AppButton;
