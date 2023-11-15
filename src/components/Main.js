import Gallery from "./Gallery";
import views from "../assets/Icons/views.svg";
import likes from "../assets/Icons/likes.svg";
import Fullscreen from "../assets/Icons/fullscreen.svg";
import Play from "../assets/Icons/play.svg";
import CommentsSection from "./CommentsSection";


function Main() {
  return (
    <section className="main">
      <div className="main__container">
        <img src={Fullscreen} alt=""></img>
        <img src={Play} alt="play"></img>
        <div className="main__container__header">
          <h1 className="main__container__header__title">
            BMX Rampage: 2021 Highlights
          </h1>
        </div>
      </div>
      <div className="main__info">
        <p className="main__info__by">By Red Crow</p>
        <div className="main__info__box">
          <img className="main__info__box__view" src={views} alt="views"></img>
          <p className="main__info__box__viewrs">1,001,023</p>
        </div>
        <p className="main__info__time">07/11/2021</p>
        <div class="main__info__duo">
          <img className="main__info__duo__like" src={likes} alt="likes"></img>
          <p className="main__info__duo__likers">110,985</p>
        </div>
      </div>
      <div className="main__text">
        <p className="main__text__paragraph">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title.
        </p>
        <div className="main__text__comm">
          <p>3 Comments</p>
        </div>
      </div>
      <div className="main__section">
        <div className="main__section__div">
          <h2 className="main__section__div__title">JOIN THE CONVERSATION</h2>
        </div>
        <div className="main__section__">
          <div className="main__section__avatar">
            <img alt="" />
          </div>
          <div>
            <form>
              <input type="text" placeholder="Add a new comment" />
            </form>
          </div>
        </div>
        <div className="main__section__btn">
          <button className="main__section__btn__comment">COMMENT</button>
        </div>
      </div>
      <CommentsSection></CommentsSection>
      <Gallery></Gallery>
    </section>
  );
}

export default Main;
