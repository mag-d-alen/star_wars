import React from "react";
import { useStateContext } from "../../state/StateContext";
import { FilmType } from "../../types";

export const Favourites: React.FC = () => {
  const { favourites } = useStateContext();
  return (
    <>
      {favourites ? (
        <div>
          <p>Your favourite movies: </p>
          {favourites.map((f: FilmType) => (
            <div key={f.episode_id}>{f.title}</div>
          ))}
        </div>
      ) : (
        <div>Which movie is your favourite?</div>
      )}
    </>
  );
};
