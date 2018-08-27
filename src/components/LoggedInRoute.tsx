import { Route, RouteProps, Redirect } from "react-router-dom";
import * as React from "react";
import { connect } from "react-redux";
import { SongifyState, SongifyDispatchProp } from "../types/songify";

interface LoggedInRouteOwnProps extends RouteProps {}

interface LoggedInRouteStateProps {
  token?: string;
  checkedToken?: boolean;
}

interface LoggedInRouteDispatchProps {}

export type LoggedInRouteProps = LoggedInRouteOwnProps &
  LoggedInRouteStateProps &
  LoggedInRouteDispatchProps &
  SongifyDispatchProp;

export function LoggedInRoute({
  checkedToken,
  token,
  dispatch,
  ...props
}: LoggedInRouteProps) {
  if (!checkedToken) return null;

  if (token == null) return <Redirect to="/" />;

  return <Route {...props} />;
}

const mapStateToProps = (
  state: SongifyState,
  ownProps: LoggedInRouteOwnProps
): LoggedInRouteStateProps => ({
  token: state.logins.token,
  checkedToken: state.logins.checkedToken
});

export default connect(mapStateToProps)(LoggedInRoute);
