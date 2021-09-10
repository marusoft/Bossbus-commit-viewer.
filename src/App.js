import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Commits from "./components/pages/commits/Commits";
import NotFound from "./components/pages/NotFound/NotFound";
import "./App.css";

const App = () => {

 

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/commits/:owner/:repo" component={Commits} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="404" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
