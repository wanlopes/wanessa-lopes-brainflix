import React from "react";
import thumbnailimage from "../../assets/Images/Upload-video-preview.jpg";
import "./Thumbnail.css";

function Thumbnail() {
  return (
    <div>
      <div className="thumbnail">
        <div className="thumbnail__title">
          <h2 className="thumbnail__title__name">VIDEO THUMBNAIL</h2>
        </div>
        <div className="thumbnail__container">
          <img
            className="thumbnail__container__image"
            src={thumbnailimage}
            alt="thumnailimage"
          />
        </div>
      </div>
      <div className="form">
        <div className="form__container">
          <div className="form__container__title">
            <h2 className="form__container__title__name">TITLE YOUR VIDEO</h2>
          </div>
          <div className="form__container__division">
            <form className="form__container__division__tag">
              <input
                className="form__container__division__tag__placeholder"
                type="text"
                placeholder="Add a title to your video"
              ></input>
            </form>
          </div>
        </div>
      </div>
      <div className="subdivision">
        <div className="subdivision__title">
          <h2 className="subdivision__title__name">
            ADD A VIDEO DESCRIPTION
          </h2>
        </div>
        <div className="subdivision__container">
          <form className="subdivision__container__form">
            <input
              className="subdivision__container__form__placeholder"
              type="text"
              placeholder="Add a description to your video"
            ></input>
          </form>
        </div>
      </div>
      <div className="buttons">
        <div className="buttons__first">
          <button className="buttons__first__name">PUBLISH</button>
        </div>
        <div className="buttons__second">
          <button className="buttons__second__name">CANCEL</button>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
