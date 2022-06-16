import { LightMode } from "@mui/icons-material";
import { Chip, IconButton } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CHANGETHEME } from "../utils/constants";
import { AppContext } from "./Context";
import Logo from "./Logo";

const Header = () => {
  const { state, dispatch } = useContext(AppContext);
  const changeTheme = (type: string) => {
    dispatch({ type: CHANGETHEME, payload: type });
  };

  return (
    <header>
      <nav>
        <Logo />

        <div>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/orders"
          >
            <div className="order">
              Order
              <Chip label={state.orders.length} component="a" clickable />
            </div>
          </NavLink>
          {state.theme === "dark" ? (
            <IconButton onClick={() => changeTheme("light")}>
              <LightMode sx={{ color: "#fff" }} />
            </IconButton>
          ) : (
            <IconButton onClick={() => changeTheme("dark")}>
              <LightMode sx={{ color: "#111" }} />
            </IconButton>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
