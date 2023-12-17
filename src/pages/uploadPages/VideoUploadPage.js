import React from "react";
// import Header from "./Header";
import UploadSection from "./UploadSection";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function VideoUploadPage() {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmission = (event) => {
    event.preventDefault();
    alert("Upload done");
    navigate("/");
  };

  return (
    <>
      <section>
        {uploadSuccess ? (
          <h1>AAAAAAAAAAAAAAAAA</h1>
        ) : (
          <UploadSection handleFormSubmission={handleFormSubmission} />
        )}
      </section>
    </>
  );
}

export default VideoUploadPage;
