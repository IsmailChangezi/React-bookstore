import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header>
      <Link to="/">
        <h1>BookStore CMS</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
