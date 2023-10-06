import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of form Data:");
    console.log(formData);
  }
  return (
    <React.Fragment>
      <div className="w-[50%] mx-auto ">
        <form onSubmit={submitHandler}>
          <br />
          <label htmlFor="firstName">First name</label>
          <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="kevil"
            value={formData.firstName}
            onChange={changeHandler}
            className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
          />

          <br />
          <label htmlFor="lastName">Last name</label>
          <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="kalathiya"
            value={formData.lastName}
            onChange={changeHandler}
            className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
          />

          <br />
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="kevil@gmail.com"
            value={formData.email}
            onChange={changeHandler}
            className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
          />

          <br />
          <label htmlFor="country">Country</label>
          <br />
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={changeHandler}
            className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
          >
            <option value="India">India</option>
            <option value="United State">United State</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
          </select>

          <br />
          <label htmlFor="streetAddress">Street Address</label>
          <br />
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="1234 Main St"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
          />

          <br />
          <label htmlFor="city">City</label>
          <br />
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Botad"
            value={formData.city}
            onChange={changeHandler}
            className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
          />

          <br />
          <label htmlFor="state">State / Province</label>
          <br />
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Gujarat"
            value={formData.state}
            onChange={changeHandler}
            className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
          />

          <br />
          <label htmlFor="postalCode">ZIP / Postal Code</label>
          <br />
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="364710 "
            value={formData.postalCode}
            onChange={changeHandler}
            className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
          />

          <br />
          <label>By Email</label>
          <br />

          <div>
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
              className="h-4 w-4 mt-2"
            />

            <label htmlFor="comments" className="ms-2">
              Comments
            </label>
            <p className="text-xs ms-6 text-gray-500">
              Get notified when someones posts a comment on a posting.
            </p>

            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
              className="h-4 w-4 mt-2"
            />

            <label htmlFor="candidates" className="ms-2">
              Candidates
            </label>
            <p className="text-xs ms-6 text-gray-500">
              Get notified when a candidate applies for job.
            </p>

            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
              className="h-4 w-4 mt-2"
            />

            <label htmlFor="offers" className="ms-2">
              Offers
            </label>
            <p className="text-xs ms-6 text-gray-500">
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </div>

          <br />
          <label>Push Notifications</label>
          <br />

          <div>
            <p className="text-xs text-gray-500">
              These are delivered via SMS to your mobile phone.
            </p>

            <input
              type="radio"
              name="pushNotifications"
              id="PushEverything"
              value="Everything"
              onChange={changeHandler}
              className="h-4 w-4 mt-2"
            />
            <label htmlFor="PushEverything" className="ms-2">
              Everything
            </label>

            <br />
            <input
              type="radio"
              name="pushNotifications"
              id="PushEmail"
              value="Same as email"
              onChange={changeHandler}
              className="h-4 w-4 mt-2"
            />
            <label htmlFor="PushEmail" className="ms-2">
              Same as email
            </label>

            <br />
            <input
              type="radio"
              name="pushNotifications"
              id="pushNothing"
              value="No push notifications"
              onChange={changeHandler}
              className="h-4 w-4 mt-2"
            />
            <label htmlFor="pushNothing" className="ms-2">
              No push notifications
            </label>
          </div>

          <button className="bg-blue-500 text-white font-bold rounded py-2 px-5 my-4">
            Save
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default App;
