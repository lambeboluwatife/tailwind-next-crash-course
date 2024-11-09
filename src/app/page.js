export default function Home() {
  return (
    <nav className="p-6 flex flex-wrap bg-blue-700 items-center justify-between md:flex-row">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl">L.B.D</span>
      </div>
      <div className="flex flex-col align-center justify-between text-white space-x-6 md:flex-row">
        <a href="#" className="text-white hover:text-black">
          Home
        </a>
        <a href="#" className="text-white hover:text-black">
          About Me
        </a>
        <a href="#" className="text-white hover:text-black">
          Portfolio
        </a>
        <a href="#" className="text-white hover:text-black">
          Contact
        </a>
      </div>
      <div>
        <a
          href="#"
          className="inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
        >
          See y Works
        </a>
      </div>
    </nav>
  );
}
