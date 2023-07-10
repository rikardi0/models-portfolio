import React, { useState } from "react";
import "./Menu.css";
function Menu() {
  const [showModal, setModal] = useState(false);
  if (showModal) {
    document.body.classList.add("active-modal-contact");
  } else {
    document.body.classList.remove("active-modal-contact");
  }
  function handleClick() {
    showModal ? setModal(false) : setModal(true);
  }
  return (
    <>
      <label class="burger" for="burger">
        <input type="checkbox" id="burger" onClick={handleClick}></input>
        <span></span>
        <span></span>
        <span></span>
      </label>
      {showModal && (
        <div id="modal-overlay">
          <div id="modal-menu">
            <div id="list-links">
              <a href="/">Home</a>
              <div id="spacer-menu"></div>
              <span>Projects</span>
              <div id="list-projects">
                <a href="/dron-model" id="link-project">
                  Dron
                </a>
              </div>
              <div id="spacer-menu"></div>
              <a href="/Contact">Contact</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
