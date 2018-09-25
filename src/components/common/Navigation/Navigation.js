import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Jobz</Link>
        </li>
        <li>
          <Link to="/myjobz">My Jobz</Link>
        </li>
        <li>
          <Link to="/addjob">Add Job</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
