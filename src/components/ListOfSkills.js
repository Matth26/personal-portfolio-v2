import React from 'react';

const ListOfSkills = ({ skills }) => {
  return (
    <ul className="list-disc">
      {skills.map((skill) => (
        <li className="font-light text-sm ml-8">{skill}</li>
      ))}
    </ul>
  );
};

export default ListOfSkills;
