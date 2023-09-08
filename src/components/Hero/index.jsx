import React from "react";
import "./style.scss";
import HeroImage from "../../assets/images/hero-image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image">
        <img src={HeroImage} alt="Hero Image" />
      </div>
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__content--title title">
            We Create <br /> Startups.
          </h1>
          <p className="hero__content--description text">
            We are startup studio that develops and launches new companies.
          </p>
          <a href="#" className="hero__content--button">
            See our works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
