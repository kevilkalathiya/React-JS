import React, { Component } from "react";

class foodreusablecompo extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img src={this.props.imgsrc} alt="" height={300} />
          <div className="card-body">
            <h1 className="text-center">{this.props.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default foodreusablecompo;
