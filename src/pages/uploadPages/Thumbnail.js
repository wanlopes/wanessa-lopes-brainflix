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
            alt="thumnail-image"
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
        <div className="subdivision__container">
          <h2 className="subdivision__container__name">ADD A VIDEO DESCRIPTION</h2>
        </div>
        <div>
          <form>
            <input
              type="text"
              placeholder="Add a description to your video"
            ></input>
          </form>
        </div>
      </div>
      <div>
        <button>PUBLISH</button>
      </div>
      <div>
        <button>CANCEL</button>
      </div>
    </div>
  );
}

export default Thumbnail;
