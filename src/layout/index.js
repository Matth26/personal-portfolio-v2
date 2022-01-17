import React from 'react';

const classes = {
  wrapper: 'p-8 relative max-w-screen-xl xs:p-24',
  svg: 'hidden fixed transform right-0 top-5 z-0 xl:block',
  outerWrapper: 'bg-sky-50 min-h-screen',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;
