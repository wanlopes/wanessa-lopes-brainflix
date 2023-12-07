import React from "react";
import Thumbnail from "./Thumbnail";
import './UploadSection.css';
import './Thumbnail.css';

function UploadSection() {
  console.log("aqui");
  return (
    <div>
        <div className="upload">
          <h1 className="upload__title">Upload Video</h1>
        </div>
        <Thumbnail />
    </div>
  );
}

export default UploadSection;
