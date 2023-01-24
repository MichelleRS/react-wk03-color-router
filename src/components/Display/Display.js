import React from 'react';
import { useParams } from 'react-router-dom';
import './Display.css';

export default function Display() {
  const { r, g, b } = useParams();
  return (
    <section style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <p>The RGB color values of your color are: {`(${r}, ${g}, ${b})`}</p>
      <p>Choose another color to see their values.</p>
    </section>
  );
}
