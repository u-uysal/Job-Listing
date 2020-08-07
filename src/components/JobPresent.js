import React from "react";

export default function JobPresent({ job }) {
  return (
    <div className="flex bg-white shadow-lg m-4 p-4">
      <div>
        <img src={job.logo} alt={job.company} />
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
