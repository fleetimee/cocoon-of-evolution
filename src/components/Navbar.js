import React from 'react';

const Navbar = () => {
  const [isOpen, setisOpen] = React.useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <nav>
      <div className="max-w-6xl mx-auto py-8">
        <div className="flex justify-between">
          <div>
            <a className="flex items-center px-6 space-x-2" href="/#">
              <img src="https://i.postimg.cc/Wbmh8SjJ/Capture.png" alt="" />
              <span className=" text-gray-700 font-bold text-3xl">Fudo</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1 md:space-x-2">
            <a className="text-gray-700 text-sm md:text-xl font-semibold py-2 px-3" href="/#">
              Why Fudo?
            </a>
            <a className="text-gray-700 text-xl font-semibold py-2 px-3" href="/#">
              Services
            </a>
            <a className="text-gray-700 text-xl font-semibold py-2 px-3" href="/#">
              Menu
            </a>
            <a className="text-gray-700 text-xl font-semibold py-2 px-3" href="/#">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <a
              className="py-3 px-10 text-gray-100 font-semibold text-xl bg-red-500 rounded-full"
              href="#"
            >
              Login
            </a>
          </div>

          <div className="px-6 py-4 items-center">
            <button type="button" className="hamburger md:hidden" onClick={handleClick}>
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen && (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
                {!isOpen && (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} `}>
        <a className="block py-4 px-6" href="/#">
          Why Fudo?
        </a>
        <a className="block py-4 px-6" href="/#">
          Services
        </a>
        <a className="block py-4 px-6" href="/#">
          Menu
        </a>
        <a className="block py-4 px-6" href="/#">
          Contact
        </a>
        <a className="block py-4 px-6" href="/#">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
