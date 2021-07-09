import React from "react";

import "../styles/menu.css";

import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="Link" to="/">
              To Do List
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="Link" to="/inprogress">
              In progress
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="Link" to="/done">
              Done
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
