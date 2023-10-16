import { useContext } from "react";

import { ThemeDispatchContext } from "../context/ThemeContext";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/ThemeContext";
import { Avatar, Tooltip } from "@mui/material";

const Nav = () => {
  const themeDispatch = useContext(ThemeDispatchContext);
  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);
  console.log(themeDispatch);

  function handleClick(mode) {
    console.log({ value: mode });
    themeDispatch({ value: mode });
  }

  return (
    <nav className="container">
      <ul>
        <li>
          <strong>Context</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Tooltip title={userContext.name}>
            <Avatar src={userContext.image} sx={{ width: 62, height: 62 }} />
          </Tooltip>
        </li>
        <li>
          {themeContext.value === "light" ? (
            <button onClick={() => handleClick("dark")}>Dark</button>
          ) : (
            <button onClick={() => handleClick("light")}>Light</button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
