import React from "react";
// import Header from "./Header";
import UploadSection from "./UploadSection";
import { Link } from "react-router-dom";
import { useState } from "react";

function VideoUploadPage() {
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFormSubmission = (event) => {
    event.preventDefault();
    setUploadSuccess(true);
  };

  return (
    <>
      <section>
        {!uploadSuccess ? (
          <UploadSection handleFormSubmission={handleFormSubmission} />
        ) : (
          <Link to="/" />
        )}
      </section>
    </>
  );
}

export default VideoUploadPage;
