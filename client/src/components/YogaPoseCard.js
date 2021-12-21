import React from 'react';

const YogaPoseCard = (props) => {
  return (
    <div className="pose-content">
      <section className="image-container">
        <img src={props.image} alt="yoga pose" />
      </section>
      <section className="details">
        <h3>
          {props.english} ({props.sanskrit})
        </h3>
        <div>
          <b>Benefits:</b> {props.benefits}
        </div>
        <div>
          <b>Description:</b> {props.description}
        </div>
      </section>
    </div>
  );
};

export default YogaPoseCard;
