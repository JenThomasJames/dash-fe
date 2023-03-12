import React from "react";
import Logo from "../logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="min-w-full py-7 flex justify-between items-center">
      <div className="flex flex-1 items-center gap-2">
        <img width="60" src={Logo} alt="logo" />
        <h1 className="text-xl text-purple-500 font-medium">Dash.io</h1>
      </div>
      <ul className="flex justify-end gap-7 flex-1">
        <li className="text-slate-400 hover:text-purple-500 text-xl font-regular">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="text-slate-400 hover:text-purple-500 text-xl font-regular">
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
