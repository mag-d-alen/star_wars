import React from "react";
import { FilmInfoContainer } from "../film/Film.styled";
import { WelcomeText } from "./MainContent.styled.jsx";

export const WelcomeScreen = () => {
  return (
    <FilmInfoContainer>
      <WelcomeText>Welcome to the Mini Star Wars fandom</WelcomeText>
    </FilmInfoContainer>
  );
};
