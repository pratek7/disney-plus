import React from "react";

const Login = () => {
  return (
    <div className="flex items-start justify-center min-h-[calc(100vh-70px)] px-[calc(3.5vw-5px)] relative before:bg-login before:bg-center before:bg-cover before:bg-no-repeat before:bg-fixed before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-[0.8] before:-z-[1] overflow-x-hidden">
      <div className="max-w-[650px] py-20 px-20 w-11/12 flex flex-col mt-[100px] items-center">
        <img src="/images/cta-logo-one.svg" alt="" />
        <a
          href=""
          className="w-full py-4 bg-[#0063e5] font-bold text-[#f9f9f9] rounded-md text-center uppercase text-xl cursor-pointer hover:bg-[#0483ee] transition-all duration-[250ms] mt-2 mb-4"
        >
          Get All There
        </a>
        <div className="text-xs text-center mb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          consectetur consequatur quas placeat sequi aperiam recusandae beatae
          quod odio officiis.
        </div>
        <img className="w-[90%]" src="/images/cta-logo-two.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
