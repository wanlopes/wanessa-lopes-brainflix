import Gallery from "./Gallery";
import views from "../assets/Icons/views.svg";
import likes from "../assets/Icons/likes.svg";
import Fullscreen from "../assets/Icons/fullscreen.svg";
import Play from "../assets/Icons/play.svg";

function Main() {
  return (
    <section>
      <div>
        <img src={Fullscreen} alt="fullscreen"></img>
        <img src={Play} alt="play"></img>
        <h1>BMX Rampage: 2021 Highlights</h1>
      </div>
      <div>
        <p>By Red Crow</p>
        <img src={views} alt="views"></img>
        <p>1,001,023</p>
        <p>07/11/2021</p>
        <img src={likes} alt="likes"></img>
        <p>110,985</p>
      </div>
      <div>
        <p>
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title.
        </p>
      </div>
      <div>
        <img />
      </div>
      <div>
        <button>COMMENT</button>
      </div>
      <Gallery></Gallery>
    </section>
  );
}

export default Main;
