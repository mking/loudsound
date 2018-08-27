import { LoginsState } from "../types/logins";
import produce from "immer";
import { LoginsActionType } from "../constants/logins";
import { SongifyAction } from "../types/songify";

const initialState: LoginsState = {
  checkedToken: false
};

export default function logins(
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

    case LoginsActionType.UPDATE_CHECKED_TOKEN: {
      return produce(state, draft => {
        draft.checkedToken = action.checkedToken;
      });
    }

    default: {
      return state;
    }
  }
}
