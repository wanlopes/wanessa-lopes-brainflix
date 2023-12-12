import React, { useEffect, useState } from "react";
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

function MainVideo({ setFirstVideo, props }) {
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${props.id}?api_key=c7e27a6d-5f33-4cbc-b007-1c1288b3cb3f`
      )
      .then((response) => {
        setVideoDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.id]);

  if (videoDetails == null) {
    <h1>LOADING</h1>;
  } else {
    return (
      <div className="main__video">
        <video
          className="main__video__image"
          poster={videoDetails.image}
          controls
        >
          <source src={videoDetails.video} type="video/mp4" />
        </video>
        <div className="main__video__headline">
          <h2 className="main__video__headline__title">{videoDetails.title}</h2>
        </div>
        <div className="main__video__details">
          <div className="main__video__details__set">
            <div className="main__video__details__set__left">
              <p className="main__video__details__set__left__id">
                {videoDetails.id}
              </p>
              <p className="main__video__details__set__left__channel">
                By {videoDetails.channel}
              </p>
              <p className="main__video__details__set__left__timestamp">
                {convertTimeStampToDate(videoDetails.timestamp)}
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
                  {videoDetails.views}
                </p>
              </div>
              <div className="main__video__details__set__right__duo">
                <img
                  className="main__video__details__set__right__duo__icon"
                  src={likes}
                  alt=""
                />
                <p className="main__video__details__set__right__duo__likes">
                  {videoDetails.likes}
                </p>
              </div>
            </div>
          </div>
          <div className="main__video__details__paragraph">
            <p className="main__video__details__paragraph__description">
              {videoDetails.description}
            </p>
          </div>
          <div className="main__video__details__div">
            <p className="main__video__details__div__length">
              {videoDetails.comments.length} Comments
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
        {videoDetails.comments.map((comment) => (
          <div key={comment.id} className="main__video__comments">
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
              <div className="main__video__comments__items__line"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default MainVideo;
