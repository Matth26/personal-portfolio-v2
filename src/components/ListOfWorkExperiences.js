import React from 'react';

const ListOfWorkExperiences = ({ workExperiences }) => {
  return (
    <div className="grid grid-cols-1 space-y-2">
      {workExperiences.map((exp) => (
        <div className="grid grid-cols-5">
          <div className="font-light text-xs justify-self-end pr-2">
            {exp.dates}
          </div>
          <div className="font-light text-sm pl-2 border-l col-span-4">
            {exp.title}
          </div>

          <div className="font-light text-xs justify-self-end pr-2">
            {exp.duration}
          </div>
          <div className="font-light text-sm pl-2 border-l col-span-4 text-justify">
            {exp.post}
          </div>

          <div className="font-light text-xs justify-self-end pr-2">
            {exp.contract}
          </div>
          <div className="font-light text-sm pl-2 border-l col-span-4 text-justify"></div>
        </div>
      ))}
    </div>
  );
};

export default ListOfWorkExperiences;
