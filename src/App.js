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
      <h1 className="text-4xl">hey</h1>
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        jobs.map((job) => <JobPresent job={job} key={job.id} />)
      )}
    </div>
  );
}

export default App;
