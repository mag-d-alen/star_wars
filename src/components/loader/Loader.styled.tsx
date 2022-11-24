import styled from "styled-components";
export const LoaderContainer = styled.p`
  margin-top: -1rem;
  color: black;
  font-size: 10rem;
  opacity: 0;
  animation: loader 60s infinite;
  @media (max-width: 820px) {
    margin-top: 0;
  }
  @keyframes loader {
    1% {
      transform: scale(1);
      opacity: 0.1;
    }
    100% {
      transform: scale(0.1);
      opacity: 1;
    }
  }
`;
