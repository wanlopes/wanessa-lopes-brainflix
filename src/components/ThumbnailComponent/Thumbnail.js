import React from "react";
import thumbnailimage from "../../assets/Images/Upload-video-preview.jpg";
import publish from "../../assets/Icons/publish.svg";
import "./Thumbnail.css";

function Thumbnail({ handleFormSubmission }) {
  return (
    <div>
      <div className="block">
        <div className="block__thumbnail">
          <div className="block__thumbnail__title">
            <h2 className="block__thumbnail__title__name">VIDEO THUMBNAIL</h2>
          </div>
          <div className="block__thumbnail__container">
            <img
              className="block__thumbnail__container__image"
              src={thumbnailimage}
              alt="thumnailimage"
            />
          </div>
        </div>
        <div className="block__wrapper">
          <div className="block__wrapper__form">
            <div className="block__wrapper__form__container">
              <div className="block__wrapper__form__container__title">
                <h2 className="block__wrapper__form__container__title__name">
                  TITLE YOUR VIDEO
                </h2>
              </div>
              <div className="block__wrapper__form__container__division">
                <form className="block__wrapper__form__container__division__tag">
                  <input
                    className="block__wrapper__form__container__division__tag__placeholder"
                    type="text"
                    placeholder="Add a title to your video"
                  ></input>
                </form>
              </div>
            </div>
          </div>
          <div className="block__wrapper__subdivision">
            <div className="block__wrapper__subdivision__title">
              <h2 className="block__wrapper__subdivision__title__name">
                ADD A VIDEO DESCRIPTION
              </h2>
            </div>
            <div className="block__wrapper__subdivision__container">
              <form
                className="block__wrapper__subdivision__container__form"
                onSubmit={handleFormSubmission}
              >
                <input
                  className="block__wrapper__subdivision__container__form__placeholder"
                  type="text"
                  placeholder="Add a description to your video"
                ></input>
                <div className="bottom-line"></div>
                <div className="buttons">
                  <div className="buttons__first">
                    <button className="buttons__first__content" type="submit">
                      <div className="buttons__first__content__wrap">
                        <div className="buttons__first__content__wrap__icon">
                          <img src={publish} alt="icon" />
                        </div>
                        <div className="buttons__first__content__wrap__publish">
                          PUBLISH
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="buttons__second">
                    <button className="buttons__second__name">CANCEL</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
