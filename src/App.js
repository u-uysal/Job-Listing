import React, { useState, useEffect } from "react";
import data from "./Info/data.json";
import JobPresent from "./components/JobPresent";
console.log(data);
function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState(["CSS"]);
  useEffect(() => {
    setJobs(data);
  }, []);
  const filterByTags = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }

    return filters.every((filter) => tags.includes(filter));
  };
  const handleClick = (tag) => {
    // avoid double clicking
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };
  const clearFilters = () => {
    setFilters([]);
  };

  const handleClickFilter = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };
  const filteredJobs = jobs.filter(filterByTags);
  return (
    <div className="App">
      <header className="mb-12">
        <img src="/images/bg-header-desktop.svg" alt="background-image" />
      </header>
      {filters.length > 0 && (
        <div className="flex bg-white shadow-md my-16 mx-10 p-6 rounded">
          {" "}
          {filters.map((filter) => (
            <span
              onClick={() => handleClickFilter(filter)}
              className="text-teal-500 cursor-pointer bg-teal-100 font-bold mr-4 mb-4 p-2 rounded lg:mb-0"
            >
              <span>&times;</span> {filter}{" "}
            </span>
          ))}
          <button
            className="font-bold text-gray-800 ml-auto"
            onClick={clearFilters}
          >
            Clear
          </button>
        </div>
      )}
      {filteredJobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        filteredJobs.map((job) => (
          <JobPresent job={job} key={job.id} handleClick={handleClick} />
        ))
      )}
    </div>
  );
}

export default App;
