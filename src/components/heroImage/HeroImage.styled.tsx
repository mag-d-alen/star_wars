import styled from "styled-components";
import hero from "./assets/hero.png";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-image: url(${hero});
  background-size: cover;
  backdrop-filter: blur(5px);
  background-repeat: no-repeat;
  background-position: center center;
`;
