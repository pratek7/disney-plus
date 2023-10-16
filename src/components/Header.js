import React, { useEffect } from "react";
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { provider, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signOut as out } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      }
    });
  }, []);
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signOut = () => {
    out(auth).then(() => {
      dispatch(setSignOut());
      navigate("/login");
    });
  };
  return (
    <header className="h-[70px] bg-[#090b13] flex items-center px-9  justify-between">
      <img src="/images/logo.svg" alt="" className="w-20 " />
      {!userName ? (
        <div
          onClick={signIn}
          className="border rounded-md py-2 px-4 text-base uppercase bg-[rgba(0,0,0,0.6)] transform duration-[0.2s] ease-in cursor-pointer hover:bg-[#f9f9f9] hover:text-slate-950 hover:border-transparent tracking-wide"
        >
          Login
        </div>
      ) : (
        <>
          <nav className="text-white flex overflow-x-hidden">
            <a href="#Home" className="header-a">
              <img src="/images/home-icon.svg" alt="" className="header-img" />
              <span className="header-span ">HOME</span>
            </a>
            <a href="#Search" className="header-a">
              <img
                src="/images/search-icon.svg"
                alt=""
                className="header-img"
              />
              <span className="header-span ">SEARCH</span>
            </a>
            <a href="#Watchlist" className="header-a">
              <img
                src="/images/watchlist-icon.svg"
                alt=""
                className="header-img"
              />
              <span className="header-span ">WATCHLIST</span>
            </a>
            <a href="#originals" className="header-a">
              <img
                src="/images/original-icon.svg"
                alt=""
                className="header-img"
              />
              <span className="header-span ">ORIGINALS</span>
            </a>
            <a href="#movies" className="header-a">
              <img src="/images/movie-icon.svg" alt="" className="header-img" />
              <span className="header-span ">MOVIES</span>
            </a>{" "}
            <a href="#series" className="header-a">
              <img
                src="/images/series-icon.svg"
                alt=""
                className="header-img"
              />
              <span className="header-span ">SERIES</span>
            </a>
          </nav>
          <img
            onClick={signOut}
            src={userPhoto}
            alt=""
            className="w-12 h-12 rounded-full cursor-pointer"
          />
        </>
      )}
    </header>
  );
};

export default Header;
