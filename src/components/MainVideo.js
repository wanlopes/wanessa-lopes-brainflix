import React, { useState } from "react";
import videoDetails from "../Data/video-details.json";
import likes from "../assets/Icons/likes.svg";
import views from "../assets/Icons/views.svg";
import InputComments from "./InputComments";

const convertTimeStampToDate = (timestamp) => {
  let date = new Date(timestamp);
  return date.toLocaleDateString();
};

function MainVideo({ props }) {
  const selectedVideo = videoDetails.find(
    (videoDetail) => videoDetail.id === props.id
  );
  console.log(selectedVideo.image);
  return (
    <div className="main__video">
      <video
        className="main__video__image"
        poster={selectedVideo.image}
        controls
      >
        <source src={selectedVideo.video} type="video/mp4" />
      </video>
      <div className="main__video__headline">
        <h2 className="main__video__headline__title">{selectedVideo.title}</h2>
      </div>
      <div className="main__video__details">
        <div className="main__video__details__set">
          <div className="main__video__details__set__duo">
            <p className="main__video__details__set__duo__id">
              {selectedVideo.id}
            </p>
            <p className="main__video__details__set__duo__channel">
              {selectedVideo.channel}
            </p>
            <p className="main__video__details__set__duo__timestamp">
              {convertTimeStampToDate(selectedVideo.timestamp)}
            </p>
          </div>
          <div className="main__video__details__set__duo">
            <img
              className="main__video__details__set__duo__icon"
              src={views}
              alt=""
            />
            <p className="main__video__details__set__duo__views">
              {selectedVideo.views}
            </p>
            <img
              className="main__video__details__set__duo__icon"
              src={likes}
              alt=""
            />
            <p className="main__video__details__set__duo__likes">
              {selectedVideo.likes}
            </p>
          </div>
        </div>
        <div className="main__video__details__paragraph">
          <p className="main__video__details__paragraph__description">
            {selectedVideo.description}
          </p>
        </div>
      </div>
      {selectedVideo.comments.map((comment) => (
        <div className="main__video__comments">
          <div className="main__video__comments__placeholder"></div>
          <div className="main__video__comments__items">
            <p className="main__video__comments__items__name">{comment.name}</p>
            <p className="main__video__comments__items__timestamp">
              {convertTimeStampToDate(comment.timestamp)}
            </p>
          </div>
          <p className="main__video__comments__comment">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
  <InputComments/>
}

export default MainVideo;
