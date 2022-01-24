import React from 'react';
import Header from './Header';
import Footer from './Footer';

const classes = {
  contentWrapper: 'p-2 w-full md:w-4/5 mx-auto',
  outerWrapper: 'bg-sky-50 min-h-screen w-full flex flex-col justify-between',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      <div>
        <Header />
        <div className={classes.contentWrapper}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
