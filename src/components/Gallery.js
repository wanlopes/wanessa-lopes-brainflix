import VideoSumary from "./VideoSumary";
import videosData from "../Data/videos.json";

function Gallery() {
  const videos = [...videosData];

  return (
    <aside className="gallery">
      <section>
        {videos.map((props) => (
          <VideoSumary
            id={props.id}
            title={props.title}
            channel={props.channel}
            image={props.image}
          />
        ))}
      </section>
      <div className="gallery__header">
        <h3 className="gallery__header__title">Next Videos</h3>
      </div>
      <div>
        <div>
          <video></video>
          <p>Become A Travel Pro In One Easy Lesson</p>
          <p>Todd Welch</p>
        </div>
        <div>
          <video></video>
          <p>Les Houches The Hidden Gem Of The Chamonix</p>
          <p>Cornelia Blair</p>
        </div>
        <div>
          <video></video>
          <p>Travel Health Useful Medical Information For</p>
          <p>Glen Harper</p>
        </div>
        <div>
          <video></video>
          <p>Cheap Airline Tickets Great Ways tO Save</p>
          <p>Emily Harper</p>
        </div>
        <div>
          <video></video>
          <p>Take A Romantic Break In A Boutique Hotel</p>
          <p>Ethan Owen</p>
        </div>
        <div>
          <video></video>
          <p>Choose The Perfect Accomodations</p>
          <p>Lydia Perez</p>
        </div>
        <div>
          <video></video>
          <p>Cruising Destinatio Ideas</p>
          <p>Timothy Austin</p>
        </div>
        <div>
          <video></video>
          <p>Train Travek On Track for Safety</p>
          <p>Scotty Crammer</p>
        </div>
      </div>
    </aside>
  );
}

export default Gallery;
