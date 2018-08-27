import * as classNames from "classnames";
import * as React from "react";
import "./RootLayout.scss";
import { Router, Switch } from "react-router-dom";
import Login from "./Login";
import LoginCallback from "./LoginCallback";
import { History } from "history";
import LoggedInRoute from "./LoggedInRoute";
import LoggedOutRoute from "./LoggedOutRoute";
import { connect } from "react-redux";
import { checkToken } from "../actions/logins";
import Categories from "./Categories";
import Category from "./Category";

interface RootLayoutOwnProps {
  className?: string;
  history?: History;
}

interface RootLayoutStateProps {}

interface RootLayoutDispatchProps {
  checkToken?(): void;
}

export type RootLayoutProps = RootLayoutOwnProps &
  RootLayoutStateProps &
  RootLayoutDispatchProps;

export class RootLayout extends React.Component<RootLayoutProps> {
  public componentDidMount() {
    this.props.checkToken();
  }

  public render() {
    return (
      <Router history={this.props.history}>
        <div className={classNames("root-layout", this.props.className)}>
          <Switch>
            <LoggedInRoute component={Categories} exact path="/categories" />
            <LoggedInRoute
              component={Category}
              exact
              path="/categories/:category"
            />
            <LoggedOutRoute component={Login} exact path="/" />
            <LoggedOutRoute component={LoginCallback} exact path="/callback" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  checkToken
};

export default connect(
  null,
  mapDispatchToProps
)(RootLayout);
