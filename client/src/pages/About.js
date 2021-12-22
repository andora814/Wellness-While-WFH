import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Me</h1>{' '}
      <img src="https://i.imgur.com/6ovHBMm.jpg" alt="professional photo"></img>
      <p>
        Hi, I'm Doran! I have worked at a full time desk job for the past 13
        years, but have been working from home since March of 2020. I am also a
        certified yoga teacher, and taught a few classes a week prior to the
        pandemic. Due to personal experience, I know how important it is to
        focus on wellness while working from home. Taking time for yourself,
        stepping away from the computer, and incorporating these yoga poses into
        your daily routine will greatly benefit your mental, physical and
        emotional health. Enjoy!
      </p>
      <section className="about-me-image-container">
        <img
          src="https://i.imgur.com/PJBYgxH.jpg"
          alt="yoga pose in belize"
        ></img>
      </section>
    </div>
  );
};

export default About;
