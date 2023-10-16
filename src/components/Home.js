import React, { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import { setMovies } from "../features/movies/movieSlice";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];
  useEffect(() => {
    async function getMovies(db) {
      const moviecol = collection(db, "movies");
      const movieSnapshot = await getDocs(moviecol);
      movieSnapshot.docs.forEach((doc) => {
        // const movieData = { id: doc.id, ...doc.data() };
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
        return recommends, newDisneys, originals, trending;
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    }
    getMovies(db);
  }, [userName]);

  return (
    <main className="min-h-[calc(100vh-70px)] px-[calc(3.5vw-5px)] relative before:bg-hero before:bg-center before:bg-cover before:bg-no-repeat before:bg-fixed before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:-z-[1] overflow-x-hidden">
      <ImageSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </main>
  );
};

export default Home;
