import React, { Component } from "react";

class Reusablecompo extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img src={this.props.Imgsrc} alt="" height={300} />
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h2 className="text-center">{this.props.title}</h2> <br />
              </div>
              <div className="col">
                <h5>
                  Old price: <del>{this.props.Oldprice}</del>
                </h5>
                <h5>New price: {this.props.Newprice}</h5>
              </div>
              <span className="btn btn-primary">Buy now</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reusablecompo;
