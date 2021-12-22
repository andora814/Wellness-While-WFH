import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>Stay Well While Working From Home</h1>
      <div className="button-container">
        <Link to="/yoga">
          <button className="home-page-buttons">
            <h2>YOGA</h2>
            <img
              src="https://thumbor.granitemedia.com/crescent-moon/bFP4UB6S5HufjF1xqIXinpxLZgw=/800x800/filters:format(webp):quality(80)/granite-web-prod/4e/01/4e01a4944ea44a49aa19506a922b0ee9.jpg"
              alt="yoga pose"
            />
          </button>
        </Link>

        <Link to="/tips">
          <button className="home-page-buttons">
            <h2>TIPS</h2>
            <img
              src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQxfHx5b2dhJTIwYXQlMjBkZXNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="desk calendar"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
