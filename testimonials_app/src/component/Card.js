import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card({ reviews }) {
  return (
    <React.Fragment>
      <div className="flex flex-col md:relative">
        <div className="absolute top-[-7rem] z-[10] mx-auto">
          <img
            className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
            src={reviews.image}
          ></img>
          <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-20]"></div>
        </div>

        <div className="mt-7">
          <p className="font-bold text-2xl capitalize tracking-wide">
            {reviews.name}
          </p>
          <p className="text-violet-300 uppercase text-sm">{reviews.job}</p>
        </div>

        <div className="text-violet-400 mx-auto mt-5">
          <FaQuoteLeft />
        </div>

        <div className="text-center mt-4 text-slate-500">{reviews.text}</div>

        <div className="text-violet-400 mx-auto mt-5">
          <FaQuoteRight />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
