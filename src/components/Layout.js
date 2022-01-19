import React from 'react';
import Header from './Header';
import Footer from './Footer';

const classes = {
  wrapper: 'p-8 relative max-w-screen-xl xs:p-24',
  outerWrapper: 'bg-sky-50 min-h-screen',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      <Header />
      <div className={classes.wrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
