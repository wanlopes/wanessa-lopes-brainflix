import React, { useState } from "react";
// import videoDetails from "../Data/video-details.json";
import likes from "../assets/Icons/likes.svg";
import views from "../assets/Icons/views.svg";
import InputComments from "./InputComments";
import addcomment from "../assets/Icons/add_comment.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";
import axios from "axios";

const convertTimeStampToDate = (timestamp) => {
  let date = new Date(timestamp);
  return date.toLocaleDateString();
};

const retrieveVideoDetails = (id, setFirstVideo) => {
  console.log(
    "https://project-2-api.herokuapp.com/videos/" +
      id +
      "?api_key=c7e27a6d-5f33-4cbc-b007-1c1288b3cb3f"
  );
  let dataApi = {};
  axios
    .get(
      "https://project-2-api.herokuapp.com/videos/" +
        id +
        "?api_key=c7e27a6d-5f33-4cbc-b007-1c1288b3cb3f"
    )
    .then((response) => {
      console.log(response);
      console.log(response.data);
      dataApi = response.data;
      setFirstVideo({ dataApi });
    })
    .catch((error) => {
      console.error(error);
    });
  return dataApi;
};

function MainVideo({ setFirstVideo, props }) {
  const selectedVideo = retrieveVideoDetails(props.id, setFirstVideo);
  retrieveVideoDetails(props.id);
  console.log(props.id);
  console.log(selectedVideo);
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
          <div className="main__video__details__set__left">
            <p className="main__video__details__set__left__id">
              {selectedVideo.id}
            </p>
            <p className="main__video__details__set__left__channel">
              By {selectedVideo.channel}
            </p>
            <p className="main__video__details__set__left__timestamp">
              {convertTimeStampToDate(selectedVideo.timestamp)}
            </p>
          </div>
          <div className="main__video__details__set__right">
            <div className="main__video__details__set__right__duo">
              <img
                className="main__video__details__set__right__duo__icon"
                src={views}
                alt=""
              />
              <p className="main__video__details__set__right__duo__views">
                {selectedVideo.views}
              </p>
            </div>
            <div className="main__video__details__set__right__duo">
              <img
                className="main__video__details__set__right__duo__icon"
                src={likes}
                alt=""
              />
              <p className="main__video__details__set__right__duo__likes">
                {selectedVideo.likes}
              </p>
            </div>
          </div>
        </div>
        <div className="main__video__details__paragraph">
          <p className="main__video__details__paragraph__description">
            {selectedVideo.description}
          </p>
        </div>
        <div className="main__video__details__div">
          <p className="main__video__details__div__length">
            {selectedVideo.comments.length} Comments
          </p>
        </div>
      </div>
      <div className="main__section">
        <div className="main__section__div">
          <h2 className="main__section__div__title">JOIN THE CONVERSATION</h2>
        </div>
        <div className="main__section__elements">
          <div className="main__section__elements__cont">
            <div className="main__section__elements__cont__avatar">
              <img
                className="main__section__elements__cont__avatar__image"
                src={avatar}
                alt=""
              />
            </div>
            <div>
              <form className="main__section__elements__cont__form">
                <input
                  className="main__section__elements__cont__form__text"
                  type="text"
                  placeholder="Add a new comment"
                />
              </form>
            </div>
          </div>
          <div className="main__section__elements__btn">
            <button className="main__section__elements__btn__comment">
              <div className="main__section__elements__btn__comment__pack">
                <div className="main__section__elements__btn __comment__pack__icon">
                  <img src={addcomment} alt="" />
                </div>
                <div className="main__section__elements__btn__comment__pack__text">
                  COMMENT
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* <CommentsSection></CommentsSection> */}
      {selectedVideo.comments.map((comment) => (
        <div className="main__video__comments">
          <div className="main__video__comments__div">
            <div className="main__video__comments__div__placeholder"></div>
          </div>
          <div className="main__video__comments__items">
            <div className="main__video__comments__items__block">
              <p className="main__video__comments__items__block__name">
                {comment.name}
              </p>
              <p className="main__video__comments__items__block__timestamp">
                {convertTimeStampToDate(comment.timestamp)}
              </p>
            </div>
            <div></div>
            <p className="main__video__comments__items__comment">
              {comment.comment}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainVideo;
