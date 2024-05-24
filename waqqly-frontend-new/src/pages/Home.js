import React from 'react';
import './Home.css';
import heroImage from '../assets/images/hero.png'; // Ensure you have this image
import aboutImage from '../assets/images/about.png'; // Ensure you have this image

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Waqq.ly</h1>
          <p>Connecting dog owners with trusted dog walkers in your area.</p>
        </div>
      </section>
      <section className="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Waqq.ly is a platform designed to help dog owners find reliable and experienced dog walkers. Whether you need someone to take your furry friend for a walk while you're at work or require regular walking services, Waqq.ly has you covered.
          </p>
        </div>
        <img src={aboutImage} alt="About Us" className="about-image" />
      </section>
    </div>
  );
};

export default Home;