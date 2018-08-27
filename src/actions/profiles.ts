import axios from "axios";
import { SPOTIFY_API_HOST } from "../constants/songify";
import { Profile } from "../types/spotify";
import {
  SongifyThunkAction,
  SongifyThunkDispatch,
  SongifyAction
} from "../types/songify";
import { ProfilesActionType } from "../constants/profiles";
import { requireToken, handleError } from "./logins";

export function fetchProfile(): SongifyThunkAction<void> {
  return async (dispatch: SongifyThunkDispatch) => {
    const token = await dispatch(requireToken());
    if (token == null) return;

    try {
      dispatch({
        type: ProfilesActionType.FETCH_PROFILE_REQUEST
      });
      const response = await axios.get(`${SPOTIFY_API_HOST}/v1/me`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      dispatch({
        type: ProfilesActionType.FETCH_PROFILE_SUCCESS,
        profile: response.data as Profile
      });
    } catch (e) {
      dispatch({
        type: ProfilesActionType.FETCH_PROFILE_FAILURE
      });
      await dispatch(handleError(e));
    }
  };
}

export function invalidateProfile(): SongifyAction {
  return {
    type: ProfilesActionType.INVALIDATE_PROFILE
  };
}
