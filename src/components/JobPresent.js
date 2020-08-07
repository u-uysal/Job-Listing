import React from "react";

export default function JobPresent({ job }) {
  const arrRoleandLevel = [job.role, job.level];
  const arraLangandTool = [...job.languages, ...job.tools];
  return (
    <div className="flex bg-white shadow-lg m-4 p-6 rounded">
      <div>
        <img src={job.logo} alt={job.company} />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold  text-teal-500">
          {job.company}
          {job.new && (
            <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded-full">
              New
            </span>
          )}
          {job.featured && (
            <span className="text-white bg-gray-800 font-bold m-2 p-1 rounded-full">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-lg">{job.position}</h2>
        <p className="text-gray-700">
          {job.postedAt} - {job.contract} - {job.location}
        </p>
      </div>
      <div className="flex items-center ml-auto">
        {arrRoleandLevel
          ? arrRoleandLevel.map((ral, i) => (
              <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">
                {ral}
              </span>
            ))
          : ""}
        {arraLangandTool
          ? arraLangandTool.map((lat, i) => (
              <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">
                {lat}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
}
