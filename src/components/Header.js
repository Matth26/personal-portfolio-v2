import React from 'react';
import StyledLink from './StyledLink';

const Header = () => {
  return (
    <header className="absolute sticky inset-x-0 top-0 z-50 bg-sky-50 ">
      <div className="flex flex-col sm:flex-row items-center justify-around py-3 border-b shadow-sm">
        <h1 className="text-xl md:text-3xl text-gray-600">Matthias Monnier</h1>
        <div>
          <StyledLink to="/">HOME</StyledLink>
          <StyledLink to="/projects">PROJECTS</StyledLink>
          <StyledLink to="/resume">RÉSUMÉ</StyledLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
