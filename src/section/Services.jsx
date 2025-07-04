import React from "react";
import hero from "../assets/hero-img.jpg";
import lightning from "../assets/lightning.png";
import furniture from "../assets/furniture.png";
import carpet from "../assets/carpet.jpg";

function Services() {
  return (
    <section>
      <div className="max-w-3xl mx-auto px-6 py-12" id="about">
        <h2 className="sm:text-4xl text-2xl font-bold text-center mt-8">
          4 Years of{" "}
          <span className="text-[#2F6D9A] underline decoration-[2px]">
            Experience
          </span>
        </h2>
        <p className="text-center py-4 text-lg text-slate-700">
          With a wealth of experience spanning over two decades, we have honed
          our skills in delivering top-notch services to our clients. Our
          commitment to excellence and customer satisfaction sets us apart in
          the industry.
        </p>
        <img
          src={hero}
          alt="Hero"
          className="w-full sm:h-[400px] h-[200px] my-6 rounded-2xl"
        />
      </div>
      <h2 className="sm:text-4xl text-2xl font-bold text-center mt-4 capitalize">
        our products
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 py-16"
        id="products"
      >
        {/* Lighting */}
        <div className="bg-white shadow-md flex flex-col h-80 text-center hover:shadow-lg transition">
          <div className="h-2/3">
            <img
              src={lightning}
              alt="lighting"
              className="w-full h-full object-cover rounded-t-md"
            />
          </div>
          <div className="text-start flex flex-col justify-center h-1/3 px-4">
            <h4 className="text-xl font-semibold mb-2 text-black">
              Lighting Equipment
            </h4>
            <p className="text-slate-700 text-sm">
              Modern and efficient lighting solutions for residential and
              commercial spaces.
            </p>
          </div>
        </div>

        {/* Furniture */}
        <div className="bg-white shadow-md flex flex-col h-80 text-center hover:shadow-lg transition">
          <div className="h-2/3">
            <img
              src={furniture}
              alt="furniture"
              className="w-full h-full object-cover rounded-t-md"
            />
          </div>
          <div className="text-start flex flex-col justify-center h-1/3 px-4">
            <h4 className="text-xl font-semibold text-black mb-2">Furniture</h4>
            <p className="text-slate-700 text-sm">
              Stylish, durable furniture ideal for showrooms, offices, and
              homes.
            </p>
          </div>
        </div>

        {/* Carpet */}
        <div className="bg-white shadow-md flex flex-col h-80 text-center hover:shadow-lg transition">
          <div className="h-2/3">
            <img
              src={carpet}
              alt="carpet"
              className="w-full h-full object-cover rounded-t-md"
            />
          </div>
          <div className="text-start flex flex-col justify-center h-1/3 px-4">
            <h4 className="text-xl font-semibold mb-2 text-black">Carpets</h4>
            <p className="text-slate-700 text-sm h-1/4">
              Quality carpets that combine comfort and design for any interior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
