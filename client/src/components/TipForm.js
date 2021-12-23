import React from 'react';

const TipForm = (props) => {
  return (
    <div>
      <h2>
        Please feel free to add any tips or best practices you have learned
        while on your own work from home journey!
      </h2>
      <form onSubmit={props.onSubmit} className="form">
        <input
          type="text"
          onChange={props.onChange}
          name="name"
          placeholder={'Enter your name'}
        />
        <input
          type="text-area"
          onChange={props.onChange}
          name="description"
          placeholder={'Enter your tip'}
        />
        <button className="button">Create Tip</button>
      </form>
    </div>
  );
};

export default TipForm;
