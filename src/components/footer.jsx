import React from "react";
import footerlogo from "../assets/IMG_1359.jpg";

function Footer() {
  return (
    <footer
      className="bg-[#061936] text-white pt-8 pb-2 px-6 mt-12"
      id="footer"
    >
      <main className="flex flex-col sm:flex-row gap-5 justify-between">
        <div className="max-w-6xl flex items-center gap-5 space-y-2">
          <img src={footerlogo} alt="Rwatos logo" className="w-20" />
          <div>
            <h4 className="text-xl font-semibold">Rwatos LTD</h4>
            <p className="italic">Where Interior Vision Meets Trade Value.</p>
          </div>
        </div>
        <div>
          <p className="text-white/50">
            <strong className="text-white">Address :</strong> Unit 15, Omega
            Works, 4, Roach Road, Bow, London, E3 2PF
          </p>
          <p className="text-white/50">
            <strong className="text-white">Email :</strong>
            <a href="mailto:info@rwatosltd.com"> info@rwatosltd.com</a>
          </p>
          <p className="text-white/50">
            <strong className="text-white">Phone :</strong>
            <a href="tel:+447722133636" className="underline">
              {" "}
              +44 07722 133636
            </a>
          </p>
        </div>
      </main>
      <div className="border-t border-gray-300 w-full mt-4"></div>
      <div className="w-full text-center pt-2 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Rwatos LTD. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
