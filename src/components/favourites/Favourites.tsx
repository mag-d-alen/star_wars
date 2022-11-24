import React from "react";
import { useStateContext } from "../../state/StateContext";
import { FilmType } from "../../types";
import {
  FavouritesContainer,
  FavouritesHeader,
  FavouritesTitle,
} from "./Favourites.styled";

export const Favourites: React.FC = () => {
  const { favourites, films } = useStateContext();
  return (
    <FavouritesContainer>
      {films ? (
        <>
          <FavouritesHeader>Your favourite movies </FavouritesHeader>
          {favourites.length ? (
            favourites.map((f: FilmType) => (
              <FavouritesTitle key={f.episode_id}>{f.title}</FavouritesTitle>
            ))
          ) : (
            <FavouritesTitle>...will appear here</FavouritesTitle>
          )}
        </>
      ) : null}
    </FavouritesContainer>
  );
};
