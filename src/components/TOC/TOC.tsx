import React, { useContext } from "react";
import { useGetFilmsData } from "../../hooks/useGetFilmsData";
import { useStateContext } from "../../state/StateContext";
import { FilmType } from "../../types";
import { Loader } from "../loader/Loader";
import { Button, TOCContainer } from "./TOC.styled";

export const TOC: React.FC = () => {
  const films = useGetFilmsData();
  const { setFilmDetails } = useStateContext();
  return (
    <TOCContainer>
      {films ? (
        films?.map((film: FilmType) => (
          <Button
            key={film.episode_id}
            onClick={() => {
              setFilmDetails(film);
            }}>
            {film.title}
          </Button>
        ))
      ) : (
        <Loader />
      )}
    </TOCContainer>
  );
};
