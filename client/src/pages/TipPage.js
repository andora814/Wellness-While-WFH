import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TipCard from '../components/TipCard.js';

const TipPage = (props) => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    getTips();
  });

  const getTips = async () => {
    const res = await axios.get('http://localhost:3001/tips');
    setTips(res.data.tips);
  };

  return (
    <div>
      {tips.map((tip) => (
        <TipCard key={tip.id} {...tip} />
      ))}
    </div>
  );
};

export default TipPage;
