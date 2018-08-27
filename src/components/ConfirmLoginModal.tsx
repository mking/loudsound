import * as React from "react";
import * as classNames from "classnames";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  ControlLabel,
  Radio
} from "react-bootstrap";
import "./ConfirmLoginModal.scss";
import { Reaction, Artist } from "../types/artists";
import produce from "immer";

export interface ConfirmLoginModalProps {
  className?: string;
  show?: boolean;
  onHide?(): void;
  continueHref?: string;
}

export interface ConfirmLoginModalState {
  reactions?: { [k: string]: Reaction };
  artists?: Artist[];
}

const initialState: ConfirmLoginModalState = {
  reactions: {
    "Travis Scott": Reaction.Love,
    "Bebe Rexha": Reaction.Love
  },
  artists: [
    {
      name: "Travis Scott"
    },
    {
      name: "Bebe Rexha"
    }
  ]
};

export default class ConfirmLoginModal extends React.Component<
  ConfirmLoginModalProps,
  ConfirmLoginModalState
> {
  constructor(props: ConfirmLoginModalProps) {
    super(props);

    this.state = initialState;
  }

  private handleContinue = (e: React.MouseEvent<Button>) => {
    e.preventDefault();

    // TODO(mking): Redirect to the Spotify auth flow.
    // history.push(this.props.continueHref!);
  };

  private handleReactionChange = (name: string, reaction: Reaction) => {
    this.setState(
      produce(this.state, draft => {
        draft.reactions[name] = reaction;
      })
    );
  };

  private handleHide = () => {
    this.props.onHide!();
  };

  private handleShow = () => {
    this.setState(initialState);
  };

  public render() {
    return (
      <Modal
        className={classNames("confirm-login-modal", this.props.className)}
        onHide={this.handleHide}
        onShow={this.handleShow}
        show={this.props.show}
      >
        <Modal.Header>
          <Modal.Title>Log into Spotify</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Interests</h4>
          <Form>
            {this.state.artists.map(artist => this.renderArtist(artist))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsStyle="default"
            bsSize="large"
            type="button"
            onClick={this.props.onHide}
          >
            Cancel
          </Button>
          <Button
            bsStyle="danger"
            bsSize="large"
            type="submit"
            onClick={this.handleContinue}
          >
            Show me similar music
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  private renderArtist = (artist: Artist) => {
    return (
      <FormGroup key={artist.name}>
        <ControlLabel>
          How do you feel about <strong>{artist.name}</strong>?
        </ControlLabel>
        <Radio
          name={`reaction-${artist.name}`}
          checked={this.state.reactions[artist.name] === Reaction.Love}
          onChange={() => this.handleReactionChange(artist.name, Reaction.Love)}
        >
          Love them
        </Radio>
        <Radio
          name={`reaction-${artist.name}`}
          checked={this.state.reactions[artist.name] === Reaction.Hate}
          onChange={() => this.handleReactionChange(artist.name, Reaction.Hate)}
        >
          Hate them
        </Radio>
        <Radio
          name={`reaction-${artist.name}`}
          checked={this.state.reactions[artist.name] === Reaction.DontKnow}
          onChange={() =>
            this.handleReactionChange(artist.name, Reaction.DontKnow)
          }
        >
          Who is that?
        </Radio>
      </FormGroup>
    );
  };
}
