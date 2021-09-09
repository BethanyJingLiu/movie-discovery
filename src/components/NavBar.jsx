import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/" exact>
        Home
      </NavLink>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/discover">
        Discover
      </NavLink>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/about">
        About
      </NavLink>
    </div>
  );
};

export default NavBar;
