import React from 'react';
import '../componente1/Press';

const Card = ({ children, variant = 'body' }) => {
  const classes = `text-${variant}`;
  return <p className={classes}>{children}</p>;
};

export default Card;