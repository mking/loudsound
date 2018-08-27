import { ProfilesActionType } from "../constants/profiles";
import { Profile } from "./spotify";

export interface ProfilesState {
  profile?: Profile;
}

export interface FetchProfileRequestAction {
  type: ProfilesActionType.FETCH_PROFILE_REQUEST;
}

export interface FetchProfileSuccessAction {
  type: ProfilesActionType.FETCH_PROFILE_SUCCESS;
  profile?: Profile;
}

export interface FetchProfileFailureAction {
  type: ProfilesActionType.FETCH_PROFILE_FAILURE;
}

export interface InvalidateProfileAction {
  type: ProfilesActionType.INVALIDATE_PROFILE;
}

export type ProfilesAction =
  | FetchProfileRequestAction
  | FetchProfileSuccessAction
  | FetchProfileFailureAction
  | InvalidateProfileAction;
