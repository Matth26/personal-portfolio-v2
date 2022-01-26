import React from 'react';
import { Link } from 'gatsby';

const style = {
  link: 'font-light text-xs md:text-base px-2 md:px-4 py-2 rounded-lg border text-gray-500 hover:text-gray-600 hover:border-gray-600 duration-300',
};

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: style.link + ' border-gray-300' }
    : { className: style.link + ' border-transparent' };
};

const StyledLink = (props) => <Link getProps={isActive} {...props} />;

export default StyledLink;
