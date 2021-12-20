import React, { useState } from 'react';

const EditTipForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div>If you agree with this tip, add your name!</div>
        <input
          type="text"
          onChange={props.onChange}
          name="name"
          placeholder={props.name}
          value={props.value}
        />

        <button>Add your name</button>
      </form>
    </div>
  );
};

export default EditTipForm;
