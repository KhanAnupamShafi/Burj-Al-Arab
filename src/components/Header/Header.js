import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo/jhrlogo2019white8fba.png";
import logoSvg from "../../images/logo/logo.svg";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="leading-normal tracking-normal text-white gradient overflow-hidden">
      {/* <!--Nav--> */}
      <nav
        id="header"
        className="relative justify-between w-full top-0 text-white "
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="toggleColour text-white no-underline hover:no-underline flex font-bold text-2xl lg:text-4xl"
              href="/"
            >
              {/* <!--Icon from: http://www.potlabicons.com/ --> */}
              <img width={40} src={logoSvg} alt="" />
              <img width={100} src={logo} alt="logo" />
            </a>
            <button
              id="nav-toggle"
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent  bg-transparent  bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-secondary hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white lg:hidden outline-none focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            className={
              "w-full container justify-end  mt-4 lg:mt-auto lg:ml-8 lg:w-auto lg:flex flex-grow" +
              (navbarOpen ? "flex" : " hidden")
            }
          >
            <div className=" md:pl-4 md:border-l flex justify-center flex-col lg:items-center lg:flex-row list-none font-display">
              <NavLink
                to="/home"
                className="hover:bg-gray-700 hover:text-secondary text-white px-3 py-2 rounded-md text-xl font-medium"
              >
                Home
              </NavLink>

              <NavLink
                to="/"
                className="text-gray-300  hover:bg-gray-700 hover:text-secondary px-3 py-2 rounded-md text-xl font-medium"
              >
                Suits
              </NavLink>

              <NavLink
                to="/dining"
                className="text-gray-300 hover:bg-gray-700 hover:text-secondary px-3 py-2 rounded-md text-xl font-medium"
              >
                Dining
              </NavLink>

              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-secondary px-3 py-2 rounded-md text-xl font-medium"
              >
                Events
              </a>

              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-secondary px-3 py-2 rounded-md text-xl font-medium"
              >
                Offers
              </a>
            </div>
            <div className="ml-auto">
              <button
                id="navAction"
                className="bg-btn text-white font-bold rounded-sm mt-4 lg:my-2 py-3 px-6 shadow-2xl  focus:outline-none focus:shadow-outline transform-gpu transition hover:bg-btnHover hover:delay-150 hover:scale-105 duration-300 ease-in-out"
              >
                Log In
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2 mb-1 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
      {/* <!--Hero--> */}
    </header>
  );
};

export default Header;
