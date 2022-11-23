import { useState, useEffect } from "react";
import { FilmType } from "../types";
const url = "https://swapi.dev/api/films";

export const useGetFilmsData = () => {
  const [films, setFilms] = useState<FilmType[] | null>(null);
  useEffect(() => {
    const getFilms = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        const filmsInfo = data.results;
        setFilms(filmsInfo);
      } catch (error) {
        console.log(error);
      }
    };
    getFilms();
  }, []);
  return films;
};
