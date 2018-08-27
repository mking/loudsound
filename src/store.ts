import { createStore as createStoreOrig, applyMiddleware } from "redux";
import { SongifyExtraArgument } from "./types/songify";
import songify from "./reducers/songify";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { History } from "history";

export function createStore(history: History) {
  const extraArgument: SongifyExtraArgument = {
    history
  };
  const enhancer = composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(extraArgument))
  );
  return createStoreOrig(songify, undefined, enhancer);
}
