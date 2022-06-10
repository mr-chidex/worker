import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <nav>
        <Logo />

        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/orders"
            >
              Order
            </NavLink>
          </li>
          <li>Mode</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
