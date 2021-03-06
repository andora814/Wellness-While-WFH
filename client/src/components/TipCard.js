import React, { useState } from 'react';
import EditTipForm from './EditTipForm';
import axios from 'axios';
import { BASE_URL } from '../globals.js';

const TipCard = (props) => {
  const [tipName, setTipName] = useState(props.name);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    let newName = props.name + ', ' + e.target[0].value;
    const updatedTip = {
      name: newName,
      description: props.description
    };
    await axios.put(`${BASE_URL}/updatetip/${props._id}`, updatedTip);

    setTipName(newName);
  };

  const handleEditForm = (e) => {
    e.preventDefault();
    setTipName(e.target.value);
  };

  return (
    <div>
      <section className="tip-card">
        <h3>
          "{props.description}" ~{props.name}
        </h3>
        <button
          onClick={props.onClick}
          id={props._id}
          {...props}
          className="button"
        >
          Delete Tip
        </button>

        <br></br>
        <EditTipForm
          onChange={handleEditForm}
          onSubmit={handleEditSubmit}
          value={tipName}
          {...props}
        />
      </section>
    </div>
  );
};

export default TipCard;
