import React, { useRef } from "react";

function Form_validation(props) {
  const name = useRef(null);
  const email = useRef(null);
  const mobile = useRef(null);
  const password = useRef(null);

  const Btnclick = () => {
    if (name.current.value == "") {
      name.current.focus();
      alert("please enter the name");
    } else if (email.current.value == "") {
      email.current.focus();
      alert("please enter the email");
    } else if (mobile.current.value == "") {
      mobile.current.focus();
      alert("please enter the mobile number");
    } else if (password.current.value == "") {
      password.current.focus();
      alert("please enter the password");
    }
  };
  return (
    <>
      <div className="container mt-5">
        <label htmlFor="">Name :</label>
        <br />
        <input type="text" placeholder="Name" ref={name} />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <br />
        <input type="email" placeholder="Email" ref={email} />
        <br />
        <br />
        <label htmlFor="">Mobile</label>
        <br />
        <input type="text" placeholder="Mobile" ref={mobile} />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" placeholder="Password" ref={password} />
        <br />
        <br />
        <button onClick={Btnclick}>Submit</button>
      </div>
    </>
  );
}

export default Form_validation;
