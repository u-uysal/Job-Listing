import React from "react";

export default function JobPresent({ job }) {
  return (
    <div className="flex bg-white shadow-lg m-4 p-6">
      <div>
        <img src={job.logo} alt={job.company} />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold  text-teal-500">{job.company}</h3>
        <h2 className="font-bold text-lg">{job.position}</h2>
        <p className="text-gray-700">
          {job.postedAt} - {job.contract} - {job.location}
        </p>
      </div>
      <div className="flex items-center ml-auto">
        {job.languages
          ? job.languages.map((lang, i) => (
              <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">
                {lang}
              </span>
            ))
          : ""}
        {job.tools
          ? job.tools.map((tool, i) => (
              <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">
                {tool}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
}
