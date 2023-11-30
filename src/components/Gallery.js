import VideoSumary from "./VideoSumary";
import videosData from "../Data/videos.json";

function Gallery({ setFirstVideo }) {
  const videos = videosData;

  return (
    <aside className="gallery">
      <section className="gallery__section">
        <div className="gallery__section__headline">
          <h2 className="gallery__section__headline__title">NEXT VIDEOS</h2>
        </div>
        <div className="gallery__section__playlist">
          {videos.map((video) => (
            <a onClick={() => setFirstVideo(video)}>
              <VideoSumary
                key={video.id}
                id={video.id}
                title={video.title}
                channel={video.channel}
                image={video.image}
              />
            </a>
          ))}
        </div>
      </section>
    </aside>
  );
}

export default Gallery;
