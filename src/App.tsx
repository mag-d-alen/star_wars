import { HeroImage } from "./components/heroImage/HeroImage";
import { MainContentContainer } from "./components/heroImage/MainContentContainer";
import { TOC } from "./components/TOC/TOC";
import { WelcomeScreen } from "./components/welcomeScreen/WelcomeScreen";
import { StateContextProvider } from "./state/StateContext";

function App() {
  return (
    <StateContextProvider>
      <HeroImage>
        <MainContentContainer>
          <TOC />
          <WelcomeScreen />
        </MainContentContainer>
      </HeroImage>
    </StateContextProvider>
  );
}

export default App;
