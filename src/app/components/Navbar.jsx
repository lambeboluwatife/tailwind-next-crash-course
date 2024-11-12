const Navbar = () => {
  return (
    <nav className="p-6 flex flex-wrap bg-blue-700 items-center justify-between md:flex-row">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl tracking-widest">L.B.D</span>
      </div>
      <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="text-sm sm:flex-grow space-x-4">
          <a
            href="#"
            class="block sm:inline-block sm:mt-0 text-teal-200 hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            class="block sm:inline-block sm:mt-0 text-teal-200 hover:text-white"
          >
            About Me
          </a>
          <a
            href="#"
            class="block sm:inline-block sm:mt-0 text-teal-200 hover:text-white"
          >
            Portfolio
          </a>
          <a
            href="#"
            class="block sm:inline-block sm:mt-0 text-teal-200 hover:text-white"
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
