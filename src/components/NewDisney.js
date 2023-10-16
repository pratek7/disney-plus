import React from "react";
import { selectNewDisney } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NewDisney = () => {
  const movies = useSelector(selectNewDisney);
  // console.log("newDisney movies", movies);
  return (
    <div>
      <h4 className="moviesType"> New Disney</h4>
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

export default NewDisney;
