import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";
const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function movieInfo(db) {
      try {
        const docRef = doc(db, "movies", id); // Creating a document reference
        const docSnap = await getDoc(docRef); // Fetching the document
        if (docSnap.exists()) {
          setMovie(docSnap.data());
        } else {
          console.log("Document does not exist.");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    }
    movieInfo(db);
  }, []);

  return (
    <div className="min-h-[calc(100vh-70px)]  px-[calc(3.5vw+5px)] relative">
      {movie && (
        <>
          <div className="fixed top-0 bottom-0 right-0 left-0 -z-[1]">
            <img
              className="w-full h-full object-cover"
              src={movie.backgroundImg}
              alt=""
            />
          </div>
          <div className=" min-h-[170px] h-[30vh] min-w-[200px] w-[35vw]">
            <img
              className="w-full h-full object-contain mt-[60px]"
              src={movie.titleImg}
              alt=""
            />
          </div>
          <div className="flex items-center">
            <button className="flex items-center  rounded-md h-14 bg-[rgb(249,249,249)] text-sm px-6 mr-5 cursor-pointer text-black hover:bg-[rgb(198,198,198)]">
              <img src="/images/play-icon-black.png" alt="" /> <span>PLAY</span>
            </button>
            <button className="flex items-center  rounded-md h-14 bg-[rgba(0,0,0,0.3)] border border-[rgb(249,249,249)] text-sm px-6 mr-5 cursor-pointer uppercase hover:bg-[rgb(198,198,198)]">
              <img src="/images/play-icon-black.png" alt="" />{" "}
              <span>Tailer</span>
            </button>
            <button className="w-11 h-11 rounded-full flex justify-center items-center text-4xl cursor-pointer mr-4 border-[rgb(249,249,249)] bg-[rgba(0,0,0,0.6)]">
              +
            </button>
            <button className=" w-11 h-11 rounded-full flex justify-center items-center text-4xl cursor-pointer mr-4 border-[rgb(249,249,249)] bg-[rgb(0,0,0)]">
              <img src="/images/group-icon.png" alt="" />
            </button>
          </div>
          <div className="bg-[rbg(249,249,249)] text-base min-h-[24px] mt-7">
            {movie.subTitle}
          </div>
          <div className="text-2xl mt-7 bg-[rbg(249,249,249)] max-w-[760px]">
            {movie.description}
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;

// description;

// subTitle;

// title;

// titleImg;

// type;
