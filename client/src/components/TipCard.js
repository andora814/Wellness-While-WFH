import React from 'react';

const TipCard = (props) => {
  return (
    <div>
      <section className="tip-card">
        <h2>
          "{props.description}" ~{props.name}
        </h2>
        <button onClick={props.onClick} id={props._id} {...props}>
          Delete Tip
        </button>
      </section>
    </div>
  );
};

export default TipCard;
