import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p className="center">
        &copy; Matthias Monnier {new Date().getFullYear()}
      </p>
    </footer>
  );
}
