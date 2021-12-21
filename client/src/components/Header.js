import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/yoga">Yoga</Link>
        <Link to="/tips">Tips</Link>
      </nav>
    </header>
  );
};

export default Header;
