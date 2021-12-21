import React, { useState, useEffect } from 'react';
import YogaPoseCard from '../components/YogaPoseCard.js';
import axios from 'axios';

const YogaPosePage = () => {
  const [yogaPoses, setYogaPoses] = useState([]);
  const [selectedYogaPose, setSelectedYogaPose] = useState(null);

  useEffect(() => {
    const getYogaPoses = async () => {
      const res = await axios.get('YOGA API URL');
      console.log(res);
    };
  });
  return <div>This is the Yoga Pose Page</div>;
};

export default YogaPosePage;
