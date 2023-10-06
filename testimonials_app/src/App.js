import "./App.css";
import React from "react";
import reviews from "./data";
import Testimonials from "./component/Testimonials";

function App() {
  return (
    <React.Fragment>
      <div className="App flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
        <div className="text-center">
          <div className="text-4xl font-bold">Our Testimonials</div>
          <div className="  bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
          <Testimonials reviews={reviews} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
