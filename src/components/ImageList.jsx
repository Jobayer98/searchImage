import React from "react";
import ShowImage from "./ShowImage";
import "./ImageList.css";

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <ShowImage
          key={image.id}
          urls={image.urls}
          description={image.alt_description}
        />
      ))}
    </div>
  );
};
export default ImageList;
