import React from 'react';

const ListOfWorkExperiences = ({ workExperiences }) => {
  return (
    <div className="grid grid-cols-1 space-y-2">
      {workExperiences.map((exp) => (
        <div className="flex flex-row">
          <div className="flex flex-col pr-2 basis-1/6 items-end ">
            <div className="font-light text-xs py-0.5">{exp.dates}</div>
            <div className="font-light text-xs py-0.5">{exp.duration}</div>
            <div className="font-light text-xs py-0.5">{exp.contract}</div>
          </div>

          <div className="flex flex-col pl-2 border-l basis-5/6">
            <div className="font-semibold text-sm ">{exp.title}</div>
            <div className="font-light text-sm">{exp.post}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfWorkExperiences;
