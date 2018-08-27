import * as classNames from "classnames";
import * as React from "react";
import "./Login.scss";
import { Grid, Button } from "react-bootstrap";
import { SONGIFY_AUTHORIZE_URL } from "../constants/songify";

export interface LoginProps {
  className?: string;
}

export default class Login extends React.Component<LoginProps> {
  private handleLoginClick = (e: React.MouseEvent<Button>) => {
    e.preventDefault();
    window.location.href = SONGIFY_AUTHORIZE_URL;
  };

  public render() {
    return (
      <Grid className={classNames("login", this.props.className)}>
        <h1>Welcome to Songify!</h1>
        <p>
          Songify shows you new music and artists related to your interests.
        </p>
        <p>Please grant access your Spotify account.</p>
        <div>
          <Button
            bsStyle="danger"
            bsSize="large"
            type="button"
            onClick={this.handleLoginClick}
          >
            Authorize Spotify
          </Button>
        </div>
      </Grid>
    );
  }
}
