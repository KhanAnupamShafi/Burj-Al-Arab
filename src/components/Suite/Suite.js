import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useSuitesInfo from "../../Hooks/useSuitesInfo";
import "./Suite.css";

const Suite = () => {
  const [suiteSelected, setSuiteSelected] = useState({});
  const [suites] = useSuitesInfo();
  console.log(suiteSelected);

  const { suiteId } = useParams();

  //using sideEffect with dependency since our suites state is not rendered yet due to asynchronous fetch

  useEffect(() => {
    const suiteFound = suites.find((suite) => suite.id === parseInt(suiteId)); //suiteID is string url
    // setSuiteSelected(suiteSelected);
    setSuiteSelected(suiteFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suites]);

  return (
    // <div
    //   className="bg-cover h-96 sm:h-screen bg-no-repeat bg-center mx-auto"
    //   style={{
    //     backgroundImage: `linear-gradient(
    //   180deg,
    //   #050505 0,
    //   #060606 1%,
    //   #080808 4%,
    //   rgba(17, 17, 17, 0.53) 16%,
    //   rgba(42, 42, 42, 0) 50%,
    //   rgba(43, 43, 43, 0.01) 51%,
    //   rgba(8, 8, 8, 0.42) 86%,
    //   rgba(0, 0, 0, 0.84) 94%,
    //   #000 97%,
    //   #000
    // ),radial-gradient(ellipse at center,rgba(5,1,0,0) 0,#0d0b0b 75%,#000 95%), url('${suiteSelected?.image}')`,
    //   }}
    // >
    //   <div className="heading-container absolute flex justify-center items-center w-full">
    //     <h1 className="text-5xl top-0 text-white">
    //       Your dream vacation starts here
    //     </h1>
    //   </div>
    // </div>

    <div className="hero">
      <img
        src={suiteSelected?.image}
        alt="houses on the water"
        className="w-full h-96 sm:h-screen"
      />

      <div className="heading-container  absolute flex flex-col bottom-80  sm:bottom-0   sm:justify-end sm:items-start w-full">
        <p className="text-normal sm:text-2xl font-light text-white">
          Burj-Al-Arab
        </p>
        <h1 className="text-4xl sm:text-7xl font-extrabold my-4  text-white">
          {suiteSelected?.title}
        </h1>
        <p className="text-xl sm:text-3xl font-light text-white">
          {" "}
          {suiteSelected?.subtitle}
        </p>

        <button className="mt-8 p-2 pl-5 pr-5 text-3xl bg-transparent border-2 border-gray-500 text-gray-500 rounded-lg hover:bg-btn hover:text-gray-100 focus:border-4 focus:border-gray-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Suite;
