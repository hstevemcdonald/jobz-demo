import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <React.Fragment>
      <ul className="Navigation">
        <li>
          <NavLink activeClassName="Navigation active" to="/home">
            Jobz
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="Navigation active" to="/myjobz">
            My Jobz
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="Navigation active" to="/addjob">
            Add Job
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Navigation;
