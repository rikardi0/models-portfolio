import React from "react";
import DronElement from "../../assets/3D-Model/Dron/DronElement.js";
import Details from "../../assets/ui/detail/Details.js";
function DronDetails() {
  let description = [
    {
      introduction:
        "Immerse yourself in this advanced drone model. Each component has been meticulously crafted to capture the essence of innovation and authenticity.",
      description:
        "From the intricately propellers to the detailed frame, this model was built and render using the SOLIDWORKS software and showcases a high-quality and realistic 3D representation.",
      download: "If you are interested in this model, download files here.",
    },
  ];

  return <Details element={<DronElement />} description={description} />;
}

export default DronDetails;
