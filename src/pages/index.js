import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { LocationMarkerIcon, AtSymbolIcon } from '@heroicons/react/solid';
//import { DiGithubBadge } from 'react-icons/di/DiGithubBadge';
import { DiGithubAlt } from '@react-icons/all-files/di/DiGithubAlt'; // DevIcon
import { DiCss3 } from '@react-icons/all-files/di/DiCss3'; // DevIcon
import { DiGit } from '@react-icons/all-files/di/DiGit'; // DevIcon
import { DiGo } from '@react-icons/all-files/di/DiGo'; // DevIcon
import { DiHtml5 } from '@react-icons/all-files/di/DiHtml5'; // DevIcon
import { DiHeroku } from '@react-icons/all-files/di/DiHeroku'; // DevIcon
import { DiJsBadge } from '@react-icons/all-files/di/DiJsBadge'; // DevIcon
import { DiLinux } from '@react-icons/all-files/di/DiLinux'; // DevIcon
import { DiMarkdown } from '@react-icons/all-files/di/DiMarkdown'; // DevIcon
import { DiMongodb } from '@react-icons/all-files/di/DiMongodb'; // DevIcon
import { DiNodejsSmall } from '@react-icons/all-files/di/DiNodejsSmall'; // DevIcon
import { DiNpm } from '@react-icons/all-files/di/DiNpm'; // DevIcon
import { DiPostgresql } from '@react-icons/all-files/di/DiPostgresql'; // DevIcon
import { DiScriptcs } from '@react-icons/all-files/di/DiScriptcs'; // DevIcon

import { DiStackoverflow } from '@react-icons/all-files/di/DiStackoverflow'; // DevIcon
import { DiTerminal } from '@react-icons/all-files/di/DiTerminal'; // DevIcon
import { DiUbuntu } from '@react-icons/all-files/di/DiUbuntu'; // DevIcon
import { DiVim } from '@react-icons/all-files/di/DiVim'; // DevIcon
import { DiVisualstudio } from '@react-icons/all-files/di/DiVisualstudio'; // DevIcon
import { DiW3C } from '@react-icons/all-files/di/DiW3C'; // DevIcon
import { DiReact } from '@react-icons/all-files/di/DiReact'; // DevIcon

import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin'; // Ant Design Icons

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
  boxWrapper:
    'h-40 border rounded-lg shadow-sm md:basis-1/2 relative overflow-hidden',
  imageTitle: 'rounded-t-lg object-cover w-full h-full brightness-50',
  title:
    'absolute w-full p-2.5 top-4 inset-x-0 text-center text-2xl font-semibold tracking-widest text-slate-100',
  text: 'absolute w-full p-2.5 bottom-0 inset-x-0 bg-slate-50 text-sm text-gray-700 text-center leading-4',
};

const Index = ({ data }) => {
  const { name, title, description } = data.site.siteMetadata;
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
              <p className={style.info}>matthias.monnier@gmail.com</p>
            </div>
            <div className="flex items-center pb-1">
              <DiGithubAlt className={style.icon} />
              <p className={style.info}>github.com/Matth26</p>
            </div>
            <div className="flex items-center">
              <AiFillLinkedin className={style.icon} />
              <p className={style.info}>linkedin.com/in/matthiasmonnier</p>
            </div>
          </div>

          <div class="grid grid-cols-5 gap-2">
            <DiCss3 className={style.iconLanguages} />
            <DiGit className={style.iconLanguages} />
            <DiGo className={style.iconLanguages} />
            <DiHeroku className={style.iconLanguages} />
            <DiHtml5 className={style.iconLanguages} />
            <DiJsBadge className={style.iconLanguages} />
            <DiLinux className={style.iconLanguages} />
            <DiMarkdown className={style.iconLanguages} />
            <DiMongodb className={style.iconLanguages} />
            <DiNodejsSmall className={style.iconLanguages} />
            <DiNpm className={style.iconLanguages} />
            <DiPostgresql className={style.iconLanguages} />
            <DiScriptcs className={style.iconLanguages} />
            <DiStackoverflow className={style.iconLanguages} />
            <DiTerminal className={style.iconLanguages} />
            <DiUbuntu className={style.iconLanguages} />
            <DiVim className={style.iconLanguages} />
            <DiVisualstudio className={style.iciconLanguageson} />
            <DiW3C className={style.iconLanguages} />
            <DiReact className={style.iconLanguages} />
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

      <div className="flex flex-row mt-4 flex-wrap md:flex-nowrap">
        <div className={style.boxWrapper}>
          <StaticImage
            className={style.imageTitle}
            src="../images/architecture.jpeg"
            alt="Projects image"
            placeholder="blurred"
            layout="constrained"
          />
          <div className={style.title}>Projects</div>
          <div className={style.text}>
            I've worked on a number of project over the years. Each project has
            a detailed description, and a live demo.
          </div>
        </div>
        <div className="h-4 md:w-4"></div>
        <div className={style.boxWrapper}>
          <StaticImage
            className={style.imageTitle}
            src="../images/architecture.jpeg"
            alt="Projects image"
            placeholder="blurred"
            layout="constrained"
          />
          <div className={style.title}>Projects</div>
          <div className={style.text}>
            I've worked on a number of project over the years. Each project has
            a detailed description, and a live demo.
          </div>
        </div>
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
      }
    }
  }
`;
