import React from "react";
import Breakfast from "./breakfast";
import Lunch from "./lunch";
import Dinner from "./dinner";
import Compo from "./compo";
import API from "./API";
import Incr_decr from "./Increment decrement using state";
import Form_validation from "./form_validation";
import Stop_watch from "./Stop_watch";
import Usecontext from "./Usecontext";
import Renderlist from "./Render list";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function navbar(props) {
  const abc = {
    "/breakfast": "Breakfast",
    "/lunch": "Lunch",
    "/dinner": "Dinner",
    "/compo": "Compo",
    "/api": "API",
    "/Incr_decr": "Incr_decr",
    "/Form_validation": "Form_validation",
    "/Stop_watch": "Stop_watch",
    "/Usecontext": "Usecontext",
    "/Renderlist": "Renderlist",
  };

  const Mydata = Object.entries(abc).map((res, i) => {
    // console.log(res);
    return (
      <li className="nav-item" key={i}>
        <Link className="nav-link" to={res[0]}>
          {res[1]}
        </Link>
      </li>
    );
  });
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              TASK
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">{Mydata}</ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/compo" element={<Compo />} />
          <Route path="/api" element={<API />} />
          <Route path="/Incr_decr" element={<Incr_decr />} />
          <Route path="/Form_validation" element={<Form_validation />} />
          <Route path="/Stop_watch" element={<Stop_watch />} />
          <Route path="/Usecontext" element={<Usecontext />} />
          <Route path="/Renderlist" element={<Renderlist />} />
        </Routes>
      </Router>
    </>
  );
}

export default navbar;
