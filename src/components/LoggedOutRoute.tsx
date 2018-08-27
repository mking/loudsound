import { Route, RouteProps, Redirect } from "react-router-dom";
import * as React from "react";
import { connect } from "react-redux";
import { SongifyState, SongifyDispatchProp } from "../types/songify";

interface LoggedOutRouteOwnProps extends RouteProps {}

interface LoggedOutRouteStateProps {
  token?: string;
  checkedToken?: boolean;
}

interface LoggedOutRouteDispatchProps {}

export type LoggedOutRouteProps = LoggedOutRouteOwnProps &
  LoggedOutRouteStateProps &
  LoggedOutRouteDispatchProps &
  SongifyDispatchProp;

export function LoggedOutRoute({
  checkedToken,
  token,
  dispatch,
  ...props
}: LoggedOutRouteProps) {
  if (!checkedToken) return null;

  if (token != null) return <Redirect to="/categories" />;

  return <Route {...props} />;
}

const mapStateToProps = (
  state: SongifyState,
  ownProps: LoggedOutRouteOwnProps
): LoggedOutRouteStateProps => ({
  token: state.logins.token,
  checkedToken: state.logins.checkedToken
});

export default connect(mapStateToProps)(LoggedOutRoute);
