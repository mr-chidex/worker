import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "active" : undefined)}
      to="/"
    >
      GetWorker
    </NavLink>
  );
};

export default Logo;
