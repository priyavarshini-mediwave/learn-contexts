import React, { createContext, useState } from "react";

const ThemeContext = createContext(undefined);
const ThemeDispatchContext = createContext(undefined);
const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    value: "light",
    browser: "firefox",
  });

  // A "provider" is used to encapsulate only the
  // components that needs the state in this context
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    image: "",
  });

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export {
  ThemeProvider,
  ThemeContext,
  ThemeDispatchContext,
  UserProvider,
  UserContext,
  UserDispatchContext,
};
