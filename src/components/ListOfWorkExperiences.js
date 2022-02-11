import React from 'react';

const ListOfWorkExperiences = ({ workExperiences }) => {
  return (
    <div className="grid grid-cols-1 space-y-4">
      {workExperiences.map((exp) => (
        <div className="flex flex-row">
          <div className="flex flex-col pr-2 basis-1/6 items-end ">
            <div className="font-light text-xs py-0.5">{exp.dates}</div>
            <div className="font-light text-xs py-0.5">{exp.duration}</div>
          </div>

          <div className="flex flex-col pl-2 border-l basis-5/6">
            <div className="font-semibold text-sm ">{exp.title}</div>
            <div className="flex flex-row space-x-1 pb-1.5">
              <div className="font-semibold text-sm">{exp.entreprise.name}</div>
              <p className="font-normal text-sm">-</p>
              <div className="font-normal text-sm">
                {exp.entreprise.location}
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              {exp.post.map((p) => (
                <div className="font-light text-sm text-justify">{p}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfWorkExperiences;
