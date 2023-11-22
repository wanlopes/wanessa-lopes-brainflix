import Gallery from "./Gallery";
import avatar from "../assets/Images/Mohan-muruge.jpg";
import MainVideo from "./MainVideo";
import { useState } from "react";
import videosData from "../Data/videos.json";
// import views from "../assets/Icons/views.svg";
// import likes from "../assets/Icons/likes.svg";
// import Fullscreen from "../assets/Icons/fullscreen.svg";
// import Play from "../assets/Icons/play.svg";
// import CommentsSection from "./CommentsSection";

function Main() {
  const defaultVideo = { title: "Lilly", channel: "Wanessa" };
  const [firstVideo, setFirstVideo] = useState(videosData[0]);
  return (
    <section className="main">
      <MainVideo video={firstVideo} />
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
              COMMENT
            </button>
          </div>
        </div>
      </div>
      {/* <CommentsSection></CommentsSection> */}
      <Gallery setFirstVideo={setFirstVideo}></Gallery>
    </section>
  );
}

export default Main;
