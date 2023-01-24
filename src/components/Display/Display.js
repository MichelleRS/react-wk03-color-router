import React from 'react';
import { useParams } from 'react-router-dom';

export default function Display() {
  const { r, g, b } = useParams();
  return (
    <section style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <p>Choose your color</p>
    </section>
  );
}
