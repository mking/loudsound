import * as classNames from "classnames";
import * as React from "react";
import "./Login.scss";
import { Grid, Form, Button } from "react-bootstrap";
import ConfirmLoginModal from "./ConfirmLoginModal";

export interface LoginProps {
  className?: string;
}

export interface LoginState {
  showConfirmLogin?: boolean;
}

export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
      showConfirmLogin: false
    };
  }

  private handleSubmit = (e: React.FormEvent<Form>) => {
    e.preventDefault();
    this.setState({ showConfirmLogin: true });
  };

  private handleModalSubmit = (e: React.FormEvent<Form>) => {
    e.preventDefault();
    this.setState({ showConfirmLogin: true });
  };

  private handleModalHide = () => {
    this.setState({ showConfirmLogin: false });
  };

  public render() {
    return (
      <Grid className={classNames("login", this.props.className)}>
        <h1>Welcome to Songify!</h1>
        <p>Songify is a place for discovering new music and new artists.</p>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Button bsStyle="danger" bsSize="large" type="submit">
              Log into Songify
            </Button>
          </div>
        </Form>
        <ConfirmLoginModal
          onHide={this.handleModalHide}
          show={this.state.showConfirmLogin}
          continueHref="/songs"
        />
      </Grid>
    );
  }
}
