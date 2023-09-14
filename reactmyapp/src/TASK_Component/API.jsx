import React, { Component } from "react";

class API extends Component {
  constructor() {
    super();
    this.state = {
      status: "pending...",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then(
          (res) => res.json()
          // console.log(res);
        )

        .then((Response) => {
          this.setState({ status: "completed..." });
          console.log(Response);
          let HTMLdata = "";
          let Mydata = Response.forEach((element) => {
            // console.log(element.id);
            HTMLdata += `<tr>
                      <td>${element.id}</td>
                      <td>${element.name}</td>
                      <td>${element.email}</td>
                      <td>${element.body}</td>
                      </tr>`;
          });
          document.querySelector("#disp-data").innerHTML = HTMLdata;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  }
  render() {
    return (
      <div className="container">
        <h1>{this.state.status}</h1>
        {this.state.status == "completed..." ? (
          <table
            border="2 "
            className="table table-hover border table-bordered mt-4"
          >
            <th className="border table-bordered ">ID</th>
            <th className="border table-bordered">name</th>
            <th className="border table-bordered">email</th>
            <th className="border table-bordered">Body</th>
            <tbody id="disp-data"></tbody>
          </table>
        ) : (
          "no data found"
        )}
      </div>
    );
  }
}

export default API;
