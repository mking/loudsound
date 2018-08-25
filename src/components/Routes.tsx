import * as classNames from "classnames";
import * as React from "react";
import "./Routes.scss";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Songs from "./Songs";

export interface RoutesProps {
  className?: string;
}

export default function Routes({ className }: RoutesProps) {
  return (
    <Router history={history}>
      <div className={classNames("routes", className)}>
        <Switch>
          <Route component={Home} exact path="/home" />
          <Route component={Songs} exact path="/songs" />
          <Route component={Login} exact path="/" />
        </Switch>
      </div>
    </Router>
  );
}
