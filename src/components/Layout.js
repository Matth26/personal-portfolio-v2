import React from 'react';
import Header from './Header';
import Footer from './Footer';

const classes = {
  wrapper: 'p-8 w-4/5 mx-auto',
  outerWrapper: 'bg-sky-50 min-h-screen w-screen flex flex-col justify-between',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      <div>
        <Header />
        <div className={classes.wrapper}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
