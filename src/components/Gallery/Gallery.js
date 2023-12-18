import VideoSumary from "../VideoSumary/VideoSumary";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Gallery.css";


function Gallery({ setFirstVideo, firstVideo }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=c7e27a6d-5f33-4cbc-b007-1c1288b3cb3f"
      )
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos: ", error);
      });
  }, []);

  return (
    <aside className="gallery">
      <section className="gallery__section">
        <div className="gallery__section__headline">
          <h2 className="gallery__section__headline__title">NEXT VIDEOS</h2>
        </div>
        <div className="gallery__section__playlist">
          {videos
            .filter((video) => video.id !== firstVideo.id)
            .map((video) => (
              <a onClick={() => setFirstVideo(video)}>
                <VideoSumary
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  channel={video.channel}
                  image={video.image}
                />
              </a>
            ))}
        </div>
      </section>
    </aside>
  );
}

export default Gallery;
