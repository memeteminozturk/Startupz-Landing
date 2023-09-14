import React from "react";
import "./style.scss";
import tolqImg from "../../assets/images/tolq.png";
import fbLabsImg from "../../assets/images/fb-labs.png";
import codekeeperImg from "../../assets/images/codekeeper.png";
import legalsiteImg from "../../assets/images/legalsite.png";

const Works = () => {
  const works = [
    {
      title: "Tolq",
      text: "Tolq is the translation solution built for e-commerce.It provides all pieces of the localization puzzle in one single integrated solution.",
      image: tolqImg,
      alt: "Tolq",
      titleColor: "#A9BC87",
    },
    {
      title: "Feedback Labs",
      text: "Feedback Labs turns feedback into actionable insights for your team.",
      image: fbLabsImg,
      alt: "Feedback Labs",
      titleColor: "#8BB5C9",
    },
    {
      title: "Codekeeper",
      text: "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
      image: codekeeperImg,
      alt: "Codekeeper",
      titleColor: "#00A0B6",
    },
    {
      title: "Legalsite",
      text: "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
      image: legalsiteImg,
      alt: "Legalsite",
      titleColor: "#8B60D3",
    },
  ];

  return (
    <section className="works" id="works">
      <div className="container">
        <div className="works__header">
          <h2 className="works__header--title title">Our works</h2>
        </div>
        <div className="works__list">
          {works.map((work, index) => (
            <div className="works__list--item" key={index}>
              <div className="works__list--item-content">
                <h3
                  className="works__list--item-title"
                  style={{ color: work.titleColor }}
                >
                  {work.title}
                </h3>
                <p className="works__list--item-text">{work.text}</p>
              </div>
              <div className="works__list--item-image">
                <img src={work.image} alt={work.alt} />
              </div>
              <div className="works__list--item-footer">
                <a href="/" className="works__list--item-footer-button">
                  More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
