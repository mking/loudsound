import { ProfilesState } from "../types/profiles";
import { ProfilesActionType } from "../constants/profiles";
import produce from "immer";
import { SongifyAction } from "../types/songify";

const initialState: ProfilesState = {};

export default function categories(
  state: ProfilesState = initialState,
  action: SongifyAction
) {
  switch (action.type) {
    case ProfilesActionType.FETCH_PROFILE_SUCCESS: {
      return produce(state, draft => {
        draft.profile = action.profile;
      });
    }

    case ProfilesActionType.INVALIDATE_PROFILE: {
      return produce(state, draft => {
        draft.profile = null;
      });
    }

    default: {
      return state;
    }
  }
}
