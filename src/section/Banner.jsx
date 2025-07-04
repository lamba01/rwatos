import React from "react";
import banner from "../assets/banner.png";

function Banner() {
  return (
    <section
      className="sm:min-h-72 min-h-56 flex flex-col items-start justify-center bg-cover bg-center relative px-6 sm:px-20 my-10"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1 className="text-2xl sm:text-4xl font-semibold mb-4 text-white capitalize w-2/3 sm:w-1/3">
        Transform your home with Rwatos
      </h1>
      <button className=" bg-white text-black px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-400">
        <a href="#contact">Contact Us</a>
      </button>
    </section>
  );
}

export default Banner;
