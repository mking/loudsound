import {
  SongifyAction,
  SongifyThunkAction,
  SongifyThunkDispatch,
  SongifyState
} from "../types/songify";
import { LoginsActionType } from "../constants/logins";

export function updateToken(token: string): SongifyAction {
  return {
    type: LoginsActionType.UPDATE_TOKEN,
    token
  };
}

export function invalidateToken(): SongifyAction {
  return {
    type: LoginsActionType.INVALIDATE_TOKEN
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
      dispatch(invalidateToken());
      history.push("/");
      return;
    }
  };
}
