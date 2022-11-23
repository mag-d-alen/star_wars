import React, { useState } from "react";
import { Film } from "./components/film/Film";
import { Header } from "./components/header/Header";
import { Layout } from "./components/layout/Layout";
import { MainContentContainer } from "./components/layout/MainContentContainer";
import { TOC } from "./components/TOC/TOC";
import { WelcomeScreen } from "./components/welcomeScreen/WelcomeScreen";
import { FilmType } from "./types";


function App() {
  const [chosenFilm, setChosenFilm] = useState<FilmType | null>(null);
  return (
    <Layout>
      <Header />
      <MainContentContainer>
        <TOC onChooseFilm={setChosenFilm} />
        {chosenFilm ? <Film film={chosenFilm} /> : <WelcomeScreen />}
      </MainContentContainer>
    </Layout>
  );
}

export default App;
