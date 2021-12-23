import React from 'react';

const About = () => {
  return (
    <div className="page-div">
      <h1>About Me</h1>
      <section className="about-me">
        <section className="about-me-image-container">
          <img
            src="https://i.imgur.com/6ovHBMm.jpg"
            alt="professional photo"
          ></img>
        </section>
        <section className="about-me-description">
          <h2>
            In 2020, many of us were forced to work from home due to COVID-19.
            As a result, companies are re-evaluating the “future of work”, and
            remote work will likely become part of our new normal. It is so easy
            for “working from home” to feel like “living at work”, which makes
            self-care extremely important.
            <br></br>
            <br></br>
            Hi, I'm Doran! I have worked at a full time desk job for the past 13
            years, but have been working from home since March of 2020. I am
            also a certified yoga teacher, and taught a few classes a week prior
            to the pandemic. Due to personal experience, I know that a lack of
            self-care during these unprecedented times will lead to fatigue,
            severe stress, and eventually burn out. Taking time for yourself,
            stepping away from the computer, and incorporating these yoga poses
            into your daily routine will greatly benefit your mental, physical
            and emotional health.
            <br></br>
            <br></br>
            Please take advantage of this site as a way to stay healthy, happy
            and productive!
          </h2>
        </section>
      </section>
    </div>
  );
};

export default About;
