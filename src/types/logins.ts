import { LoginsActionType } from "../constants/logins";

export interface LoginsState {
  token?: string;
}

export interface UpdateTokenAction {
  type: LoginsActionType.UPDATE_TOKEN;
  token?: string;
}

export interface InvalidateTokenAction {
  type: LoginsActionType.INVALIDATE_TOKEN;
}

export type LoginsAction = UpdateTokenAction | InvalidateTokenAction;
