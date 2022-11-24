export type FilmType = {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
};
export type StateContextType = {
  favourites: FilmType[] | [];
  setFavourites: Function;
  filmDetails: FilmType | null;
  setFilmDetails: Function;
};

