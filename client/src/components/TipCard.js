import React from 'react';

const TipCard = (props) => {
  return (
    <div>
      <h2>
        "{props.description}" ~{props.name}
      </h2>
    </div>
  );
};

export default TipCard;
