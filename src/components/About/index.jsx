import React from "react";
import "./style.scss";
import aboutImage from "../../assets/images/about-shape.png";

const About = () => {
  const about = [
    "We develop innovative products, systems and services",
    "Next we build teams to scale them into companies",
    "Each startup solving one problem at a time",
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="about__image">
          <img src={aboutImage} alt="about" />
        </div>
        <div className="about__content">
          <div className="about__header">
            <h2 className="about__header--title title">Who we are</h2>
            <p className="about__header--text text">
              We create products that have innovation and technology at their
              core.
            </p>
            <p className="about__text text">
              We value working with talented people that understand the
              possibilities of today.
            </p>
          </div>
          <div className="about__body">
            <div className="about__list">
              {about.map((item, index) => (
                <div className="about__list--item" key={index}>
                  <span className="about__list--item-number">
                    {index <= 9 ? `0${index + 1}` : index + 1}
                  </span>
                  <p className="about__list--item-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
