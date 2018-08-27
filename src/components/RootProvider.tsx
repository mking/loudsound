import * as React from "react";
import { SongifyStore } from "../types/songify";
import { Provider } from "react-redux";
import RootLayout from "./RootLayout";
import { History } from "history";

export interface RootProviderProps {
  store?: SongifyStore;
  history?: History;
}

export default function RootProvider({ store, history }: RootProviderProps) {
  return (
    <Provider store={store}>
      <RootLayout history={history} />
    </Provider>
  );
}
