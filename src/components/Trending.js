import React from "react";
import { selectTrending } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Trending = () => {
  const movies = useSelector(selectTrending);

  return (
    <div>
      <h4 className="moviesType">Trending</h4>
      <div className="moviesContainer grid grid-cols-4 gap-[25px]">
        {movies &&
          movies.map((movie, key) => {
            return (
              <div key={key}>
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

export default Trending;
