import { LoginsActionType } from "../constants/logins";

export interface LoginsState {
  token?: string;
  checkedToken?: boolean;
}

export interface UpdateTokenAction {
  type: LoginsActionType.UPDATE_TOKEN;
  token?: string;
}

export interface InvalidateTokenAction {
  type: LoginsActionType.INVALIDATE_TOKEN;
}

export interface UpdateCheckedTokenAction {
  type: LoginsActionType.UPDATE_CHECKED_TOKEN;
  checkedToken?: boolean;
}

export type LoginsAction =
  | UpdateTokenAction
  | InvalidateTokenAction
  | UpdateCheckedTokenAction;
