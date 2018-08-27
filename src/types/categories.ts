import { CategoriesActionType } from "../constants/categories";
import { Category } from "./spotify";

export interface CategoriesState {
  categories?: Category[];
}

export interface FetchCategoriesRequestAction {
  type: CategoriesActionType.FETCH_CATEGORIES_REQUEST;
}

export interface FetchCategoriesSuccessAction {
  type: CategoriesActionType.FETCH_CATEGORIES_SUCCESS;
  categories?: Category[];
}

export interface FetchCategoriesFailureAction {
  type: CategoriesActionType.FETCH_CATEGORIES_FAILURE;
}

export interface InvalidateCategoriesAction {
  type: CategoriesActionType.INVALIDATE_CATEGORIES;
}

export type CategoriesAction =
  | FetchCategoriesRequestAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesFailureAction
  | InvalidateCategoriesAction;
