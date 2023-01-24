import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <p>
        Page not found. Return to <Link to="/">Home</Link>
      </p>
    </div>
  );
}
