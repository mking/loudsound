import axios from "axios";
import { SPOTIFY_API_HOST } from "../constants/songify";
import { Category } from "../types/spotify";
import {
  SongifyThunkAction,
  SongifyThunkDispatch,
  SongifyAction
} from "../types/songify";
import { CategoriesActionType } from "../constants/categories";
import { requireToken, handleError } from "./logins";

export function parseCategory(item: any): Category {
  return {
    id: item.id,
    name: item.name,
    icon: item.icons[0]
  };
}

export function fetchCategories(): SongifyThunkAction<void> {
  return async (dispatch: SongifyThunkDispatch) => {
    const token = await dispatch(requireToken());
    if (token == null) return;

    try {
      dispatch({
        type: CategoriesActionType.FETCH_CATEGORIES_REQUEST
      });
      const response = await axios.get(
        `${SPOTIFY_API_HOST}/v1/browse/categories`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
          },
          params: {
            limit: 10,
            country: "US"
          }
        }
      );
      const categories: Category[] = response.data.categories.items.map(
        (item: any) => parseCategory(item)
      );
      dispatch({
        type: CategoriesActionType.FETCH_CATEGORIES_SUCCESS,
        categories
      });
    } catch (e) {
      dispatch({
        type: CategoriesActionType.FETCH_CATEGORIES_FAILURE
      });
      await dispatch(handleError(e));
    }
  };
}

export function invalidateCategories(): SongifyAction {
  return {
    type: CategoriesActionType.INVALIDATE_CATEGORIES
  };
}
