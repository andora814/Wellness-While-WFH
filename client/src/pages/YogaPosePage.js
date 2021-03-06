import React, { useState, useEffect } from 'react';
import YogaPoseCard from '../components/YogaPoseCard.js';

import Search from '../components/Search.js';

const YogaPosePage = (props) => {
  return (
    <div className="yoga-page-div">
      <h1>Yoga Poses to Combat Sitting All Day</h1>
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
