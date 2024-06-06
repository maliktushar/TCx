import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logged, setLog] = useState(false);

  useEffect(() => {
    const checkLoggedIn = () => {
      // Check if the token cookie exists
      const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=').map(c => c.trim());
        acc[name] = value;
        return acc;
      }, {});
      if (cookies.token) {
        setLog(true);
      } else {
        setLog(false);
      }
    };

    checkLoggedIn();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Delete the token cookie by setting its expiration date to a past date
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setLog(false);
  };
  const notify=()=>toast("This feature will be live soon!!")

  return (
    <header className="bg-black relative">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-white transition hover:text-gray-300/75 font-light" href="/courses"> Learn </a>
                </li>
                <li>
                  <button className="text-white transition hover:text-gray-300/75 font-light" onClick={notify} > Certify </button>
                </li>
                <li>
                  <button className="text-white transition hover:text-gray-300/75 font-light" onClick={notify} > Blogs </button>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {logged ? (
                <div className="sm:flex sm:gap-4">
                  <button
                    className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-400"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-400"
                    href="/login"
                  >
                    Login
                  </a>
                </div>
              )}

              <div className="block md:hidden">
                <button
                  onClick={toggleMenu}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <nav aria-label="Global" className="px-4 pb-4">
            <ul className="flex flex-col items-center gap-6 text-sm">
              <li>
                <a className="text-white transition hover:text-gray-300/75 font-light" href="/courses"> Learn </a>
              </li>
              <li>
                <button className="text-white transition hover:text-gray-300/75 font-light" onClick={notify}> Certify </button>
              </li>
              <li>
                <button className="text-white transition hover:text-gray-300/75 font-light" onClick={notify}> Blogs </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <ToastContainer/>

    </header>
    
  );
}

export default Navbar;
