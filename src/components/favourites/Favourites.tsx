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
      {favourites && films ? (
        <div>
          <FavouritesHeader>Your favourite movies: </FavouritesHeader>
          {favourites.map((f: FilmType) => (
            <FavouritesTitle key={f.episode_id}>{f.title}</FavouritesTitle>
          ))}
        </div>
      ) : (
      null
      )}
    </FavouritesContainer>
  );
};
