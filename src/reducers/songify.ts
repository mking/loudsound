import { combineReducers } from "redux";
import categories from "./categories";
import profiles from "./profiles";
import { SongifyState, SongifyAction } from "../types/songify";
import logins from "./logins";

export default combineReducers<SongifyState, SongifyAction>({
  categories,
  profiles,
  logins
});
