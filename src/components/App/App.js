import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "../common/Navigation/Navigation";
import Error404 from "../common/Error404/Error404";
import Jobz from "../../containers/Jobz/Jobz";
import MyJobz from "../../containers/MyJobz/MyJobz";
import AddJob from "../../containers/AddJob/AddJob";
import "./App.css";

const App = props => {
  return (
    <html>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <body>
        <Navigation {...props} />
        <Route exact path="/" component={Jobz} />
        <Route exact path="/myjobz" component={MyJobz} />
        <Route exact path="/addjob" component={AddJob} />
        <Route path="/" component={Error404} />
      </body>
    </html>
  );
};

export default App;
