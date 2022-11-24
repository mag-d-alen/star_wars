import React, { useState } from "react";
import { setConstantValue } from "typescript";
import { useStateContext } from "../../state/StateContext";
import { FilmType } from "../../types";
import { FilmInfoContainer } from "./FilmInfoContainer";

export const Film: React.FC<{ film: FilmType }> = ({ film }) => {
  const { title, release_date, opening_crawl } = film;
  const { setFavourites, favourites } = useStateContext();
  const [liked, setLiked] = useState<boolean>(
    favourites.some((f) => film.title === f.title)
  );

  const addToFavourites = (film: FilmType) => {
    if (favourites.length && liked) {
      const updatedFavourites = favourites.filter((f) => f.title != film.title);
      setLiked(false);
      setFavourites(updatedFavourites);
    } else {
      setLiked(true);
      setFavourites((prev: FilmType[]) => [...prev, film]);
    }
  };

  return (
    <FilmInfoContainer>
      <div>{title}</div>
      <div>{release_date}</div>
      <div>{opening_crawl}</div>
      <label>fav</label>
      <button onClick={() => addToFavourites(film)}>
        {liked ? <p> Remove from favourites</p> : <p> Add to favourites</p>}
      </button>
      ;
    </FilmInfoContainer>
  );
};
