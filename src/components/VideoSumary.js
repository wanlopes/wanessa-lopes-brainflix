function VideoSumary(props) {
  return (
    <div className="sumary">
      <span className="sumary__id">{props.id}</span>
      <h4 className="sumary__title">{props.title}</h4>
      <p className="sumary__channel">{props.channel}</p>
      <div>
      <img className="sumary__image" src={props.image} alt=""></img>
      </div>
    </div>
  );
}

export default VideoSumary;
