import React from "react";
import footerlogo from "../assets/IMG_1359.jpg";

function Footer() {
  return (
    <footer className="bg-[#061936] text-white pt-8 pb-2 px-6 mt-12">
      <div className="max-w-6xl flex items-center gap-5 space-y-2">
        <img src={footerlogo} alt="Rwatos logo" className="w-20" />
        <div>
          <h4 className="text-xl font-semibold">Rwatos LTD</h4>
          <p>Unit 15, Omega Works, 4, Roach Road, Bow, London, E3 2PF</p>
        </div>
      </div>
      <p>Email: info@rwatosltd.com</p>
      <p>
        Phone:{" "}
        <a href="tel:+447722133636" className="text-white underline">
          +44 07722 133636
        </a>
      </p>

      <div className="border-t border-gray-300 w-full mt-4"></div>
      <div className="w-full text-center pt-2 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Rwatos LTD. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
