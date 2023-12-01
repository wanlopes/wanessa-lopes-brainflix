import Gallery from "./Gallery";
import avatar from "../assets/Images/Mohan-muruge.jpg";
import MainVideo from "./MainVideo";
import { useState } from "react";
import videosData from "../Data/videos.json";
// import CommentButton from "./CommentButton";
import addcomment from "../assets/Icons/add_comment.svg";
// import videodetails from "../Data/video-details.json";
// import CommentsSection from "./CommentsSection";

function Main() {
  const defaultVideo = { title: "Lilly", channel: "Wanessa" };
  const [firstVideo, setFirstVideo] = useState(videosData[0]);
  // console.log(firstVideo);
  return (
    <section className="main">
      <MainVideo props={firstVideo} />
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
                <input type="text" placeholder="Add a new comment" />
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
      <Gallery
        setFirstVideo={setFirstVideo}
        firstVideo={firstVideo}
        className="main__video__comments"
      ></Gallery>
    </section>
  );
}

export default Main;
