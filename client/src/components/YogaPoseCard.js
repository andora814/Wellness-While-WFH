import React from 'react';

const YogaPoseCard = (props) => {
  return (
    <div>
      <h3>
        {props.english} ({props.sanskrit})
      </h3>
      <div>Benefits: {props.benefits}</div>
      <img src={props.image} alt="yoga pose" />
      <div>Description: {props.description}</div>
    </div>
  );
};

export default YogaPoseCard;
