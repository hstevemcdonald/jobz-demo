import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../common/Navigation/Navigation";
import Error404 from "../common/Error404/Error404";
import Jobz from "../../containers/Jobz/Jobz";
import MyJobz from "../../containers/MyJobz/MyJobz";
import AddJob from "../../containers/AddJob/AddJob";
import "./App.css";

const App = props => {
  return (
    <div className="App container">
      <div className="App content">
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect from="/" to="home" />;
            }}
          />
          <Route exact path="/home" component={Jobz} />
          <Route exact path="/myjobz" component={MyJobz} />
          <Route exact path="/addjob" component={AddJob} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
