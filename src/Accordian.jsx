import React, { useState } from "react";

const Accordian = () => {
  const [ShowdData, setShowdData] = useState(true);
  const clickHandle = () => {
    setShowdData(!ShowdData);
  };

  return (
    <div>
      {ShowdData && <h1> show data</h1>}
      <button onClick={clickHandle}>{!ShowdData ? "show" : "hide"}</button>
    </div>
  );
};

export default Accordian;
