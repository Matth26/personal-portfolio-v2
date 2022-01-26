import React from 'react';

const Footer = () => {
  return (
    <footer className="flex items-center justify-around py-3">
      <p className="font-light text-xs text-gray-400">
        &copy; Matthias Monnier {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
