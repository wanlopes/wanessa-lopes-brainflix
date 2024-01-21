import Gallery from "../../components/Gallery/Gallery";
import MainVideo from "../../components/MainVideo/MainVideo";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

// const baseURL = process.env.REACT_APP_BASE_URL;

function Main() {
  const defaultVideo = { id: "84e96018-4022-434e-80bf-000ce4cd12b8" };
  const [firstVideo, setFirstVideo] = useState(defaultVideo);
  const [searchParams, setSearchParams] = useSearchParams();
  const videoId = searchParams.get("videoId");

  console.log("VIDEO ID: " + videoId);

  useEffect(() => {
    axios
      .get("http://localhost:3001/videos")
      .then((response) => {
        setFirstVideo(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="main">
      <MainVideo props={firstVideo} setFirstVideo={setFirstVideo} />
      <Gallery
        setFirstVideo={setFirstVideo}
        firstVideo={firstVideo}
        className="main__video__comments"
      ></Gallery>
    </section>
  );
}

export default Main;
