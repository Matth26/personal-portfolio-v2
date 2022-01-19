import React from 'react';
import { Link } from 'gatsby';

const style = {
  link: 'font-light px-4 py-2 mr-1 rounded-lg border border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-600 duration-300',
};

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-around py-3">
      <h1 className="text-3xl text-gray-600">Matthias Monnier</h1>
      <div>
        <Link className={style.link} to="/">
          HOME
        </Link>
        <Link className={style.link} to="/about">
          ABOUT
        </Link>
        <Link className={style.link} to="/projects">
          PROJECTS
        </Link>
        <Link className={style.link} to="/resume">
          RÉSUMÉ
        </Link>
      </div>
    </div>
  );
};

export default Header;
