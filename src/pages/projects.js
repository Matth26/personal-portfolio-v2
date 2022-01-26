import React from 'react';

import Project from '../components/Project';

const ProjectsPage = () => {
  return (
    <div className="flex flex-row mt-6 flex-wrap md:flex-nowrap space-y-6 md:space-y-0 md:space-x-6">
      <Project />
      <Project />
    </div>
  );
};

export default ProjectsPage;
