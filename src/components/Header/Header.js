import React, { useState } from "react";
import logo from "../../images/logo/jhrlogo2019white8fba.png";
import logoSvg from "../../images/logo/logo.svg";

import "./Header.css";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="leading-normal tracking-normal text-white gradient overflow-hidden">
      {/* <!--Nav--> */}
      <nav
        id="header"
        className="relative justify-between w-full z-30 top-0 text-white "
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
            <div className="flex flex-col lg:items-center lg:flex-row list-none font-display">
              <a
                href="/"
                className="hover:bg-gray-700 hover:text-secondary text-white px-3 py-2 rounded-md text-xl font-medium"
              >
                Dashboard
              </a>

              <a
                href="/"
                className="text-gray-300  hover:bg-gray-700 hover:text-secondary px-3 py-2 rounded-md text-xl font-medium"
              >
                Team
              </a>

              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-secondary px-3 py-2 rounded-md text-xl font-medium"
              >
                Projects
              </a>

              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-secondary px-3 py-2 rounded-md text-xl font-medium"
              >
                Calendar
              </a>

              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-secondary px-3 py-2 rounded-md text-xl font-medium"
              >
                Reports
              </a>
            </div>
            <div className="ml-auto">
              <button
                id="navAction"
                className="bg-btn text-white font-bold rounded-sm mt-4 lg:my-2 py-3 px-6 shadow-2xl  focus:outline-none focus:shadow-outline transform-gpu transition hover:delay-150 hover:scale-105 duration-300 ease-in-out"
              >
                Action
              </button>
            </div>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
      {/* <!--Hero--> */}

      <div className="pt-0">
        <div className="w-full text-left relative">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center">
            <div className="myText">
              {/* <!--Left Col--> */}

              <div className="m-auto  rounded-lg flex flex-col w-full px-2 md:w-4/5 justify-center items-center text-center md:text-center ">
                <div className="radial-gradient-text lg:p-5  rounded-lg">
                  <p className="uppercase tracking-loose w-full">
                    "A landmark of architectural innovation"
                  </p>
                  <h1 className="inline-block p-1 rounded-xl my-5 uppercase bg-black   text-secondary text-2xl lg:text-5xl font-bold leading-tight">
                    Burj Al Arab
                  </h1>
                  <p className="leading-normal bg-primary text-lg lg:text-2xl mb-8">
                    A hotel that’s home to cutting-edge engineering — from the
                    unique man-made beach and infinity pool terrace, to one of
                    the tallest grand atrium at 180 metres high
                  </p>
                </div>

                <button className="mx-auto lg:mx-0 hover:underline bg-btn text-white font-bold rounded-full my-2 lg:my-6 py-1 lg:py-4 px-4 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Subscribes
                </button>
              </div>

              {/* <!--Right Col--> */}
              <div className="w-full relative md:w-3/5 py-6 text-center">
                {/* <img className="w-full md:w-4/5 z-50" alt="hero" src={ImageBg} /> */}
              </div>
            </div>
          </div>

          {/* /* ------------------------------- video hero ------------------------------- */}
          <div className="myVid py-6 text-center radial-gradient-text">
            <iframe
              width="1280"
              height="720"
              src="https://player.vimeo.com/video/342658137?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=false&dnt=true&background=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="relative -mt-12 lg:-mt-24">
        <svg viewBox="0 0 1428 174" version="1.1">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
    </header>
  );
};

export default Header;
