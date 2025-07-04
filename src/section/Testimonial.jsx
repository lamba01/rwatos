import React, { useState } from "react";
import testimonial from "../assets/testimonial.png";
import { FaQuoteLeft } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const testimonials = [
  {
    text: `Booking my flights has never been this easy! The seamless experience,
    great deals, and hassle-free process make this my go-to travel
    platform. I’ve explored multiple destinations without breaking the
    bank. Highly recommended for stress-free travel!`,
    name: "Sophie Carter",
    location: "New York, USA",
  },
  {
    text: `This platform made planning my vacation a breeze! The deals were unbeatable and the process was so smooth. I’ll be recommending this to all my friends.`,
    name: "Alex Morgan",
    location: "Sydney, Australia",
  },
];

function Testimonial() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-16 px-6 sm:px-14">
      <h3 className="text-center text-[#2F6D9A] underline decoration-[2px] sm:hidden block uppercase text-xl font-bold mb-2">
        testimonials
      </h3>
      {/* Image and Heading */}
      <div className="flex flex-col sm:flex-row gap-9 w-full">
        <img
          src={testimonial}
          alt="A decorated house"
          className="sm:w-2/3 w-full h-72 sm:h-96 object-cover rounded-2xl sm:block hidden"
        />
        <h2 className="sm:w-1/3 w-full text-2xl sm:text-3xl font-semibold text-black drop-shadow-lg capitalize">
          what our <span className="text-[#2F6D9A]">clients</span> say about us
        </h2>
        <div
          className="absolute top-[70%] sm:top-44 w-[90%] left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-0 sm:w-2/3
        bg-white shadow-lg flex flex-col items-center justify-center z-20"
        >
          <div className="w-full flex flex-col sm:flex-row gap-6 px-4 py-4">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`
                  flex-1 flex flex-col justify-between
                  bg-black text-white p-6
                  ${active === idx ? "block" : "hidden"}
                  sm:block
                  transition-all duration-300
                `}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BiSolidQuoteAltLeft size={30} className="text-white" />
                  </div>
                  <p className="text-base italic">{t.text}</p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <CgProfile className="w-12 h-12 rounded-full bg-white/10" />
                  <div>
                    <h4 className="text-lg font-semibold capitalize">
                      {t.name}
                    </h4>
                    <p className="text-sm text-white/70 capitalize">
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Toggle Button for mobile */}
          <div className="flex sm:hidden justify-center gap-2 pb-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-3 h-3 rounded-full ${
                  active === idx ? "bg-[#2986FE]" : "bg-gray-300"
                }`}
                aria-label={`Show testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
