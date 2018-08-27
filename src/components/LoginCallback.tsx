import * as React from "react";
import { parseQuery } from "../query";
import { Location, History } from "history";
import { updateTokenEverywhere } from "../actions/logins";
import { connect } from "react-redux";

interface LoginCallbackOwnProps {
  location?: Location;
  history?: History;
}

interface LoginCallbackStateProps {}

interface LoginCallbackDispatchProps {
  updateTokenEverywhere?(token: string): void;
}

export type LoginCallbackProps = LoginCallbackOwnProps &
  LoginCallbackStateProps &
  LoginCallbackDispatchProps;

export class LoginCallback extends React.Component<LoginCallbackProps> {
  public componentDidMount() {
    const query = parseQuery(location.hash);
    const queryToken =
      query.access_token == null ? null : (query.access_token as string);
    if (queryToken != null) {
      this.props.updateTokenEverywhere(queryToken);
      this.props.history.push("/categories");
      return;
    }

    this.props.history.push("/");
  }

  public render(): JSX.Element {
    return null;
  }
}

const mapDispatchToProps = {
  updateTokenEverywhere
};

export default connect(
  null,
  mapDispatchToProps
)(LoginCallback);
