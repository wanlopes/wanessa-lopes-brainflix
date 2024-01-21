import React, { useEffect, useState } from "react";
import likes from "../../assets/Icons/likes.svg";
import views from "../../assets/Icons/views.svg";
import InputComments from "../../components/InputComments/InputComments";
import axios from "axios";
import "./MainVideo.css";

const convertTimeStampToDate = (timestamp) => {
  let date = new Date(timestamp);
  return date.toLocaleDateString();
};

function MainVideo({ setFirstVideo, props }) {
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/videos/${props.id}`)
      .then((response) => {
        setVideoDetails(response.data);
      })
      .catch((error) => {
        return "Error";
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
        <InputComments videoId={videoDetails.id} />

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
        <div className="main__video__line"></div>
      </div>
    );
  }
}
export default MainVideo;
