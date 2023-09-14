import React, { useState } from "react";

function Incrementdecrementusingstate(props) {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    setcount(count - 1);
  };

  const reset = () => {
    setcount(0);
  };

  return (
    <>
      <div className="container text-center">
        <span></span>
        <h1 className="mt-5 ">{count}</h1>
        <div>
          <button className="btn btn-primary px-3" onClick={increment}>
            Increment
          </button>

          <button className="btn btn-primary ms-3 px-3" onClick={decrement}>
            Decrement
          </button>
        </div>
        <div>
          <button className="btn btn-primary mt-3 px-4" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Incrementdecrementusingstate;
