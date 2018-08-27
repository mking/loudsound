import * as classNames from "classnames";
import * as React from "react";
import "./Routes.scss";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import LoginCallback from "./LoginCallback";
import Songs from "./Songs";
import { History } from "history";

export interface RoutesProps {
  className?: string;
  history?: History;
}

export default function Routes({ className, history }: RoutesProps) {
  return (
    <Router history={history}>
      <div className={classNames("routes", className)}>
        <Switch>
          <Route component={Home} exact path="/home" />
          <Route component={Songs} exact path="/songs" />
          <Route component={Login} exact path="/" />
          <Route component={LoginCallback} exact path="/callback" />
        </Switch>
      </div>
    </Router>
  );
}
