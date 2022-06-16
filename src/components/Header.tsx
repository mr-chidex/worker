import { LightMode } from "@mui/icons-material";
import { Chip, IconButton } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./Context";
import Logo from "./Logo";

const Header = () => {
  const { state } = useContext(AppContext);

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

          <IconButton>
            <LightMode />
          </IconButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
