import Gallery from "./Gallery";
import MainVideo from "./MainVideo";
import { useState } from "react";
import videosData from "../Data/videos.json";

function Main() {
  const defaultVideo = { title: "title", channel: "channel" };
  const [firstVideo, setFirstVideo] = useState(videosData[0]);
  return (
    <section className="main">
      <MainVideo props={firstVideo} />
      <Gallery
        setFirstVideo={setFirstVideo}
        firstVideo={firstVideo}
        className="main__video__comments"
      ></Gallery>
    </section>
  );
}

export default Main;
