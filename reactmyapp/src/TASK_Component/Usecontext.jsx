import React, { useContext, useState } from "react";

const MyTheme = {
  dark: {
    font_color: "red",
    background: "black",
    border: "5px solid yellow",
    padding: "20px",
  },
  light: {
    font_color: "black",
    background: "lightblue",
    border: "5px solid black",
    padding: "20px",
  },
};

const Theme = React.createContext(MyTheme.dark);
const sec_Theme = React.createContext(MyTheme.light);
function Usecontext(props) {
  const data = useContext(Theme);
  const sec_data = useContext(sec_Theme);
  const [first, second] = useState(data);

  const Btnclick = () => {
    console.log(first);
    if (first == data) {
      second(sec_data);
    } else {
      second(data);
    }
  };
  return (
    <>
      <div className="container">
        <div className="mt-5">
          <p
            style={{
              color: first.font_color,
              background: first.background,
              border: first.border,
              padding: first.padding,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            aperiam quia accusamus praesentium voluptatum tempore quod optio
            iusto sapiente eligendi vel deserunt iure consequuntur ipsa eaque
            veniam, aut id repellat.
          </p>
          <button className="btn btn-primary" onClick={Btnclick}>
            Change style
          </button>
        </div>
      </div>
    </>
  );
}

export default Usecontext;
