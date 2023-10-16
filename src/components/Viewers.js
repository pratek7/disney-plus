import React from "react";

const Viewers = () => {
  return (
    <div className="viewersContainer mt-8 grid grid-cols-5 gap-6 px-0 pt-8 pb-6">
      <div>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} className="vv">
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay loop playsInline>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Viewers;
