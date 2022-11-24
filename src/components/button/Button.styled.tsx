import styled from "styled-components";
export const ButtonContainer = styled.button<{ color: string; width: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.2));
  border-radius: 0.5rem;
  border: none;
  max-width: ${({ width }) => ` ${width}%`};
  background-color: ${({ color }) => `${color}`};
  text-transform: uppercase;
  font-weight: 500;

  :hover {
    background-color: #70809063;
    color: white;
  }
  @media (max-width: 842px) {
    width: 70%;
  }
`;
