import React from "react";
import "./style.scss";
import valuesImg from "../../assets/images/values-image.png";

const Values = () => {
  const values = [
    {
      title: "Innovation",
      text: "Startupz operates where entrepreneurship  technology intersect. We design solutions and turn them into businesses models.",
    },
    {
      title: "People",
      text: "Talent is what enable us to create great companies.",
    },
  ];

  return (
    <section className="values" id="values">
      <div className="container">
        <div className="values__image">
          <img src={valuesImg} alt="values" />
        </div>
        <div className="values__content">
          <div className="values_header">
            <h2 className="values_title title">Our core values</h2>
          </div>
          <div className="values__list">
            {values.map((value, index) => (
              <div className="values__list--item" key={index}>
                <h3 className="values__list--item-title">
                {index < 9 ? `0${index + 1}` : index + 1}. {value.title} 
                </h3>
                <p className="values__list--item-text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
