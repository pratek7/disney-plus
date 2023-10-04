import React from "react";

const Viewers = () => {
  return (
    <div className="viewersContainer mt-8 grid grid-cols-5 gap-6 px-0 pt-8 pb-6">
      <div>
        <img src="/images/viewers-disney.png" alt="" />
      </div>
      <div>
        <img src="/images/viewers-marvel.png" alt="" />
      </div>
      <div>
        <img src="/images/viewers-starwars.png" alt="" />
      </div>
      <div>
        <img src="/images/viewers-national.png" alt="" />
      </div>
      <div>
        <img src="/images/viewers-pixar.png" alt="" />
      </div>
    </div>
  );
};

export default Viewers;
