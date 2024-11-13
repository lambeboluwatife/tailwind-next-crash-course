const Footer = () => {
  return (
    <footer className="p-6 flex bg-blue-700 items-center justify-between md:flex-row">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl tracking-widest">L.B.D</span>
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
      <div className="w-full block">
        <form>
          <input
            class="rounded-lg outline-none border-white font-1xl"
            type="text"
            name="message"
            placeholder="Send a message"
          />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
