import React from 'react';

const TipCard = (props) => {
  return (
    <div>
      <section className="tip-card">
        <h2>
          "{props.description}" ~{props.name}
        </h2>
        <button>Delete Tip</button>
      </section>
    </div>
  );
};

export default TipCard;
