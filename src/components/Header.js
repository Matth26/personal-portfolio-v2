import React from 'react';
import { Link } from 'gatsby';

const style = {
  link: 'font-light px-4 py-2 mr-1 rounded-lg border text-gray-500 hover:text-gray-600 hover:border-gray-600 duration-300',
};

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: style.link + ' border-gray-300' }
    : { className: style.link + ' border-transparent' };
};

const StyledLink = (props) => <Link getProps={isActive} {...props} />;

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-around py-3">
      <h1 className="text-3xl text-gray-600">Matthias Monnier</h1>
      <div>
        <StyledLink getProps={isActive} to="/">
          HOME
        </StyledLink>
        <StyledLink getProps={isActive} to="/about">
          ABOUT
        </StyledLink>
        <StyledLink getProps={isActive} to="/projects">
          PROJECTS
        </StyledLink>
        <StyledLink getProps={isActive} to="/resume">
          RÉSUMÉ
        </StyledLink>
      </div>
    </div>
  );
};

export default Header;
