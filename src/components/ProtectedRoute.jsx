import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("token") ? (
    <>
      <Navbar />
      {children}
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};
export default PrivateRoute;
