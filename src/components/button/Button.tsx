import React from "react";
import { ButtonContainer } from "./Button.styled";

export const Button: React.FC<{
  text: string;
  width: string;
  color: string;
  clickHandle: Function;
  key?: number;
}> = ({ key, text, width, color, clickHandle }) => {
  return (
    <ButtonContainer onClick={() => clickHandle()} color={color} width={width}>
      {text}
    </ButtonContainer>
  );
};
