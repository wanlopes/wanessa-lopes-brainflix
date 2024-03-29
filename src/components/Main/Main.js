import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import MainVideo from "../../components/MainVideo/MainVideo";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function Main() {
  const defaultVideo = { id: "84e96018-4022-434e-80bf-000ce4cd12b8" };
  const [firstVideo, setFirstVideo] = useState(defaultVideo);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get("http://localhost:3001/videos")
      .then((response) => {
        setFirstVideo(response.data[0]);
      })
      .catch((error) => {
        console.error("Error when fetching videos", error);
      });
  }, []);
  return (
    <section className="main">
      <MainVideo props={firstVideo} setFirstVideo={setFirstVideo} />
        {/* <Route path="/videos/:id" element={<MainVideo />} /> */}
      <Gallery
        setFirstVideo={setFirstVideo}
        firstVideo={firstVideo}
        className="main__video__comments"
      ></Gallery>
    </section>
  );
}

export default Main;
