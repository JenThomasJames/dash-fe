import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

import { authenticateUser } from "../utils/api-calls";

import BackdropSpinner from "../components/spinner/BackdropSpinner";
import Page from "../components/Page";
import AppButton from "../components/AppButton";
import Toast from "../components/Toast";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    severity: "error",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    if (email === "" || password === "") return;
    loginUser();
  };

  const loginUser = async () => {
    setIsLoading(true);
    const credentials = {
      username: email,
      password,
    };
    try {
      const response = await authenticateUser(credentials);
      setToast({
        show: true,
        message: "Successfully authenticated",
        severity: "success",
      });
    } catch (error) {
      if (error.response.status === 500) {
        setToast({
          show: true,
          message: "Internal Server Error",
          severity: "error",
        });
      }
      if (error.response.status === 401) {
        setToast({
          show: true,
          message: "Invalid credentials",
          severity: "error",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibilityHandler = () => {
    setShowPassword(() => {
      return !showPassword;
    });
  };

  return (
    <Page>
      <BackdropSpinner isLoading={isLoading} />
      <Toast open={toast.show} setOpen={setToast} severity={toast.severity}>
        {toast.message}
      </Toast>
      <div className="flex-1 bg-purple-500 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-bold text-7xl">
            Your shopping cart is <br /> waiting for you
          </h1>
          <p className="text-slate-200 text-lg">
            Login and join the shopping frenzy!
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5 justify-center items-center">
        <h1 className="font-semibold text-3xl text-slate-500">Welcome back!</h1>
        <form className="flex flex-col gap-3 w-1/2" onSubmit={loginHandler}>
          <TextField
            value={email}
            onChange={emailChangeHandler}
            id="email"
            label="Email"
            variant="outlined"
            type="email"
          />
          <TextField
            value={password}
            onChange={passwordChangeHandler}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibilityHandler}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="password"
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
          />
          <div className="min-w-full flex justify-end">
            <AppButton variant="text">Forgot Password</AppButton>
          </div>
          <AppButton onClick={loginHandler} type="submit">
            Login
          </AppButton>
        </form>
        <div className="flex items-center">
          <p>New here? Let's </p>{" "}
          <AppButton
            onClick={() => {
              navigate("/register");
            }}
            variant="text"
          >
            Signup
          </AppButton>
        </div>
      </div>
    </Page>
  );
};

export default LoginPage;
