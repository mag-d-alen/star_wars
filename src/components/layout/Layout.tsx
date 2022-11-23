import { chown } from "fs";
import React, { ReactNode } from "react";
import { LayoutContainer } from "./Layout.styled";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};
