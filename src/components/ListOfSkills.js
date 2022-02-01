import React from 'react';

import Rating from './Rating';

const ListOfSkills = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 gap-y-0.5 gap-x-8 px-2">
      {skills.map((skill) => (
        <div className="flex flex-row">
          <div className="flex flex-row basis-4/12 items-start">
            <div className="font-medium text-xs py-1 uppercase shrink-0">
              {skill.category}
            </div>
            <div className="border-t w-full mt-3 ml-4"></div>
          </div>

          <div className="flex flex-row pl-4 basis-7/12 items-start">
            <div className="font-light text-sm shrink-0">{skill.name}</div>
            <div className="border-t w-full mt-3 ml-4 mr-4"></div>
          </div>

          <div className="basis-1/12 items-end">
            <div className="font-light text-xs py-1">
              {<Rating rate={skill.rate} className="text-gray-700" />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/*        <h2 className="font-light text-xl pb-1 mb-2 border-slate-200 uppercase tracking-widest text-gray-700 ">
          Web
        </h2>*/

export default ListOfSkills;
