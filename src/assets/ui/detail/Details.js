import React, { Component } from "react";
import image from "../../img/index.js";
import "./Details.css";
import Menu from "../menu/menu.js";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: props.element,
      description: props.description,
    };
  }

  render() {
    return (
      <>
        <div id="black-spacer">
          <Menu />
        </div>
        <div>{this.state.element}</div>

        <div id="white-spacer"></div>
        <div id="orange-spacer"></div>
        <div id="description-text">
          {this.state.description.map(function (element, index) {
            return (
              <div key={index}>
                <div className="description-content">
                  {element.introduction}
                </div>
                <img
                  id="exploded-img"
                  src={image.dron}
                  alt="exploded vision of model"
                ></img>
                <div className="description-content">{element.description}</div>
                <div className="description-content">{element.download}</div>
              </div>
            );
          })}
          <button id="btn-details"> Get Files</button>
        </div>
      </>
    );
  }
}

export default Details;
