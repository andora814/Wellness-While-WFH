import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../globals';
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
    const res = await axios.get(`${BASE_URL}/tips`);
    setTips(res.data.tips);
  };

  const handleForm = async (e) => {
    await setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await axios.post(`${BASE_URL}/addtip`, form);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete(`${BASE_URL}/tips/${e.target.id}`);
  };

  return (
    <div className="tip-div">
      <section>
        <h1> Tips and Best Practices </h1>

        <TipForm onChange={handleForm} onSubmit={handleCreate} />
        <section className="tip-container">
          {tips.map((tip) => (
            <TipCard
              key={tip.id}
              {...tip}
              onClick={handleDelete}
              isEditButtonClicked={false}
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export default TipPage;
