import * as React from "react";
import * as classNames from "classnames";
import { Modal, Button } from "react-bootstrap";
import "./ConfirmLoginModal.scss";
import history from "../history";

export interface ConfirmLoginModalProps {
  className?: string;
  show?: boolean;
  onHide?(): void;
  continueHref?: string;
}

export default class ConfirmLoginModal extends React.Component<
  ConfirmLoginModalProps
> {
  private handleContinue = (e: React.MouseEvent<Button>) => {
    e.preventDefault();
    history.push(this.props.continueHref!);
  };

  public render() {
    return (
      <Modal
        className={classNames("confirm-login-modal", this.props.className)}
        onHide={this.props.onHide!}
        show={this.props.show}
      >
        <Modal.Header>
          <Modal.Title>Log into Spotify</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you fucking sure?</h4>
          <p>Do you really want us to show you the cool shit we found?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsStyle="default"
            bsSize="large"
            type="button"
            onClick={this.props.onHide}
          >
            No, go back
          </Button>
          <Button
            bsStyle="danger"
            bsSize="large"
            type="submit"
            onClick={this.handleContinue}
          >
            Fuck it. Yes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
