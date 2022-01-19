import React from 'react';

export default function Footer() {
  return (
    <footer className="flex items-center justify-around py-3">
      <p className="font-light text-xs text-gray-400">
        &copy; Matthias Monnier {new Date().getFullYear()}
      </p>
    </footer>
  );
}
