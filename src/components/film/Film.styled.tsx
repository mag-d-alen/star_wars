import styled from "styled-components";

export const FilmInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  flex: 1;
  background-color: #0000004a;
  color: white;
  @media (max-width: 768px) {
    min-height: 15rem;
    width: 100%;
  }
`;
export const FilmTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  font-family: "Poller One", cursive;
`;
export const ReleaseDate = styled.h4`
  padding: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
`;
export const FilmCrawl = styled.p`
  padding: 1.5rem;
  line-height: 1.6rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
