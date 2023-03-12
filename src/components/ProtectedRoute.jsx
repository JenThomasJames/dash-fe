import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Page from "./Page";
import Section from "./Section";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("token") ? (
    <Page pageStyle="flex flex-col px-7">
      <Navbar />
      <Section>{children}</Section>
    </Page>
  ) : (
    <Navigate to="/login" replace />
  );
};
export default PrivateRoute;
