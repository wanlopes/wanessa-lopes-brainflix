function VideoSumary(props) {
  return (
    <div>
      <span>{props.id}</span>
      <h4>{props.title}</h4>
      <p>{props.channel}</p>
      <img src={props.image} alt=""></img>
    </div>
  );
}

export default VideoSumary;
