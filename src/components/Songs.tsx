import * as classNames from "classnames";
import * as React from "react";
import "./Songs.scss";
import { Grid } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface SongsProps {
  className?: string;
}

export default function Songs({ className }: SongsProps) {
  return (
    <Grid className={classNames("songs", className)}>
      <h1>Here is a list of songs</h1>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </Grid>
  );
}
