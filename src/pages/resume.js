import React from 'react';
import { graphql } from 'gatsby';

import ListOfSkills from '../components/ListOfSkills';
import ListOfWorkExperiences from '../components/ListOfWorkExperiences';
import ListOfEducations from '../components/ListOfEducations';

const style = {
  title:
    'font-light text-3xl text-gray-800 border-b border-slate-300 pb-2 mb-2 tracking-wide mb-4',
};

const ResumePage = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h1 className={style.title}>Work Experience</h1>
        <ListOfWorkExperiences
          workExperiences={data.site.siteMetadata.workExperiences}
        />
      </div>

      <div>
        <h1 className={style.title}>Education</h1>
        <ListOfEducations educations={data.site.siteMetadata.educations} />
      </div>

      <div className="col-span-2">
        <h1 className={style.title}>Technical Skills</h1>
        <ListOfSkills skills={data.site.siteMetadata.skills} />
      </div>

      <div>
        <h1 className={style.title}>Projects</h1>
      </div>

      <div>
        <h1 className={style.title}>Activities</h1>
      </div>
    </div>
  );
};

export default ResumePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
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
