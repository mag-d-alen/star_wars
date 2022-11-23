import React from "react";
import { FilmType } from "../../types";


export const Film: React.FC<{ film: FilmType }> = ({ film }) => {
  const { opening_crawl } = film;
  return <>{opening_crawl ? <div>{opening_crawl}</div> : null}</>;
};
