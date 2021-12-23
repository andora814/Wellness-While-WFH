import React from 'react';

const EditTipForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <h3>If you agree with this tip, add your name!</h3>
        <input
          type="text"
          onChange={props.onChange}
          name="name"
          placeholder="Enter your name"
          value={props.value}
        />

        <button className="button">Edit Tip</button>
      </form>
    </div>
  );
};

export default EditTipForm;
