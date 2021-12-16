import React, { useState } from 'react';
import axios from 'axios';

const TipForm = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    const res = await axios.post('localhost:3001/tips');
  };
  return (
    <div>
      <h1>
        Please feel free to add any tips or best practices you have learned
        while on your own work from home journey!
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name={'name'}
          placeholder={'Your name'}
        />
        <input
          type="text-area"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name={'description'}
          placeholder={'Your tip'}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TipForm;
