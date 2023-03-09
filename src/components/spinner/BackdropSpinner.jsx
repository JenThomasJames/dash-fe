import React from "react";
import Backdrop from "../Backdrop";
import Spinner from "./Spinner";

const BackdropSpinner = ({ isLoading }) => {
  return (
    <Backdrop show={isLoading}>
      <Spinner />
    </Backdrop>
  );
};

export default BackdropSpinner;
