import React from "react";
import { useGetFilmsData } from "../../hooks/useGetFilmsData";
import { FilmType } from "../../types";
import { TOCContainer } from "./TOCContainer";

export const TOC: React.FC<{ onChooseFilm: (film: FilmType) => void }> = ({
  onChooseFilm,
}) => {
  const films = useGetFilmsData();
  console.log(films);
  return (
    <TOCContainer>
      {films ? (
        films?.map((film) => (
          <button key={film.episode_id} onClick={() => onChooseFilm(film)}>
            {film.title}
          </button>
        ))
      ) : (
        <div>LOADING</div>
      )}
    </TOCContainer>
  );
};
