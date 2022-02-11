import React from 'react';

import { RiArrowDropRightLine } from '@react-icons/all-files/ri/RiArrowDropRightLine';

const ListOfActivities = ({ activities }) => {
  return (
    <div className="grid grid-cols-2 pl-4">
      {activities.map((activity) => (
        <div className="flex flex-row space-x-1 items-center">
          <RiArrowDropRightLine className="" />
          <p className="font-light text-sm">{activity}</p>
        </div>
      ))}
    </div>
  );
};

export default ListOfActivities;
