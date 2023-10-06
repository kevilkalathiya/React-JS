import React from "react";
import "./Spinner.css";

function Spinner(props) {
  return (
    <div>
      <div className="spinner"></div>
      <div className="mt-5 text-lg font-semibold">Loading</div>
    </div>
  );
}

export default Spinner;
