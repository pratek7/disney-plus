import React from "react";

const Detail = () => {
  return (
    <div className="min-h-[calc(100vh-70px)]  px-[calc(3.5vw+5px)] relative">
      <div className="fixed top-0 bottom-0 right-0 left-0 -z-[1]">
        <img
          className="w-full h-full object-cover"
          src="https://imgv3.fotor.com/images/share/two-cartoon-characters-generated-by-cartoon-character-maker-in-Fotor.jpg"
          alt=""
        />
      </div>
      <div className=" min-h-[170px] h-[30vh] min-w-[200px] w-[35vw]">
        <img
          className="w-full h-full object-contain"
          src="https://www.pxpng.com/public/uploads/preview/-11621687998ytrgnduxoh.png"
          alt=""
        />
      </div>
      <div className="flex items-center">
        <button className="flex items-center  rounded-md h-14 bg-[rgb(249,249,249)] text-sm px-6 mr-5 cursor-pointer text-black hover:bg-[rgb(198,198,198)]">
          <img src="/images/play-icon-black.png" alt="" /> <span>PLAY</span>
        </button>
        <button className="flex items-center  rounded-md h-14 bg-[rgba(0,0,0,0.3)] border border-[rgb(249,249,249)] text-sm px-6 mr-5 cursor-pointer uppercase hover:bg-[rgb(198,198,198)]">
          <img src="/images/play-icon-black.png" alt="" /> <span>Tailer</span>
        </button>
        <button className="w-11 h-11 rounded-full flex justify-center items-center text-4xl cursor-pointer mr-4 border-[rgb(249,249,249)] bg-[rgba(0,0,0,0.6)]">
          +
        </button>
        <button className=" w-11 h-11 rounded-full flex justify-center items-center text-4xl cursor-pointer mr-4 border-[rgb(249,249,249)] bg-[rgb(0,0,0)]">
          <img src="/images/group-icon.png" alt="" />
        </button>
      </div>
      <div className="bg-[rbg(249,249,249)] text-base min-h-[24px] mt-7">
        2018 - 7m - Family, Fantasy, Kids, Animation
      </div>
      <div className="text-2xl mt-7 bg-[rbg(249,249,249)]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempore magnam omnis voluptas labore obcaecati quidem animi mollitia
        quas, repudiandae eum possimus aut, dolores porro?
      </div>
    </div>
  );
};

export default Detail;
