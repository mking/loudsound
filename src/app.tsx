import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./components/Root";
import "./polyfills";
import "./styles";
import { createStore } from "./store";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById("content")
);
