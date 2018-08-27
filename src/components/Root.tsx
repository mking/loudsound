import * as React from "react";
import { SongifyStore } from "../types/songify";
import { Provider } from "react-redux";
import Routes from "./Routes";
import { History } from "history";

export interface RootProps {
  store?: SongifyStore;
  history?: History;
}

export default function Root({ store, history }: RootProps) {
  return (
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  );
}
