import React from 'react';
import './About.css';
import teamImage from '../assets/images/team.png'; // Ensure you have this image
import missionImage from '../assets/images/mission.png'; // Ensure you have this image

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Waqq.ly</h1>
        <p>Your trusted partner in dog walking services.</p>
      </section>
      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <img src={missionImage} alt="Our Mission" className="about-image" />
          <p>
            At Waqq.ly, our mission is to connect dog owners with reliable and experienced dog walkers. We understand the importance of providing your furry friends with the best care possible. Our platform ensures that every dog gets the exercise and attention they need, even when you are not available.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Team</h2>
          <img src={teamImage} alt="Our Team" className="about-image" />
          <p>
            Waqq.ly is built by a team of passionate dog lovers and technology enthusiasts. We are dedicated to creating a seamless experience for both dog owners and dog walkers. Our team works tirelessly to ensure that every interaction on our platform is safe, secure, and enjoyable.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
