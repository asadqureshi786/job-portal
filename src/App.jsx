import { useState } from "react";

// import "./assets/css/style.scss";
import Router from "./routes/router";
import { ThemeProvider } from "./context/ThemeContext";


function App() {
  return (
    <>
      <ThemeProvider>
        <Router/>
      </ThemeProvider>
    </>
  );
}

export default App;
