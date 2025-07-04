import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CiCircleCheck } from "react-icons/ci";
import dream from "../assets/dream.png"; // Assuming you have an image for the background

function Dream() {
  return (
    <section className="flex flex-col sm:flex-row gap-10 py-16 px-6 sm:px-14 min-h-96">
      <div className="h-full w-full sm:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-10">
          Designing Your Dreams in Three Simple Steps
        </h2>

        <ul className="relative sm:space-y-5 space-y-10 max-w-5xl mx-auto">
          {/* Line connecting icons */}
          <div className="absolute left-[13px] top-8 h-[calc(100%-3.5rem)] w-px bg-black/20"></div>

          <li className="flex items-start sm:gap-6 gap-4 relative">
            <div className="relative z-10">
              <IoRocketOutline className="text-blue-600 w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-1">
                Start Project
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Embark on your design adventure by initiating your project.
                Share your vision and set the stage for a bespoke design
                experience tailored to your space.
              </p>
            </div>
          </li>

          <li className="flex items-start sm:gap-6 gap-4 relative">
            <div className="relative z-10">
              <HiOutlineLightBulb className="text-yellow-500 w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-1">
                Craft
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Collaborate closely with our team to refine your vision.
                Together, we’ll shape every detail into a space that reflects
                your style and purpose.
              </p>
            </div>
          </li>

          <li className="flex items-start sm:gap-6 gap-4 relative">
            <div className="relative z-10">
              <CiCircleCheck className="text-green-600 w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-1">
                Execute
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Watch your dream come to life as we execute the design plan with
                precision. From start to finish, we ensure quality results
                you’ll love.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="h-full w-full sm:w-1/2 flex items-center justify-center">
        <img
          src={dream}
          alt="Dream house"
          className="h-96 object-cover w-full"
        />
      </div>
    </section>
  );
}

export default Dream;
