import React from 'react';

const ListOfEducations = ({ educations }) => {
  return (
    <div className="grid grid-cols-1 space-y-3">
      {educations.map((ed) => (
        <div className="flex flex-row">
          <div className="flex flex-col pr-2 basis-1/6 items-end ">
            <div className="font-light text-xs py-0.5">{ed.dates}</div>
          </div>

          <div className="flex flex-col pl-2 border-l basis-5/6">
            <div className="font-semibold text-sm pb-1">{`${ed.school}, ${ed.title}`}</div>
						{ed.description.map(d=><div className="font-light text-sm">{d}</div>)}
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfEducations;
