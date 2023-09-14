import React from "react";
import Breakfast from "./breakfast";
import Lunch from "./lunch";
import Dinner from "./dinner";
import Compo from "./compo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Renderlist(props) {
  const Menu = {
    "/Breakfast": "Breakfast",
    "/Lunch": "Lunch",
    "/Dinner": "Dinner",
    "/Compo": "Compo",
  };

  const MYdata = Object.entries(Menu).map((res, i) => {
    console.log(res, i);
    return (
      <div key={i}>
        <Link className="text-decoration-none text-dark" to={res[0]}>
          {res[1]}
        </Link>
      </div>
    );
  });
  return (
    <>
      <div className="container mt-5">{MYdata}</div>
    </>
  );
}

export default Renderlist;
