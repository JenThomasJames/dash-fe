import { useState } from "react";
import { TextField } from "@mui/material";

import useInput from "../hooks/use-input";

import { createUser } from "../utils/api-calls";
import { isEmpty } from "../utils/validator";

import Page from "../components/Page";
import AppButton from "../components/AppButton";
import Toast from "../components/Toast";
import { useNavigate } from "react-router-dom";
import BackdropSpinner from "../components/spinner/BackdropSpinner";

const RegisterPage = () => {
  const [passwordError, setPasswordError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const {
    enteredValue: enteredFirstname,
    errorText: firstnameErrorText,
    isInputInvalid: isFirstnameInvalid,
    onBlurHandler: firstnameBlurHandler,
    onChangeHandler: firstnameChangeHandler,
  } = useInput(isEmpty);

  const {
    enteredValue: enteredLastname,
    errorText: lastnameErrorText,
    isInputInvalid: isLastnameInvalid,
    onBlurHandler: lastnameBlurHandler,
    onChangeHandler: lastnameChangeHandler,
  } = useInput(isEmpty);

  const {
    enteredValue: enteredEmail,
    errorText: emailErrorText,
    isInputInvalid: isEmailInvalid,
    onBlurHandler: emailBlurHandler,
    onChangeHandler: emailChangeHandler,
  } = useInput(isEmpty);

  const {
    enteredValue: enteredPassword,
    errorText: passwordErrorText,
    isInputInvalid: isPasswordInvalid,
    onBlurHandler: passwordBlurHandler,
    onChangeHandler: passwordChangeHandler,
  } = useInput(isEmpty);

  const {
    enteredValue: enteredConfirmPassword,
    errorText: confirmPasswordErrorText,
    isInputInvalid: isConfirmPasswordInvalid,
    onBlurHandler: confirmPasswordBlurHandler,
    onChangeHandler: confirmPasswordChangeHandler,
  } = useInput(isEmpty);

  const doesPasswordsMatch = () => {
    return enteredPassword === enteredConfirmPassword;
  };

  const isPasswordStrong = () => {
    if (enteredPassword.length > 5) {
      return true;
    }
    return false;
  };

  const createNewUser = async () => {
    setIsLoading(true);
    const newUser = {
      email: enteredEmail,
      username: enteredFirstname + " " + enteredLastname,
      password: enteredPassword,
      name: {
        firstname: enteredFirstname,
        lastname: enteredLastname,
      },
    };
    try {
      await createUser(newUser);
      navigate("/login");
    } catch (error) {
      setShowToast(true);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const registerHandler = (event) => {
    event.preventDefault();
    if (!doesPasswordsMatch()) {
      setPasswordError("The entered passwords does not match!");
    } else if (!isPasswordStrong()) {
      setPasswordError("Your password should contain atleast 6 charecters.");
    } else {
      setPasswordError("");
      createNewUser();
    }
  };
  return (
    <Page>
      <BackdropSpinner isLoading={isLoading} />
      <Toast open={showToast} setOpen={setShowToast}>
        Something went wrong
      </Toast>
      <div className="flex-1 flex flex-col gap-5 justify-center items-center">
        <h1 className="font-semibold text-3xl text-slate-500">
          Create your account
        </h1>
        <form className="flex flex-col gap-3" onSubmit={registerHandler}>
          <div className="flex gap-2">
            <TextField
              required
              error={isFirstnameInvalid}
              helperText={isFirstnameInvalid && firstnameErrorText}
              value={enteredFirstname}
              onChange={firstnameChangeHandler}
              onBlur={firstnameBlurHandler}
              id="firstname"
              label="First Name"
              variant="outlined"
            />
            <TextField
              required
              error={isLastnameInvalid}
              helperText={isLastnameInvalid && lastnameErrorText}
              value={enteredLastname}
              onChange={lastnameChangeHandler}
              onBlur={lastnameBlurHandler}
              id="lastname"
              label="Last Name"
              variant="outlined"
            />
          </div>
          <TextField
            required
            error={isEmailInvalid}
            helperText={isEmailInvalid && emailErrorText}
            id="email"
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            label="Email"
            variant="outlined"
          />
          <div className="flex gap-2">
            <TextField
              required
              error={isPasswordInvalid}
              helperText={isPasswordInvalid && passwordErrorText}
              id="password"
              type="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              label="Password"
              variant="outlined"
            />
            <TextField
              required
              error={isConfirmPasswordInvalid}
              helperText={isConfirmPasswordInvalid && confirmPasswordErrorText}
              id="confirmPassword"
              type="password"
              value={enteredConfirmPassword}
              onChange={confirmPasswordChangeHandler}
              onBlur={confirmPasswordBlurHandler}
              label="Confirm Password"
              variant="outlined"
            />
          </div>
          {passwordError !== "" && (
            <p className="text-sm text-red-500">{passwordError}</p>
          )}
          <AppButton type="submit">Register</AppButton>
        </form>
      </div>
      <div className="flex-1 bg-purple-500 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-bold text-7xl">
            Shop smarter, <br /> faster and <br /> easier with Dash.
          </h1>
          <p className="text-slate-200 text-lg">
            Join us today to enjoy unlimited benefits on online shopping that
            you never experienced before
          </p>
        </div>
      </div>
    </Page>
  );
};

export default RegisterPage;
