import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default Navigation;
