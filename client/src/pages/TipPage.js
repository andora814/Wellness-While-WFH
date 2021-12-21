import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TipCard from '../components/TipCard.js';
import TipForm from '../components/TipForm.js';

const TipPage = (props) => {
  const [tips, setTips] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  useEffect(() => {
    getTips();
  });

  const getTips = async () => {
    const res = await axios.get('http://localhost:3001/tips');
    setTips(res.data.tips);
  };

  const handleForm = async (e) => {
    await setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/addtip', form);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(e.target.id);
    await axios.delete(`http://localhost:3001/tips/${e.target.id}`);
  };

  const handleEditClick = async (e) => {
    console.log('handleEdit is being called');
  };

  return (
    <div>
      <h1> Tips for Staying Well While Working From Home </h1>
      <TipForm onChange={handleForm} onSubmit={handleCreate} />
      {tips.map((tip) => (
        <TipCard
          key={tip.id}
          // id={tip.id}
          {...tip}
          onClick={handleDelete}
          onClickEdit={handleEditClick}
          isEditButtonClicked={false}
        />
      ))}
    </div>
  );
};

export default TipPage;
