import "@picocss/pico";

import { useState } from "react";

import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/ThemeContext";

import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <IndexPage />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
