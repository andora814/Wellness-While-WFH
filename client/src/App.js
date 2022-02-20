import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import { BASE_URL } from '../globals';
import TipPage from './pages/TipPage.js';
import YogaPosePage from './pages/YogaPosePage.js';
import axios from 'axios';

const App = () => {
  const [poses, setPoses] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searched, toggleSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getPoses();
  }, []);

  const getPoses = async () => {
    const res = await axios.get(`${BASE_URL}/poses`);
    setPoses(res.data.poses);
  };

  const getSearchResults = async (e) => {
    e.preventDefault();
    const filteredPoses =
      searchQuery.length === 0
        ? poses
        : poses.filter((pose) => pose.benefits.includes(searchQuery));
    setPoses(filteredPoses);
    toggleSearched(true);
    setSearchQuery('');
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/tips" component={TipPage} />
            <Route
              path="/yoga"
              render={(props) => (
                <YogaPosePage
                  {...props}
                  poses={poses}
                  searchQuery={searchQuery}
                  getSearchResults={getSearchResults}
                  handleChange={handleChange}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default App;
