import React, { useEffect, useState } from "react";
import { useStateContext } from "../../state/StateContext";
import { FilmType } from "../../types";
import { Favourites } from "../favourites/Favourites";
import { Film } from "../film/Film";
import { Footer } from "../footer/Footer";
import { InnerContainer, MainContainer } from "./WelcomeScreen.styled.tsx";

export const WelcomeScreen: React.FC = () => {
  const { filmDetails } = useStateContext();

  return (
    <MainContainer>
      <InnerContainer>
        {filmDetails ? <Film film={filmDetails} /> : null}
        <Favourites />
        <Footer />
      </InnerContainer>
    </MainContainer>
  );
};
