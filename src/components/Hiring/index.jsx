import React from "react";
import "./style.scss";
import hiringLeftImg from "../../assets/images/hire-left.png";
import hiringRightImg from "../../assets/images/hire-right.png";

const Hiring = () => {
  return (
    <section className="hiring" id="hiring">
      <div className="hiring__images">
        <div className="hiring__images--left">
          <img src={hiringLeftImg} alt="Hiring" />
        </div>
        <div className="hiring__images--right">
          <img src={hiringRightImg} alt="Hiring" />
        </div>
      </div>
      <div className="container">
        <div className="hiring__content">
          <h2 className="hiring__title title">We are hiring!</h2>
          <p className="hiring__hiring__text text">
            We're always looking for talented people to join and help build our
            startups. Check out our current openings
          </p>
          <a href="#" className="hiring__link">
            See current openings
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hiring;
