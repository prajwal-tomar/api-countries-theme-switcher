import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen w-full font-nunito bg-very-light-gray-bg dark:bg-very-dark-blue-bg">
      <Navbar theme={theme} setTheme={setTheme} />
      <Outlet context={[responseData, setResponseData]} />
    </div>
  );
};

export default App;
