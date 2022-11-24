import React, { useEffect, useState } from "react";
import { useStateContext } from "../../state/StateContext";
import { FilmType } from "../../types";
import { Film } from "../film/Film";
import { MainContainer } from "./WelcomeScreen.styled.tsx";

export const WelcomeScreen: React.FC = () => {
  const { favourites, filmDetails } = useStateContext();

  return (
    <MainContainer>
      {filmDetails ? <Film film={filmDetails} /> : null}
    </MainContainer>
  );
};
