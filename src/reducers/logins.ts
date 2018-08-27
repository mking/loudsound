import { LoginsState } from "../types/logins";
import produce from "immer";
import { LoginsActionType } from "../constants/logins";
import { SongifyAction } from "../types/songify";

const initialState: LoginsState = {};

export default function categories(
  state: LoginsState = initialState,
  action: SongifyAction
) {
  switch (action.type) {
    case LoginsActionType.UPDATE_TOKEN: {
      return produce(state, draft => {
        draft.token = action.token;
      });
    }

    case LoginsActionType.INVALIDATE_TOKEN: {
      return produce(state, draft => {
        draft.token = null;
      });
    }

    default: {
      return state;
    }
  }
}
