import { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <div>
        <img src={image} className="image"></img>
      </div>
      <div className="tour-details">
        <h4 className="tour-price">{price}</h4>
        <h4 className="tour-name">{name}</h4>
      </div>
      <div className="description">
        {description}
        <span onClick={readmoreHandler} className="read-more">
          {readmore ? " Show Less" : "Read More"}
        </span>
      </div>
      <button onClick={() => removeTour(id)} className="btn-red">
        Not Interested
      </button>
    </div>
  );
}

export default Card;
