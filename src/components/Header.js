import React from "react";

const Header = () => {
  return (
    <header className="h-[70px] bg-[#090b13] flex items-center px-9  justify-between">
      <img src="/images/logo.svg" alt="" className="w-20 " />
      <nav className="text-white flex overflow-x-hidden">
        <a href="#Home" className="header-a">
          <img src="/images/home-icon.svg" alt="" className="header-img" />
          <span className="header-span ">HOME</span>
        </a>
        <a href="#Search" className="header-a">
          <img src="/images/search-icon.svg" alt="" className="header-img" />
          <span className="header-span ">SEARCH</span>
        </a>
        <a href="#Watchlist" className="header-a">
          <img src="/images/watchlist-icon.svg" alt="" className="header-img" />
          <span className="header-span ">WATCHLIST</span>
        </a>
        <a href="#originals" className="header-a">
          <img src="/images/original-icon.svg" alt="" className="header-img" />
          <span className="header-span ">ORIGINALS</span>
        </a>
        <a href="#movies" className="header-a">
          <img src="/images/movie-icon.svg" alt="" className="header-img" />
          <span className="header-span ">MOVIES</span>
        </a>{" "}
        <a href="#series" className="header-a">
          <img src="/images/series-icon.svg" alt="" className="header-img" />
          <span className="header-span ">SERIES</span>
        </a>
      </nav>
      <img
        src="https://img.freepik.com/free-photo/abstract-blur-empty-green-gradient-studio-well-use-as-background-website-template-frame-business-report_1258-54627.jpg"
        alt=""
        className="w-12 h-12 rounded-full cursor-pointer"
      />
    </header>
  );
};

export default Header;
