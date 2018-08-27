import * as React from "react";
import * as ReactDOM from "react-dom";
import RootProvider from "./components/RootProvider";
import "./polyfills";
import "./styles";
import { createStore } from "./store";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <RootProvider store={store} history={history} />,
  document.getElementById("content")
);
