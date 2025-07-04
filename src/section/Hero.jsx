import hero from "../assets/Group.png";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center sm:px-10 px-6 sm:py-12 bg-radial-[at_25%_75%] from-gray-200 to-gray-500">
      <div className="text-center flex flex-col sm:flex-row justify-between w-full h-full items-center sm:gap-20 gap-8">
        <div className="sm:w-1/2 w-full sm:text-start text-center order-2 sm:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black ">
            Elevate Interiors. Lower Costs.
          </h1>
          <p className="text-lg text-slate-700 mb-6">
            Partnering with UK retailers, interior designers, and developers to
            supply high-quality furniture, carpets, and lighting — all at
            unbeatable trade rates. Reliability, style, and value you can count
            on
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-black px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-400"
          >
            Request a Quote
          </a>
        </div>
        <div className="h-full sm:w-1/2 w-full sm:order-2 order-1">
          <img src={hero} alt="Hero" className="sm:h-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
