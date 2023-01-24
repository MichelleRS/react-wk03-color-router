import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <h1>Test</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Dark Salmon</NavLink>
          </li>
          <li>
            <NavLink to="/">Olive Drab</NavLink>
          </li>
          <li>
            <NavLink to="/">Steel Blue</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
