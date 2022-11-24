import React from "react";
import { useStateContext } from "../../state/StateContext";
import { Film } from "../film/Film";
import { WelcomeScreen } from "./WelcomeScreen";

export const MainContent: React.FC = () => {
  const { filmDetails, films } = useStateContext();

  return (
    <>
      {filmDetails ? (
        <Film film={filmDetails} />
      ) : films ? (
        <WelcomeScreen />
      ) : null}
    </>
  );
};
