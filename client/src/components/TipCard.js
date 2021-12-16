import React from 'react';

const TipCard = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h2>{props.description}</h2>
    </div>
  );
};

export default TipCard;
