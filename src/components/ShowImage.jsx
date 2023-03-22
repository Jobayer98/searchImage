import React from "react";

const ShowImage = ({ urls, description }) => {
  const { small } = urls;
  return (
    <figure>
      <img src={small} alt={description} />
    </figure>
  );
};

export default ShowImage;
