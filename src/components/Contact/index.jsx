import React from "react";
import "./style.scss";
import contactImg from "../../assets/images/contact-image.png";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__image">
        <img src={contactImg} alt="contact" />
      </div>
      <div className="container">
        <div className="contact__content">
          <div className="contact__info">
            <h2 className="contact__title">
              Are you ready to board this rocket ship?
            </h2>
            <p className="contact__text">Share your excitement with us.</p>
            <form action="" className="contact__form">
              <input
                type="text"
                placeholder="Name*"
                className="contact__form--input"
              />
              <input
                type="email"
                placeholder="Email*"
                className="contact__form--input"
              />
              <textarea
                name="message"
                cols="0"
                rows="10"
                placeholder="Message*"
                className="contact__form--input contact__form--textarea"
              ></textarea>
              <button className="contact__form--button">
                Shoot us a message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
