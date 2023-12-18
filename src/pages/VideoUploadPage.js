import React from "react";
import UploadSection from "../../src/components/UploadSectionComponent/UploadSection";
import { useNavigate } from "react-router-dom";

function VideoUploadPage() {
  const navigate = useNavigate();

  const handleFormSubmission = (event) => {
    event.preventDefault();
    alert("Upload done");
    navigate("/");
  };

  return (
      <section>
        <UploadSection handleFormSubmission={handleFormSubmission} />
      </section>
  );
}

export default VideoUploadPage;
