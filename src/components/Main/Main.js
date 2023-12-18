import Gallery from "../../components/Gallery/Gallery";
import MainVideo from "../../components/MainVideo/MainVideo";
import { useEffect, useState } from "react";
import axios from "axios";


function Main() {
  const defaultVideo = { id: "84e96018-4022-434e-80bf-000ce4cd12b8" };
  const [firstVideo, setFirstVideo] = useState(defaultVideo);
  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=c7e27a6d-5f33-4cbc-b007-1c1288b3cb3f"
      )
      .then((response) => {
        setFirstVideo(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="main">
      <MainVideo props={firstVideo} setFirstVideo={setFirstVideo} />
      <Gallery
        setFirstVideo={setFirstVideo}
        firstVideo={firstVideo}
        className="main__video__comments"
      ></Gallery>
    </section>
  );
}

export default Main;
