import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-black h-20 px-10 fixed top-0 left-0 w-full">
        <div>
          <a href={"#"} className="text-white text-2xl">
            BNB Inc Back office
          </a>
        </div>

        <div className="flex gap-20">
          <a href={"#"} className="text-white text-2xl">
            Home
          </a>
          <a href={"#blog"} className="text-white text-2xl">
            Blog
          </a>
          <a href={"#services"} className="text-white text-2xl">
            Services
          </a>
          <a href={"#contact"} className="text-white text-2xl">
            Contact
          </a>
          <a href={"#about"} className="text-white text-2xl">
            About
          </a>
        </div>
        <div>
          <a href={"/login-page"} className="text-white text-2xl">
            Login
          </a>
        </div>
      </div>
      <div className="bg-white h-screen" id="#"></div>
      <div className="bg-red-800 h-screen" id="blog"></div>
      <div className="bg-blue-800 h-screen" id="services"></div>
      <div className="bg-green-800 h-screen" id="contact"></div>
      <div className="bg-yellow-800 h-screen" id="about"></div>
    </>
  );
};

export default LandingPage;
