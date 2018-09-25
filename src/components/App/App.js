import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../common/Navigation/Navigation";
import Error404 from "../common/Error404/Error404";
import Jobz from "../../containers/Jobz/Jobz";
import MyJobz from "../../containers/MyJobz/MyJobz";
import AddJob from "../../containers/AddJob/AddJob";
import "./App.css";

const App = props => {
  return (
    <div className="App container">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Jobz} />
        <Route exact path="/myjobz" component={MyJobz} />
        <Route exact path="/addjob" component={AddJob} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
};

export default App;
