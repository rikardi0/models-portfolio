import React from "react";
import { useForm } from "@formspree/react";
import "./Contact.css";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xleyergl");
  if (state.succeeded) {
    return <div id="succes-message">Thank you for message!</div>;
  }

  return (
    <div className="contact-section">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" type="text" name="message" />
          </div>
          <button id="btn" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
      <div className="contact-divider">
        <span>Or</span>
      </div>
      <div className="social-links">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
