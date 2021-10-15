import { useEffect, useState } from "react";

const useSuitesInfo = () => {
  const [suites, setSuites] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/KhanAnupamShafi/API-Raw/main/hotelRooms.json"
    )
      .then((res) => res.json())
      .then((data) => setSuites(data));
  }, []);

  return [suites, setSuites];
};

export default useSuitesInfo;
