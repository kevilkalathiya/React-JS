import React, { Component } from "react";
import Reusable from "./Reusablecompo";

class compo extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row mt-5">
            <div className="col-3">
              <Reusable
                Imgsrc="img/iphone.jpg"
                title="iphone"
                Oldprice="150000"
                Newprice="140000"
              />
            </div>

            <div className="col-3">
              <Reusable
                Imgsrc="img/samsung.jpg"
                title="samsung "
                Oldprice="130000"
                Newprice="125000"
              />
            </div>

            <div className="col-3">
              <Reusable
                Imgsrc="img/pixel.webp"
                title="pixel"
                Oldprice="90000"
                Newprice="80000"
              />
            </div>

            <div className="col-3">
              <Reusable
                Imgsrc="img/oneplus.webp"
                title="oneplus"
                Oldprice="60000"
                Newprice="55000"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default compo;
