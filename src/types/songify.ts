import { ProfilesState, ProfilesAction } from "./profiles";
import { CategoriesState, CategoriesAction } from "./categories";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { LoginsState, LoginsAction } from "./logins";
import { Store } from "redux";
import { History } from "history";

export interface SongifyState {
  profiles?: ProfilesState;
  categories?: CategoriesState;
  logins?: LoginsState;
}

export type SongifyAction = ProfilesAction | CategoriesAction | LoginsAction;

export interface SongifyExtraArgument {
  history?: History;
}

export type SongifyStore = Store<SongifyState, SongifyAction>;

export type SongifyThunkAction<R> = ThunkAction<
  R,
  SongifyState,
  SongifyExtraArgument,
  SongifyAction
>;

export type SongifyThunkDispatch = ThunkDispatch<
  SongifyState,
  SongifyExtraArgument,
  SongifyAction
>;
