import { CategoriesState } from "../types/categories";
import produce from "immer";
import { CategoriesActionType } from "../constants/categories";
import { SongifyAction } from "../types/songify";

const initialState: CategoriesState = {};

export default function categories(
  state: CategoriesState = initialState,
  action: SongifyAction
) {
  switch (action.type) {
    case CategoriesActionType.FETCH_CATEGORIES_SUCCESS: {
      return produce(state, draft => {
        draft.categories = action.categories;
      });
    }

    case CategoriesActionType.INVALIDATE_CATEGORIES: {
      return produce(state, draft => {
        draft.categories = [];
      });
    }

    default: {
      return state;
    }
  }
}
