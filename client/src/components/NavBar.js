import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  let activeStyle = {
    color: "green",
  };

  return (
    <>
      <ul id="nav">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Welcome Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/periodictable"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Periodic Table
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/quiz"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Quiz
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
