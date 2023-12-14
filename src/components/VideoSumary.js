
function VideoSumary(props) {
  return (
    <div className="sumary">
        <div className="sumary__wrap">
          <img className="sumary__wrap__image" src={props.image} alt=""></img>
        </div>
        <div className="sumary__elements">
          <span className="sumary__elements__id">{props.id}</span>
          <h4 className="sumary__elements__title">{props.title}</h4>
          <p className="sumary__elements__channel">{props.channel}</p>
        </div>
    </div>
  );
}

export default VideoSumary;
