import React, { useState } from 'react';
import EditTipForm from './EditTipForm';
import axios from 'axios';

const TipCard = (props) => {
  const [tipName, setTipName] = useState(props.name);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    let newName = props.name + ', ' + e.target[0].value;
    const updatedTip = {
      name: newName,
      description: props.description
    };
    await axios.put(`http://localhost:3001/updatetip/${props._id}`, updatedTip);
    console.log(e.target[0].value);
    setTipName(newName);
    console.log('tipName is: ' + tipName);
    console.log('tip id is : ' + e.target.id);
    // setTipName=tipName + ", and " e.target.name
  };

  const handleEditForm = (e) => {
    e.preventDefault();
    setTipName(e.target.value);
    // console.log('tipName is: ' + tipName);
    // console.log('tip id is : ' + e.target.id);
  };

  return (
    <div>
      <section className="tip-card">
        <h2>
          "{props.description}" ~{props.name}
        </h2>
        <button onClick={props.onClick} id={props._id} {...props}>
          Delete Tip
        </button>
        {/* <button onClick={props.onClickEdit}>Edit Tip</button> */}
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
