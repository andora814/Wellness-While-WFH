import React, { useState, useEffect } from 'react';
import YogaPoseCard from '../components/YogaPoseCard.js';
import axios from 'axios';

const YogaPosePage = (props) => {
  const [poses, setPoses] = useState([]);
  const [selectedYogaPose, setSelectedYogaPose] = useState(null);

  useEffect(() => {
    getPoses();
  });

  const getPoses = async () => {
    const res = await axios.get('http://localhost:3001/poses');
    console.log(res.data.poses);
    setPoses(res.data.poses);
  };
  return (
    <div className="container-grid">
      {poses.map((pose) => (
        <YogaPoseCard key={pose.id} {...pose} />
      ))}
    </div>
  );
};

export default YogaPosePage;
