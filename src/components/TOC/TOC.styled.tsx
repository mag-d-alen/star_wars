import styled from "styled-components";

export const TOCContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20rem;
  background-color: rgba(255, 255, 255, 0.7);
  gap: 1rem;
  padding: 1.5rem;
  min-height: 100%;
  height: 100vh;

  @media (max-width: 842px) {
    align-items: center;
    gap: 0.5rem;
    height: fit-content;
    min-height: fit-content;
    min-width: 15rem;
    padding: 1rem;
  }
`;
