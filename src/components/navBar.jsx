export default function navBar() {
  return (
    <nav className="flex w-full justify-between items-center px-5 sm:px-10 z-20 fixed top-0 backdrop-blur-3xl h-[50px]">
      <div className="flex items-center">
        {/* <img
          className="h-[35px] w-[35px] rounded-xl border-2 border-white shadow-md"
          src={test}
          alt=""
        /> */}
        <h3 className=" font-bold text-xl text-[#2F6D9A]">RWATOS LTD</h3>
      </div>
      <div className="flex gap-5 md:gap-10 capitalize">
        <a
          className="text-sm md:text-lg text-black font-semibold hover:text-black"
          href="/about"
        >
          about
        </a>
        <a
          className="text-sm md:text-lg text-black font-semibold hover:text-black"
          href="/work"
        >
          services
        </a>
        <a
          className="text-sm md:text-lg text-black font-semibold hover:text-black hidden sm:block"
          href="https://johncodes.xyz/#contact"
          rel="noopener noreferrer"
        >
          contact
        </a>
      </div>
    </nav>
  );
}
