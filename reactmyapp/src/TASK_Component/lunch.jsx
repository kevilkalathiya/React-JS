import React, { Component } from "react";
import Reusable from "./foodreusablecompo";

class lunch extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      name: "Gujarati",
      food1: <Reusable imgsrc="img/Gfood1.jpg" title="Gujarati thail" />,
      food2: <Reusable imgsrc="img/Gfood2.jpg" title="kichu" />,
      food3: <Reusable imgsrc="img/Gfood3.jpg" title="Dhokla" />,
      food4: <Reusable imgsrc="img/Gfood4.jpg" title="mix Gujarati" />,
      btn: "move for south indian",
    };
  }

  btnclick = () => {
    if (this.state.count == 1) {
      this.setState({
        count: 2,
        name: "south indian",
        food1: <Reusable imgsrc="img/sfood1.jpeg" title="South thail" />,
        food2: <Reusable imgsrc="img/sfood2.jpeg" title="lemon Rice" />,
        food3: <Reusable imgsrc="img/sfood3.jpeg" title="Tomato Rice" />,
        food4: <Reusable imgsrc="img/sfood4.jpeg" title="uppam" />,
        btn: "move for punjabi",
      });
    } else if (this.state.count == 2) {
      this.setState({
        count: 3,
        name: "punjabi",
        food1: <Reusable imgsrc="img/pfood1.jpeg" title="punjabi thail" />,
        food2: <Reusable imgsrc="img/pfood2.jpeg" title="roti" />,
        food3: <Reusable imgsrc="img/pfood3.jpeg" title="paratha" />,
        food4: <Reusable imgsrc="img/pfood4.jpeg" title="sahi panner" />,
        btn: "move for Gujarati",
      });
    } else {
      this.setState({
        count: 1,
        name: "Gujarati",
        food1: <Reusable imgsrc="img/Gfood1.jpg" title="Gujarati thail" />,
        food2: <Reusable imgsrc="img/Gfood2.jpg" title="kichu" />,
        food3: <Reusable imgsrc="img/Gfood3.jpg" title="Dhokla" />,
        food4: <Reusable imgsrc="img/Gfood4.jpg" title="mix Gujarati" />,
        btn: "move for south indian",
      });
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="text-center mt-5 fs-1 fw-bold ">
            {this.state.name}
          </div>
          <div className="row mt-4">
            <div className="col-3">{this.state.food1}</div>

            <div className="col-3">{this.state.food2}</div>

            <div className="col-3">{this.state.food3}</div>

            <div className="col-3">{this.state.food4}</div>
          </div>
          <div className="text-center mt-5">
            <button
              className="btn btn-primary px-5 py-3 fs-5"
              onClick={this.btnclick}
            >
              {/* click me for change menu */}
              {this.state.btn}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default lunch;
