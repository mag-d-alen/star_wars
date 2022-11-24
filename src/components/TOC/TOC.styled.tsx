import styled from "styled-components";

export const TOCContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 20rem;
  background-color: #ffffff61;
  gap: 1rem;
  padding: 0 1rem;
  @media (max-width: 842px) {
    align-items: center;
    gap: 0.5rem;
    height: fit-content;
    padding-bottom: 1rem;
    min-width: 15rem;
  }
`;
export const Button = styled.button`
  padding: 1rem;
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.2));
  border-radius: 0.5rem;
  border: none;
  max-width: 100%;
  background-color: #ffffff74;
  text-transform:uppercase;
  :hover {
    background-color: #70809063;
    color:white;
  }
  @media (max-width: 842px) {
    width: 70%;
  }
  @media (max-width: 842px) {
    width: 70%;
  }
`;
