import VideoSumary from "./VideoSumary";
import videosData from "../Data/videos.json";

function Gallery({setFirstVideo}) {
  const videos = videosData;
  
  return (
    <aside className="gallery">
      <section>
        {videos.map((video) => (
          <a onClick= {() => setFirstVideo(video)}>
            <VideoSumary
              id={video.id}
              title={video.title}
              channel={video.channel}
              image={video.image}
            />
          </a>
        ))}
      </section>
    </aside>
  );
}

export default Gallery;
