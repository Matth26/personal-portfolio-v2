import React from 'react';
import { graphql } from 'gatsby';

import Project from '../components/Project';

const ProjectsPage = ({ data }) => {
  const { projects, github } = data.site.siteMetadata;

  const showProjects = () =>
    projects.map((p) => (
      <Project
        key={p.name}
        imageSrc={p.imageSrc}
        imageAlt={`${p.name} project image`}
        title={p.name}
        description={p.description}
        link={p.link}
        tools={p.tools}
      />
    ));

  return (
    <>
      <div className="border rounded-lg p-4 shadow-sm flex flex-col items-left space-y-4">
        <h1 className="font-bold tracking-widest text-gray-800 text-5xl uppercase self-center">
          Projects
        </h1>
        <p className="font-light leading-relaxed">
          I've worked on quite a few side-projects, which you can read about
          below. There are a couple of projects I'm working on at the moment
          that aren't listed here, because they haven't been released properly
          yet.
        </p>
        <p className="font-light leading-relaxed">
          The code for many of my projects is available on my{' '}
          <a
            href={github}
            target="_blank"
            className="opacity-50 hover:opacity-100"
          >
            GitHub profile
          </a>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {showProjects()}
      </div>
    </>
  );
};

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        github
        projects {
          name
          imageSrc
          description
          link
          tools
        }
      }
    }
  }
`;
