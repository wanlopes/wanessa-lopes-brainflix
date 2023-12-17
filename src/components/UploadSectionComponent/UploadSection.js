import React from "react";
import Thumbnail from "../ThumbnailComponent/Thumbnail";
import "./UploadSection.css";

function UploadSection({ handleFormSubmission }) {
  return (
    <div>
      <div className="upper-line"></div>
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
      </div>
      <div className="upload-line"></div>
      <Thumbnail handleFormSubmission={handleFormSubmission} />
    </div>
  );
}

export default UploadSection;
