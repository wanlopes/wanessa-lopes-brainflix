import React, { useState } from "react";
import videoDetails from "../Data/video-details.json";

function MainVideo({ props }) {
  // const details = videoDetails;
  const selectedVideo = videoDetails.find(
    (videoDetail) => videoDetail.id === props.id
  );
  return (
    <div className="main__video">
      {/* <img className="main__video__image" src={video.image} alt=""></img> */}
      <video
        className="main__video__image"
        placeholder={selectedVideo.image}
        controls
      >
        <source src={selectedVideo.video} type="video/mp4" />
      </video>
      <div className="main__video__headline">
        <h2 className="main__video__headline__title">{selectedVideo.title}</h2>
      </div>
      <p className="main__video__id">{selectedVideo.id}</p>
      <p className="main__video__channel">{selectedVideo.channel}</p>
      <p className="main__video__description">{selectedVideo.description}</p>
      <p className="main__video__views">{selectedVideo.views}</p>
      <p className="main__video__likes">{selectedVideo.likes}</p>
      <p className="main__video__timestamp">{selectedVideo.timestamp}</p>
    </div>
  );
}

export default MainVideo;
