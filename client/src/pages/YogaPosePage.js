import React, { useState, useEffect } from 'react';
import YogaPoseCard from '../components/YogaPoseCard.js';
import axios from 'axios';
import Search from '../components/Search.js';

const YogaPosePage = (props) => {
  const [poses, setPoses] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searched, toggleSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getPoses();
  });

  const getPoses = async () => {
    const res = await axios.get('http://localhost:3001/poses');
    setPoses(res.data.poses);
  };

  // const getSearchResults = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.get(`http://localhost:3001/poses`);
  //   setSearchResults(res.data.results);
  //   toggleSearched(true);
  //   setSearchQuery('');
  // };

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
    console.log(filteredPoses);
  };

  const filteredPoses =
    searchQuery.length === 0
      ? poses
      : poses.filter((pose) => pose.benefits.includes(searchQuery));

  return (
    <div>
      <div className="search">
        <Search
          value={searchQuery}
          // onSubmit={getSearchResults}
          onChange={handleChange}
        />
      </div>
      <div className="container-grid">
        {poses.map((pose) => (
          <YogaPoseCard key={pose.id} {...pose} poses={filteredPoses} />
        ))}
      </div>
    </div>
  );
};

export default YogaPosePage;
