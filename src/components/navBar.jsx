import logo from "../assets/rwatoslogo.png";
export default function navBar() {
  return (
    <nav className="flex w-full justify-between items-center px-5 sm:px-10 z-20 fixed top-0 backdrop-blur-3xl h-[50px]">
      <div className="flex items-center">
        <img className="h-[50px] w-[50px]" src={logo} alt="" />
        <h3 className=" font-bold text-xl text-blue-900 hidden sm:block">
          RWATOS LTD
        </h3>
      </div>
      <div className="flex gap-5 md:gap-10 capitalize">
        <a
          className="text-sm md:text-lg text-black font-semibold hover:text-black"
          href="#about"
        >
          about
        </a>
        <a
          className="text-sm md:text-lg text-black font-semibold hover:text-black"
          href="#products"
        >
          products
        </a>
        <a
          className="text-sm md:text-lg text-black font-semibold hover:text-black"
          href="#footer"
        >
          contact
        </a>
      </div>
    </nav>
  );
}
