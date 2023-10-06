import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);
  const [windowHeight, setWindowHeight] = useState(window.outerHeight);
  const [lodaer, setLoder] = useState(true);

  useEffect(() => {
    const handleWindowResizeW = () => {
      setWindowWidth(window.outerWidth);
    };

    const handleWindowResizeH = () => {
      setWindowHeight(window.outerHeight);
    };

    window.addEventListener("resize", handleWindowResizeW);
    window.addEventListener("resize", handleWindowResizeH);

    return () => {
      window.removeEventListener("resize", handleWindowResizeW);
      window.removeEventListener("resize", handleWindowResizeH);
    };
  });

  return (
    <div className="App">
      <h2>Width: {windowWidth}</h2>
      <h2>Height: {windowHeight}</h2>
    </div>
  );
}

export default App;
