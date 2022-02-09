import React from 'react';
import { graphql } from 'gatsby';

import ListOfSkills from '../components/ListOfSkills';
import ListOfWorkExperiences from '../components/ListOfWorkExperiences';
import ListOfEducations from '../components/ListOfEducations';
import ListOfProjects from '../components/ListOfProjects';

const style = {
  title:
    'font-light text-3xl text-gray-800 border-b border-slate-300 pb-2 mb-2 tracking-wide mb-4',
};

const ResumePage = ({ data }) => {
  return (
    <div className="pt-2 grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 xl:gap-8">
      <div className="lg:row-span-2">
        <h1 className={style.title}>Work Experience</h1>
        <ListOfWorkExperiences
          workExperiences={data.site.siteMetadata.workExperiences}
        />
      </div>

      <div>
        <h1 className={style.title}>Education</h1>
        <ListOfEducations educations={data.site.siteMetadata.educations} />
      </div>

      <div>
        <h1 className={style.title}>Activities</h1>
        <div className="text-sm font-light">Reading book - See my Booklist</div>
        <div className="text-sm font-light">Ski</div>
        <div className="text-sm font-light">blablal blabla ablabl</div>
      </div>

      <div className="lg:col-span-2">
        <h1 className={style.title}>Technical Skills</h1>
        <ListOfSkills skills={data.site.siteMetadata.skills} />
      </div>

      <div className="lg:col-span-2">
        <h1 className={style.title}>Projects</h1>
        <ListOfProjects projects={data.site.siteMetadata.projects} />
      </div>
    </div>
  );
};

export default ResumePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        projects {
          name
          imageSrc
          description
          link
          tools
        }
        skills {
          category
          name
          rate
        }
        workExperiences {
          title
          dates
          contract
          duration
          entreprise {
            name
            location
            tag
          }
          post
        }
        educations {
          school
          title
          dates
          description
        }
      }
    }
  }
`;
