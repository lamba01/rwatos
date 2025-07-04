export default function navBar() {
  return (
    <nav className="flex w-full justify-between items-center px-5 sm:px-10 z-20 fixed top-0 backdrop-blur-3xl h-[50px]">
      <div className="flex items-center">
        {/* <img
          className="h-[35px] w-[35px] rounded-xl border-2 border-white shadow-md"
          src={test}
          alt=""
        /> */}
        <h3 className="text-white font-bold text-lg">RWATOS</h3>
      </div>
      <div className="flex gap-5 md:gap-10 capitalize">
        <a
          className="text-sm md:text-lg text-white hover:text-black"
          href="/about"
        >
          about
        </a>
        <a
          className="text-sm md:text-lg text-white hover:text-black"
          href="/work"
        >
          services
        </a>
        {/* <a
          className="text-sm md:text-lg text-white hover:text-black"
          href="projects"
        >
          projects
        </a> */}
        <a
          className="text-sm md:text-lg text-white hover:text-black hidden sm:block"
          href="https://johncodes.xyz/#contact"
          rel="noopener noreferrer"
        >
          contact
        </a>
        {/* <a
          className="text-sm md:text-lg text-white hover:text-black"
          href="/blog"
          rel="noopener noreferrer"
        >
          blog
        </a> */}
      </div>
    </nav>
  );
}
