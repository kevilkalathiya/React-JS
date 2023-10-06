import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { filterData, apiUrl } from "./data";
import { useState, useEffect } from "react";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [error, setError] = useState(true);

  async function apicall() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    } catch (error) {
      console.log("404 | Sorry! Page not found");
      setError(false);
    }
    setLoading(false);
  }

  useEffect(() => {
    apicall();
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        ></Filter>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            {error ? <Cards courses={courses} category={category} /> : <>404</>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
