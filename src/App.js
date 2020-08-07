import React, { useState, useEffect } from "react";
import data from "./Info/data.json";
import JobPresent from "./components/JobPresent";
console.log(data);
function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);
  return (
    <div className="App">
      <header className="mb-12">
        <img src="/images/bg-header-desktop.svg" alt="background-image" />
      </header>
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        jobs.map((job) => <JobPresent job={job} key={job.id} />)
      )}
    </div>
  );
}

export default App;
