import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Suites = () => {
  const [suites, setSuites] = useState([]);
  console.log(suites);

  useEffect(() => {
    fetch("./hotelRooms.json")
      .then((res) => res.json())
      .then((data) => setSuites(data));
  }, []);

  return (
    <section class="antialiased bg-black font-sans">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-wrap items-center justify-center min-h-screen">
          {/* /* ------------------------------- single card ------------------------------ */}

          {suites?.map((suite) => (
            <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">
              <div class="bg-primary shadow-xl rounded-lg overflow-hidden">
                <div
                  class="bg-cover bg-center h-56 p-4"
                  style={{
                    backgroundImage: `url(${suite.image})`,
                  }}
                >
                  <div class="flex justify-end">
                    <Link
                      class="inline-block text-white no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                      to={`/suite/${suite.id}`}
                    >
                      <svg
                        class="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div class="p-4">
                  <p class="uppercase tracking-wide text-sm font-bold text-white">
                    {suite.view}
                  </p>
                  <p class="text-3xl text-secondary">{suite.title}</p>
                  <p class="text-white">{suite.subtitle}</p>
                </div>
                <div class="flex p-4 border-t border-gray-300 text-white">
                  <div class="flex-1 inline-flex items-center ">
                    <svg
                      class="h-6 w-6 text-secondary fill-current mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                    </svg>
                    <p>
                      <span class="text-white font-bold">{suite.bed}</span> Bed
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-secondary  fill-current mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <p>
                      <span class="text-white font-bold">
                        {suite.occupency}
                      </span>{" "}
                      Persons
                    </p>
                  </div>
                </div>
                <div class="flex flex-wrap pt-1 items-center justify-center mb-2 border-t border-gray-300 bg-gray-100">
                  <button
                    class="w-1/2 text-white bg-custom border-r border-gray-500 hover:bg-btnHover hover:text-white active:bg-purple-600 font-bold uppercase text-base px-8 py-3 rounded-l outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Book Now
                  </button>

                  <Link
                    class="w-1/2 text-white bg-btn border-l border-solid border-gray-800 hover:bg-btnHover hover:text-white active:bg-purple-600 font-bold uppercase text-base px-8 py-3 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    to={`/suite/${suite.id}`}
                  >
                    <button type="button">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* card end */}
        </div>
      </div>
    </section>
  );
};

export default Suites;
