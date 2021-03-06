import React from 'react';
import { Link } from 'gatsby';

import DevIcons from './DevIcons';

import { FiExternalLink } from '@react-icons/all-files/fi/FiExternalLink';

const displayLogos = (project) => {
  return (
    project?.tools &&
    project.tools
      .toLowerCase()
      .replace(/\s/g, '')
      .split(',')
      .map((e) => <DevIcons name={e} className="w-4 h-4 text-gray-800" />)
  );
};

const ListOfProjects = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 px-1 md:px-2">
      {projects.map((project) => (
        <div className="">
          <div className="flex flex-row justify-between items-center border-b mb-1">
            <div className="font-medium text-sm py-1 uppercase text-gray-800">
              {project.name}
            </div>
            <div className="flex flex-row space-x-2 md:space-x-6">
              <div className="flex flex-row space-x-1 md:space-x-2">
                {displayLogos(project)}
              </div>
              <a href={project.link} target="_blank">
                <FiExternalLink className="opacity-50 hover:opacity-100" />
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="font-light text-sm text-justify text-gray-700">
              {project.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfProjects;
