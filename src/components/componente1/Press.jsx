import React from 'react';

const Press = ({ src, alt, size = 40 }) => (
  <img src={src} alt={alt} style={{ width: size, height: size }} />
);

export default Press;