import React from "react";
import { selectOriginal } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Originals = () => {
  const movies = useSelector(selectOriginal);

  return (
    <div>
      <h4 className="moviesType">Originals</h4>
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

export default Originals;
