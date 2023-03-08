import { Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import RegisterPage from "./pages/RegisterPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c084fc",
      contrastText: "#f3e8ff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontSize: "18px",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
