import React, { useState } from "react";
import ContactSection from "../contact/Contact.js";
import "./Footer.css";

function Footer() {
  const [showModalContact, setModal] = useState(false);
  if (showModalContact) {
    document.body.classList.add("active-modal-contact");
  } else {
    document.body.classList.remove("active-modal-contact");
  }
  function handleClick() {
    if (showModalContact) {
      setModal(false);
    } else {
      setModal(true);
    }
  }
  return (
    <>
      <div className="contact-title" onClick={handleClick}>
        <span>Contact us for any questions</span>
        <div className="button-container">{">"}</div>
      </div>
      {showModalContact && (
        <div id="modal-container-contact">
          <div onClick={handleClick} id="modal-contact-overlay"></div>
          <div id="modal-contact">
            <ContactSection />
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
