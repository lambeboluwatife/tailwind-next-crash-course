const Navbar = () => {
  return (
    <nav className="p-6 flex flex-wrap bg-blue-700 items-center justify-between md:flex-row">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl">L.B.D</span>
      </div>
      <div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="text-sm sm:flex-grow">
          <a
            href="#"
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="#"
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
          >
            About Me
          </a>
          <a
            href="#"
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Portfolio
          </a>
          <a
            href="#"
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
      <div>
        <a
          href="#"
          className="inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
        >
          See My Works
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
