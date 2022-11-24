import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { FilmType, StateContextType } from "../types";

const favJSON = localStorage.getItem("fav");
const defaultState = {
  favourites: favJSON != null ? JSON.parse(favJSON) : [],
  setFavourites: (prev: FilmType[] | []) => {},
  filmDetails: null,
  setFilmDetails: (film: FilmType) => {},
} as StateContextType;

const StateContext = createContext<StateContextType>(defaultState);

export const StateContextProvider = ({ children }: any) => {
  const [filmDetails, setFilmDetails] = useState<FilmType | null>(null);
  const [favourites, setFavourites] = useState<FilmType[] | []>(
    defaultState.favourites
  );

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(favourites));
  }, [favourites]);

  return ( 
    <StateContext.Provider
      value={{
        favourites,
        setFavourites,
        filmDetails,
        setFilmDetails,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
