import React, { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
const Home = () => {
  useEffect(() => {
    db.collection("movies").onSnapShot((snapshot) => {
      console.log(snapshot);
    });
  }, []);
  return (
    <main className="min-h-[calc(100vh-70px)] px-[calc(3.5vw-5px)] relative before:bg-hero before:bg-center before:bg-cover before:bg-no-repeat before:bg-fixed before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:-z-[1] overflow-x-hidden">
      <ImageSlider />
      <Viewers />
      <Movies />
    </main>
  );
};

export default Home;
