import React from "react";
import { Link } from "react-router-dom";
import Suites from "../Suites/Suites";

import banner from "../../images/banner/banner-1.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="leading-normal tracking-normal text-white gradient overflow-hidden">
        {/* <!--Hero--> */}

        <div className="pt-0">
          <div className="w-full text-left relative">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center">
              <div className="myText">
                {/* <!--Left Col--> */}

                <div className="m-auto rounded-lg flex flex-col w-full px-2 md:w-4/5 justify-center items-center text-center md:text-center ">
                  <div className="lg:p-5 linear-gradient  rounded-lg">
                    <p className="uppercase tracking-loose lg:w-1/2 m-auto">
                      "A landmark of architectural innovation"
                    </p>
                    <h1 className="inline-block p-1 rounded-xl my-5 uppercase text-secondary text-2xl lg:text-7xl font-bold leading-tight">
                      Burj Al Arab
                    </h1>
                    <p className="leading-normal linear-gradient rounded-xl py-2 text-lg lg:text-2xl mb-8">
                      A hotel that’s home to cutting-edge engineering — from the
                      unique man-made beach and infinity pool terrace, to one of
                      the tallest grand atrium at 180 metres high
                    </p>
                  </div>

                  <button className="mx-auto lg:mx-0 hover:underline bg-btn text-white font-bold rounded-full my-2 lg:my-6 py-1 lg:py-4 px-4 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Discover More
                  </button>
                </div>

                {/* <!--Right Col--> */}
                <div className="w-full relative md:w-3/5 py-6 text-center">
                  {/* <img className="w-full md:w-4/5 z-50" alt="hero" src={ImageBg} /> */}
                </div>
              </div>
            </div>

            {/* /* ------------------------------- video hero ------------------------------- */}
            <div className="myVid text-center">
              <iframe
                width="1280"
                height="720"
                src="https://player.vimeo.com/video/342658137?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=true&dnt=true&background=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="relative -mt-12 lg:-mt-24">
          <svg viewBox="0 0 1428 174" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
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
                fill="#141e30"
                fillRule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* /* --------------------------------- main section -------------------------------- */}

      <section className="text-white body-font bg-primary">
        <div className="mx-auto container bg-primary px-6 py-12">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="gradient-text f-f-d-s text-2xl lg:text-6xl leading-normal tracking-wide text-white text-center">
              Upcoming Events
            </h1>
          </div>
          <div className="lg:flex items-center justify-center mt-4 lg:mt-32">
            <div className="lg:w-1/2 h-1/3">
              <img
                src="https://cdn.tuk.dev/assets/templates/Fabterior/Section7(1).png"
                alt="An elegant bathroom with a bathtub,basin and other fancy items"
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 lg:mt-0 py-12 px-8 lg:px-12 gradient lg:w-2/5 lg:-ml-12 text-white f-f-l border border-yellow-500">
              <h2 className="lg:text-4xl text-2xl font-normal leading-9 pb-6 f-f-d-s">
                Down to every last detail
              </h2>
              <div className="flex items-center font-lato">
                <p className="text-sm lg:text-lg font-normal color-white mb-4">
                  General Manager, BURJ AL ARAB
                </p>
                <span
                  aria-hidden="true"
                  className="dot-color text-2xl px-2 mb-4"
                >
                  &#8226;
                </span>
                <p className="text-sm lg:text-lg font-normal color-white mb-4">
                  James Zanini
                </p>
              </div>
              <div className="pb-6 leading-6 f-f-l text-base lg:text-xl lg:leading-9">
                Burj Al Arab takes hotel design to a new level of modern luxury,
                and has also redefined the meaning of exceptional hospitality,
                both in Dubai and around the world.
              </div>
              <button className="border-b p-1 border-white lg:text-2xl text-base leading-6 f-f-l font-bold focus:border-b-0 focus:outline-none focus:ring-2 hover:border-yellow-500 focus:ring-gray-400">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block filter brightness-50 absolute inset-0"
                src={banner}
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-2xl text-white font-medium title-font mb-2">
                  For our valued guests
                </h2>
                <p className="leading-relaxed">
                  Save 25% when staying 3 nights or more or more.
                </p>
                <Link
                  to="/suits"
                  className="mt-3 text-red-300 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative -mt-12 lg:-mt-24  bg-primary">
        <svg viewBox="0 0 1428 174" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#141e30"
              fillRule="nonzero"
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
              fill="#000000"
              fillRule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
      <Suites />
    </>
  );
};

export default Home;
