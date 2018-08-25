import * as classNames from "classnames";
import { range } from "lodash";
import * as React from "react";
import { Grid, Table } from "react-bootstrap";
import "./Home.scss";

export interface HomeProps {
  className?: string;
}

export default function Home({ className }: HomeProps) {
  return (
    <Grid className={classNames("home", className)}>
      <h1 className="home__heading">
        Popular Songs <i className="fa fa-music" />
      </h1>
      <Table>
        <thead>
          <tr>
            <th>Popularity</th>
            <th>Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {range(10).map(i => (
            <tr key={i}>
              <td>Top {(i + 1) * 5}%</td>
              <td>Song {i}</td>
              <td>3:00</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Grid>
  );
}
