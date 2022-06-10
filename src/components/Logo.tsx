import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <h1>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/"
      >
        GetWorker
      </NavLink>
    </h1>
  );
};

export default Logo;
