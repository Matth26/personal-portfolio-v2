import React from 'react';
import Header from './Header';
import Footer from './Footer';

const style = {
  contentWrapper: 'p-2 w-full md:w-4/5 mx-auto max-w-screen-lg',
  outerWrapper: 'bg-slate-50 min-h-screen w-full flex flex-col justify-between',
};

const Layout = ({ children }) => {
  return (
    <div className={style.outerWrapper}>
      <div>
        <Header />
        <div className={style.contentWrapper}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
