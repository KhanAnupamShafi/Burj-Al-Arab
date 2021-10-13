import React from "react";
import { useParams } from "react-router";

const Suite = () => {
  const { suiteId } = useParams();
  console.log(suiteId);
  return (
    <div>
      <h1>aaaaaaaaaaaaaasssssssssssssa</h1>
    </div>
  );
};

export default Suite;
