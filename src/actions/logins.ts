import {
  SongifyAction,
  SongifyThunkAction,
  SongifyThunkDispatch,
  SongifyState
} from "../types/songify";
import { LoginsActionType } from "../constants/logins";
import { setToken, getToken, removeToken } from "../storage";

export function updateToken(token: string): SongifyAction {
  return {
    type: LoginsActionType.UPDATE_TOKEN,
    token
  };
}

export function updateTokenEverywhere(token: string): SongifyThunkAction<void> {
  return (dispatch: SongifyThunkDispatch) => {
    dispatch(updateToken(token));
    setToken(token);
  };
}

export function updateCheckedToken(checkedToken: boolean): SongifyAction {
  return {
    type: LoginsActionType.UPDATE_CHECKED_TOKEN,
    checkedToken
  };
}

export function checkToken(): SongifyThunkAction<void> {
  return (dispatch: SongifyThunkDispatch) => {
    const token = getToken();
    if (token != null) dispatch(updateToken(token));

    dispatch(updateCheckedToken(true));
  };
}

export function invalidateToken(): SongifyAction {
  return {
    type: LoginsActionType.INVALIDATE_TOKEN
  };
}

export function invalidateTokenEverywhere(): SongifyThunkAction<void> {
  return (dispatch: SongifyThunkDispatch) => {
    dispatch(invalidateToken());
    removeToken();
  };
}

export function requireToken(): SongifyThunkAction<string> {
  return (
    dispatch: SongifyThunkDispatch,
    getState: () => SongifyState,
    { history }
  ) => {
    const token = getState().logins.token;
    if (token == null) {
      history.push("/");
      return null;
    }
    return token;
  };
}

export function handleError(e: any): SongifyThunkAction<void> {
  return (
    dispatch: SongifyThunkDispatch,
    getState: () => SongifyState,
    { history }
  ) => {
    if (e.response != null && e.response.status === 401) {
      dispatch(logout());
      return;
    }
  };
}

export function logout(): SongifyThunkAction<void> {
  return (
    dispatch: SongifyThunkDispatch,
    getState: () => SongifyState,
    { history }
  ) => {
    dispatch(invalidateTokenEverywhere());
    history.push("/");
  };
}
