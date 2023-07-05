import React, { useState } from "react";
import List from "../../../src/assets/lists/list";
import ImageSlide from "../ui/ImageSlide.js";
import CloseTab from "../../assets/img/CloseTab";
import "./Catalogue.css";

function Catalogue() {
  const [showModal, setModal] = useState(false);
  if (showModal) {
    document.body.classList.add("active-modal-contact");
  } else {
    document.body.classList.remove("active-modal-contact");
  }
  return (
    <>
      <div id="container-catalogue" onClick={handleClick}>
        {List.map(function (element) {
          return (
            <>
              <img
                className="img-catalogue"
                key={element.alt}
                src={element.path}
                alt={element.alt}
                style={{ backgroundColor: element.color }}
              ></img>
            </>
          );
        })}
      </div>
      {showModal && (
        <div id="modal-overlay">
          <div id="modal">
            <div id="close-btn" onClick={handleClick}>
              <CloseTab />
            </div>
            <div id="modal-container-model">
              <ImageSlide />
              <a href="project-detail" id="info-container">
                <div href="project-detail" className="info-img">
                  Explore using an interactive rotating view.
                </div>
                <div className="button-info">{">"}</div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
  function handleClick() {
    if (showModal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }
}

export default Catalogue;
