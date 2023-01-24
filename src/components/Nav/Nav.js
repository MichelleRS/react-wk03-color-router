import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/233/150/122">Dark Salmon</NavLink>
          </li>
          <li>
            <NavLink to="/107/142/35">Olive Drab</NavLink>
          </li>
          <li>
            <NavLink to="/70/130/180">Steel Blue</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
