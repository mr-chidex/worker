import { LightMode } from "@mui/icons-material";
import { Chip, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
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
              <Chip label="0" component="a" clickable />
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
