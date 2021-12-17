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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('localhost:3001/addtip', form);
    console.log('the post request is working, hopefully');
  };

  return (
    <div>
      <TipForm onChange={handleChange} onSubmit={handleSubmit} />
      {tips.map((tip) => (
        <TipCard key={tip.id} {...tip} />
      ))}
    </div>
  );
};

export default TipPage;
