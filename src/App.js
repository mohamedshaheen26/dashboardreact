import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useState, useEffect, useMemo } from "react";

import Layout from "./layout"; // New Layout component

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Create MUI theme based on darkMode state
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Optional: Clean up by removing class when the component unmounts
    return () => {
      document.body.classList.remove('dark-mode');
    };
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='page d-flex' id='page'>
        <BrowserRouter>
          <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
