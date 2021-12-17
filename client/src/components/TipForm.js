import React, { useState } from 'react';
import axios from 'axios';

const TipForm = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <h1>
        Please feel free to add any tips or best practices you have learned
        while on your own work from home journey!
      </h1>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          onChange={props.onChange}
          name="name"
          placeholder={'Your name'}
        />
        <input
          type="text-area"
          onChange={props.onChange}
          name="description"
          placeholder={'Your tip'}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TipForm;
