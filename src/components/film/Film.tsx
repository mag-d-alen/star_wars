import React, { useEffect, useState } from "react";
import { setConstantValue } from "typescript";
import { useStateContext } from "../../state/StateContext";
import { FilmType } from "../../types";
import { Button } from "../button/Button";

import {
  ButtonContainer,
  FilmCrawl,
  FilmInfoContainer,
  FilmTitle,
  ReleaseDate,
} from "./Film.styled";

export const Film: React.FC<{ film: FilmType }> = ({ film }) => {
  const { title, release_date, opening_crawl } = film;
  const { setFavourites, favourites } = useStateContext();
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    setLiked(favourites.some((f) => film.title === f.title));
  }, [film, favourites]);

  const removeFromFavourites = () => {
    const updatedFavourites = favourites.filter((f) => f.title != film.title);
    setFavourites(updatedFavourites);
  };
  const addToFavourites = () => {
    setFavourites((prev: FilmType[]) => [...prev, film]);
  };

  return (
    <FilmInfoContainer>
      <FilmTitle>{title}</FilmTitle>
      <ReleaseDate> Released in {release_date.slice(0, 4)}</ReleaseDate>
      <FilmCrawl>{opening_crawl}</FilmCrawl>
      <ButtonContainer>
        {liked ? (
          <Button
            width={"30"}
            color={"#f04c4ce3"}
            clickHandle={removeFromFavourites}
            text={"   Remove from favourites"}
          />
        ) : (
          <Button
            width={"30"}
            color={"#f04c4ce3"}
            clickHandle={addToFavourites}
            text={"Add to Favourites"}
          />
        )}
      </ButtonContainer>
    </FilmInfoContainer>
  );
};
