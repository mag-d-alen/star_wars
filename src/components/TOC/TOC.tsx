import React from "react";
import { useStateContext } from "../../state/StateContext";
import { FilmType } from "../../types";
import { Button } from "../button/Button";
import { Loader } from "../loader/Loader";
import { TOCContainer } from "./TOC.styled";

export const TOC: React.FC = () => {
  const { setFilmDetails, films } = useStateContext();
  return (
    <TOCContainer>
      {films ? (
        films?.map((film: FilmType) => (
          <Button
            key={film.episode_id}
            clickHandle={() => {
              setFilmDetails(film);
            }}
            width={"100"}
            color={"#ffffff74"}
            text={film.title}
          />
        ))
      ) : (
        <Loader />
      )}
    </TOCContainer>
  );
};
