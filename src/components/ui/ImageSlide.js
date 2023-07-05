import React from "react";
import { Slide } from "react-slideshow-image";
import slideImages from "../../assets/lists/list";
import "react-slideshow-image/dist/styles.css";
import "./ImageSlide.css";

function ImageSlide() {
  return (
    <Slide indicators={false} autoplay={false}>
      {slideImages.map((slideImage, index) => (
        <div key={index}>
          <img
            className="img-slide"
            src={slideImage.path}
            alt={slideImage.alt}
          ></img>
        </div>
      ))}
    </Slide>
  );
}

export default ImageSlide;
