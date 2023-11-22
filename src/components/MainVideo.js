import React, { useState } from "react";

function MainVideo({ video }) {
  return (
    <div className="main__video">
      <img className="sumary__wrap__image" src={video.image} alt=""></img>
      <video>
        <source />
      </video>
      <h2>{video.title}</h2>
      <p>{video.channel}</p>
    </div>
  );
}

export default MainVideo;
