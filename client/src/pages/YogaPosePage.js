import React, { useState, useEffect } from 'react';
import YogaPoseCard from '../components/YogaPoseCard.js';
import axios from 'axios';
import Search from '../components/Search.js';

const YogaPosePage = (props) => {
  //   const [poses, setPoses] = useState([]);
  //   const [searchResults, setSearchResults] = useState([]);
  //   const [searched, toggleSearched] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');

  //   const filteredPoses =
  //     searchQuery.length === 0
  //       ? poses
  //       : poses.filter((pose) => pose.benefits.includes(searchQuery));

  //   useEffect(() => {
  //     getPoses();
  //   });

  //   const getPoses = async () => {
  //     const res = await axios.get('http://localhost:3001/poses');
  //     setPoses(res.data.poses);
  //   };

  //   const getSearchResults = async (e) => {
  //     e.preventDefault();
  //     setPoses(filteredPoses);
  //     toggleSearched(true);
  //     setSearchQuery('');
  //     console.log(filteredPoses);
  //     // window.location.reload();
  //   };

  // const handleChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  return (
    <div>
      <div className="search">
        <Search
          value={props.searchQuery}
          onSubmit={props.getSearchResults}
          onChange={props.handleChange}
        />
      </div>
      <div className="container-grid">
        {props.poses.map((pose) => (
          <YogaPoseCard key={pose.id} {...pose} />
        ))}
      </div>
    </div>
  );
};

export default YogaPosePage;
