import React, { useState } from "react";

function MainVideo({ video }) {
  return (
    <div className="main__video">
      <img className="main__video__image" src={video.image} alt=""></img>
      <video>
        <source />
      </video>
      <div className="main__video__headline">
        <h2 className="main__video__headline__title">{video.title}</h2>
      </div>
      <p>{video.channel}</p>
    </div>
  );
}

export default MainVideo;
