import React, { ReactNode } from "react";
import { HeroContainer } from "./HeroImage.styled";

export const HeroImage: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <HeroContainer>{children}</HeroContainer>;
};
