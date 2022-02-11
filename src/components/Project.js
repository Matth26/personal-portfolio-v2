import React from 'react';
import { Link } from 'gatsby';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { RiToolsFill } from '@react-icons/all-files/ri/RiToolsFill';

import DynamicImage from './DynamicImage';
import DevIcons from './DevIcons';

const style = {
  boxWrapper: 'h-44 border rounded-lg shadow-sm md:basis-1/2 overflow-hidden',
  titleAndImageWrapper: 'relative h-24',
  imageTitle: 'rounded-t-lg object-cover w-full h-full brightness-50',
  title:
    'absolute w-full p-2.5 top-4 inset-x-0 text-center text-2xl font-semibold tracking-widest text-slate-100',
  subTitle:
    'absolute w-full p-2.5 top-14 inset-x-0 text-center text-xs font-semibold tracking-widest text-slate-100',
  textWrapper: 'w-full p-2.5 pt-5 bg-slate-50 relative',
  linkWrapper: 'w-full h-8 absolute inset-x-0 -top-3',
  link: 'bg-sky-500 hover:bg-sky-400 text-slate-100 rounded-full h-6 w-32 px-2 mx-auto flex flex-row items-center justify-center space-x-1.5',
  linkText: 'uppercase tracking-widest font-light text-xs',
  linkArrow: 'w-3 h-3',
  contentWrapper: 'flex flex-col space-y-2.5',
  text: 'text-sm text-gray-700 text-center leading-4',
  toolsLineWrapper: 'grid grid-cols-1 space-y-1.5 mx-auto ',
  textTools:
    'text-sm text-gray-700 text-center leading-4 flex flex-row justify-left items-center space-x-1.5',
};

const Project = ({ imageSrc, imageAlt, description, title, link, tools }) => {
  return (
    <div className={style.boxWrapper}>
      <div className={style.titleAndImageWrapper}>
        <DynamicImage
          className={style.imageTitle}
          src={imageSrc}
          alt={imageAlt}
          placeholder="blurred"
          layout="constrained"
        />
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}></div>
      </div>

      <div className={style.textWrapper}>
        <div className={style.linkWrapper}>
          <Link to={link} className={style.link}>
            <p className={style.linkText}>Live Demo</p>
            <ArrowRightIcon className={style.linkArrow} />
          </Link>
        </div>
        <div className={style.toolsLineWrapper}>
          <p className={style.text}>{description}</p>

          <div className={style.toolsLineWrapper}>
            <div className={style.textTools}>
              <RiToolsFill />
              <p>{tools}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
