import styled from "styled-components";
export const MainContentContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const MainSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
