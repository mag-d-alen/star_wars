import { Favourites } from "./components/favourites/Favourites";
import { Footer } from "./components/footer/Footer";
import { HeroImage } from "./components/heroImage/HeroImage";
import {
  MainContentContainer,
  MainSectionContainer,
} from "./components/layout/Layout.styled";
import { TOC } from "./components/TOC/TOC";
import { MainContent } from "./components/mainContent/MainContent";
import { StateContextProvider } from "./state/StateContext";

function App() {
  return (
    <StateContextProvider>
      <HeroImage>
        <MainContentContainer>
          <TOC />
          <MainSectionContainer>
            <MainContent />
            <Favourites />
            <Footer />
          </MainSectionContainer>
        </MainContentContainer>
      </HeroImage>
    </StateContextProvider>
  );
}

export default App;
