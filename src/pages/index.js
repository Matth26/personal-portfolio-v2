import React from 'react';
import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { LocationMarkerIcon, AtSymbolIcon } from '@heroicons/react/solid';
import { DiGithubAlt } from '@react-icons/all-files/di/DiGithubAlt'; // DevIcon
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin'; // Ant Design Icons

import CategoryBox from '../components/CategoryBox';

function age(dob) {
  let diff_ms = Date.now() - dob.getTime();
  let age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const style = {
  p: 'font-light leading-relaxed pb-4',
  icon: 'h-3.5 w-3.5 text-gray-800',
  iconLanguages: 'h-5 w-5 text-gray-800',
  info: 'pl-1 text-xs font-light',
  link: 'opacity-50 hover:opacity-100',
};

const Index = ({ data }) => {
  const { name, title, description, github, linkedin, email } =
    data.site.siteMetadata;
  return (
    <>
      <div className="border rounded-lg p-4 mt-4 shadow-sm flex flex-wrap md:flex-nowrap justify-center">
        <div className="pb-4 md:pb-0 md:w-56 flex flex-row md:flex-col md:flex-none justify-start items-center">
          <div className="w-24 md:w-48">
            <StaticImage
              className="rounded-full"
              src="../images/id.png"
              alt="Matthias Monnier"
              placeholder="blurred"
              layout="constrained"
              width={200}
              height={200}
            />
          </div>

          <div className="flex flex-col px-4 md:py-4">
            <div className="flex items-center pb-1">
              <LocationMarkerIcon className={style.icon} />
              <p className={style.info}>Montpellier, France</p>
            </div>
            <div className="flex items-center pb-1">
              <AtSymbolIcon className={style.icon} />
              <p className={style.info}>{email}</p>
            </div>
            <div className="flex items-center pb-1">
              <DiGithubAlt className={style.icon} />
              <a href={github} target="_blank" className={style.link}>
                <p className={style.info}>{github.replace('https://', '')}</p>
              </a>
            </div>
            <div className="flex items-center">
              <AiFillLinkedin className={style.icon} />
              <a href={linkedin} target="_blank" className={style.link}>
                <p className={style.info}>{linkedin.replace('https://', '')}</p>
              </a>
            </div>
          </div>
        </div>

        <div className="px-4 grow text-justify">
          <p className="leading-relaxed pb-4 font-normal md:text-xl md:text-2xl font-mono">
            Hello world, I'm Matthias!
          </p>
          <p className={style.p}>
            I'm a {age(new Date(1993, 10, 9))} years old french developer.
          </p>
          <p className={style.p}>
            I love designing elegant solutions to complex problem.
          </p>
          <p className={style.p}>
            I'm fascinated by Web technologies, Lowtechs and the Blockchain
            world.
          </p>
          <p className={style.p}>
            I started learning code (C language) when I was 13 and I fall in
            love with the programming process. I love designing software
            architectures.
          </p>

          <p className={style.p}>
            After a master degree in robotics and embedded software programming
            I worked 5 years in KeyInfuser, a innovatice robotic startup. I
            first started as a R&D developer and then was in charge of the R&D
            departement and the software architecture of the robotic solution. I
            took part of the whole product lifecycle: from software design, to
            coding, testing, deploying and maintaining the product.
          </p>
        </div>
      </div>

      <div className="flex flex-row mt-6 flex-wrap md:flex-nowrap space-y-6 md:space-y-0 md:space-x-6">
        <CategoryBox
          src="projects.jpeg"
          alt="Projects image"
          title="Projects"
          text="I've worked on a number of project over the years. Each project has a detailed description, and a live demo."
        />
        <CategoryBox
          src="resume.jpeg"
          alt="Résumé image"
          title="Résumé"
          text="Here is my online résumé. Have a look at my skillset, projects, interests and work experiences."
        />
      </div>
    </>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        github
        linkedin
        email
      }
    }
  }
`;
