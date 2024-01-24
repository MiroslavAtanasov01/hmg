import { TFavorites } from "../types";

type TFavoritesMap = { [key: string]: TFavorites };
type TFavoritesDelete = Omit<TFavorites, "name">;

const FAVORITES_ID = "swFavourites";

export const getFavourites = () =>
  JSON.parse(localStorage.getItem(FAVORITES_ID) || "null");

export const setFavourite = ({
  id,
  name,
  resource,
}: TFavorites): TFavoritesMap => {
  const favs = getFavourites();
  const newFavs = favs ? { ...favs } : {};

  newFavs[`${resource}${id}`] = { id, name, resource };

  localStorage.setItem(FAVORITES_ID, JSON.stringify(newFavs));

  return newFavs;
};

export const deleteFavourite = ({
  id,
  resource,
}: TFavoritesDelete): TFavoritesMap => {
  const favs = getFavourites();
  const newFavs = favs ? { ...favs } : {};

  delete newFavs[`${resource}${id}`];

  localStorage.setItem(FAVORITES_ID, JSON.stringify(newFavs));

  return newFavs;
};
