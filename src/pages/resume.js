import React from 'react';
import { graphql } from 'gatsby';

import ListOfSkills from '../components/ListOfSkills';
import ListOfWorkExperiences from '../components/ListOfWorkExperiences';
import ListOfEducations from '../components/ListOfEducations';
import ListOfProjects from '../components/ListOfProjects';
import ListOfActivities from '../components/ListOfActivities';

const style = {
  title:
    'font-light text-3xl text-gray-800 border-b border-slate-300 pb-1 mb-2 md:pb-2 md:mb-4 tracking-wide',
};

const ResumePage = ({ data }) => {
  return (
    <div className="pt-2 grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 xl:gap-8">
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
        <ListOfActivities activities={data.site.siteMetadata.activities} />
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
        activities
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
