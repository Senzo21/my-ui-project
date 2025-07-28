import React from 'react';
import './Home.css';
import heroImage from '../images/hero.jpeg'; // Import image

const Home = () => {
  return (
    <div className="home">
      <header className="navbar">
        <h1 className="brand">HYKROX</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Designs</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>We Are <span>Creative</span> Designers</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </div>
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${heroImage})` }}  // Inline background image
        />
      </section>

      <section className="services">
        <h2>What We <span>Do?</span></h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        <div className="service-cards">
          <div className="card">Website Design</div>
          <div className="card">Mobile & Desktop App</div>
          <div className="card">UI & UX Design</div>
          <div className="card">Editing Photo</div>
        </div>
      </section>

      <section className="about">
        <h2>Who Are <span>We?</span></h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        <div className="about-details">
          <div>Clean Code</div>
          <div>Modern Design</div>
        </div>
      </section>

      <footer className="footer">
        <div className="stats">
          <div><strong>300+</strong> Project</div>
          <div><strong>8.9</strong> Pleasure</div>
          <div><strong>3000+</strong> Customer</div>
          <div><strong>23</strong> Team Members</div>
        </div>
        <p>Design by HYKROX</p>
      </footer>
    </div>
  );
};

export default Home;
