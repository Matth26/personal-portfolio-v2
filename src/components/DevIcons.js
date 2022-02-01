import React from 'react';

// https://react-icons.github.io/react-icons/

// Devicons
import { DiGithubAlt } from '@react-icons/all-files/di/DiGithubAlt';
import { DiCss3 } from '@react-icons/all-files/di/DiCss3';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { DiGo } from '@react-icons/all-files/di/DiGo';
import { DiHtml5 } from '@react-icons/all-files/di/DiHtml5';
import { DiHeroku } from '@react-icons/all-files/di/DiHeroku';
import { DiJsBadge } from '@react-icons/all-files/di/DiJsBadge';
import { DiLinux } from '@react-icons/all-files/di/DiLinux';
import { DiMarkdown } from '@react-icons/all-files/di/DiMarkdown';
import { DiMongodb } from '@react-icons/all-files/di/DiMongodb';
import { DiNodejsSmall } from '@react-icons/all-files/di/DiNodejsSmall';
import { DiNpm } from '@react-icons/all-files/di/DiNpm';
import { DiPostgresql } from '@react-icons/all-files/di/DiPostgresql';
import { DiStackoverflow } from '@react-icons/all-files/di/DiStackoverflow';
import { DiTerminal } from '@react-icons/all-files/di/DiTerminal';
import { DiUbuntu } from '@react-icons/all-files/di/DiUbuntu';
import { DiVim } from '@react-icons/all-files/di/DiVim';
import { DiVisualstudio } from '@react-icons/all-files/di/DiVisualstudio';
import { DiW3C } from '@react-icons/all-files/di/DiW3C';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { DiPython } from '@react-icons/all-files/di/Dipython';

// Simple Icons
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { SiGnuBash } from '@react-icons/all-files/si/SiGnuBash';
import { SiC } from '@react-icons/all-files/si/SiC';
import { SiCplusplus } from '@react-icons/all-files/si/SiCplusplus';
import { SiGit } from '@react-icons/all-files/si/SiRedux';
import { SiEslint } from '@react-icons/all-files/si/SiEslint';
import { SiPrettier } from '@react-icons/all-files/si/SiPrettier';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiArchlinux } from '@react-icons/all-files/si/SiTypescript';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';
import { SiGatsby } from '@react-icons/all-files/si/SiGatsby';
import { SiPostcss } from '@react-icons/all-files/si/SiPostcss';

// Ant Design Icons
import { AiFillAndroid } from '@react-icons/all-files/ai/AiFillAndroid';
import { AiFillQuestionCircle } from '@react-icons/all-files/ai/AiFillQuestionCircle';

const DevIcons = ({ name, className }) => {
  let style = className ? className : 'w-5 h-5';
  console.log(className);
  console.log(style);
  return (
    <>
      {(() => {
        switch (name) {
          case 'github':
            return <DiGithubAlt className={style} />;
          case 'css3':
            return <DiCss3 className={style} />;
          case 'git':
            return <DiGit className={style} />;
          case 'go':
            return <DiGo className={style} />;
          case 'html5':
            return <DiHtml5 className={style} />;
          case 'heroku':
            return <DiHeroku className={style} />;
          case 'js':
            return <DiJsBadge className={style} />;
          case 'linux':
            return <DiLinux className={style} />;
          case 'markdown':
            return <DiMarkdown className={style} />;
          case 'mongodb':
            return <DiMongodb className={style} />;
          case 'nodejs':
            return <DiNodejsSmall className={style} />;
          case 'npm':
            return <DiNpm className={style} />;
          case 'postgresql':
            return <DiPostgresql className={style} />;
          case 'stackoverflow':
            return <DiStackoverflow className={style} />;
          case 'terminal':
            return <DiTerminal className={style} />;
          case 'ubuntu':
            return <DiUbuntu className={style} />;
          case 'w3c':
            return <DiW3C className={style} />;
          case 'vim':
            return <DiVim className={style} />;
          case 'vscode':
            return <DiVisualstudio className={style} />;
          case 'react':
            return <DiReact className={style} />;
          case 'redux':
            return <SiRedux className={style} />;
          case 'tailwindcss':
            return <SiTailwindcss className={style} />;
          case 'gatsby':
            return <SiGatsby className={style} />;
          case 'postcss':
            return <SiPostcss className={style} />;
          default:
            return (
              <AiFillQuestionCircle className={style + ' text-rose-600'} />
            );
        }
      })()}
    </>
  );
};

export default DevIcons;
