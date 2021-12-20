import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>
        In 2020, many of us were forced to work from home due to COVID-19. As a
        result, companies are re-evaluating the “future of work”, and remote
        work will most likely become part of our new normal. It is so easy for
        “working from home” to feel like “living at work”, which makes self-care
        extremely important. Please take advantage of this site as a way to stay
        healthy, happy and productive!
      </h2>
      <div className="button-container">
        <button className="home-page-buttons">
          <h1>YOGA</h1>
          <img src="https://images.unsplash.com/photo-1586035758264-c5c685f55e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1lZGl0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
        </button>
        <button className="home-page-buttons">
          <Link to="/tips">TIPS</Link>
          {/* HOW DO I PUT THE LINK ON THE WHOLE BUTTON INSTEAD OF JUST THE TEXT? look at RAWG for reference */}
          <img src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQxfHx5b2dhJTIwYXQlMjBkZXNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </button>
      </div>
    </div>
  );
};

export default About;
