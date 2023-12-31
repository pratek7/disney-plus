import React from "react";
import { selectMovie } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Movies = () => {
  const movies = useSelector(selectMovie);

  return (
    <div>
      <h4>Recommended For You!</h4>
      <div className="moviesContainer grid grid-cols-4 gap-[25px]">
        {movies &&
          movies.map((movie) => {
            return (
              <div key={movie.id}>
                <Link to={`/detail/${movie.id}`}>
                  <img src={movie.cardImg} alt="" />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Movies;
