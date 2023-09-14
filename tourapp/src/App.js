import "./App.css";
import data from "./data";
import Tours from "./component/Tours";
import { useState } from "react";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const NewTours = tours.filter((tour) => tour.id !== id);
    setTours(NewTours);
  }

  if (tours.length == 0) {
    return (
      <div className="refresh">
        <h2>No Tour Left</h2>
        <button onClick={() => setTours(data)} className="btn-white">
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
