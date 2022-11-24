import React, { useEffect, useState } from "react";
import { Favourites } from "./components/favourites/Favourites";
import { Film } from "./components/film/Film";
import { Header } from "./components/header/Header";
import { Layout } from "./components/layout/Layout";
import { MainContentContainer } from "./components/layout/MainContentContainer";
import { TOC } from "./components/TOC/TOC";
import { WelcomeScreen } from "./components/welcomeScreen/WelcomeScreen";
import { StateContextProvider } from "./state/StateContext";
import { FilmType } from "./types";

function App() {
  return (
    <StateContextProvider>
      <Layout>
        <Header />
        <MainContentContainer>
          <TOC />
          <WelcomeScreen />
        </MainContentContainer>
      <Favourites/>
      </Layout>
    </StateContextProvider>
  );
}

export default App;
