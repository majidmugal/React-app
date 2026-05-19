import React, { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);

  const increase = () => {
    if (state < 10) {
      setState(state + 1);
    } else {
      setState(0);
    }
  };

  const decrease = () => {
    if (state > 0) {
      setState(state - 1);
    }
  };

  return (
    <div>
      <h2> Counter: {state}</h2>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
    </div>
  );
};

export default Counter;
