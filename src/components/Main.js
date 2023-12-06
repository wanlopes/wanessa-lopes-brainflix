import Gallery from "./Gallery";
import MainVideo from "./MainVideo";
import { useEffect, useState } from "react";
import videosData from "../Data/videos.json";
import axios from "axios";
import { response } from "express";

const setVideos = 

function Main() {
  const defaultVideo = { title: "title", channel: "channel" };
  const [firstVideo, setFirstVideo] = useState(videosData[0]);
  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=c7e27a6d-5f33-4cbc-b007-1c1288b3cb3f"
      )
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
