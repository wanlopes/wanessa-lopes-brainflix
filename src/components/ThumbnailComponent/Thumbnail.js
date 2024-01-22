import React, { useState } from "react";
import thumbnailimage from "../../assets/Images/Upload-video-preview.jpg";
import publish from "../../assets/Icons/publish.svg";
import "./Thumbnail.css";
import axios from "axios";

function Thumbnail() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    axios
      .post("http://localhost:3001/videos", {
        title: formData.title,
        channel: "Channel.User",
        description: formData.description,
        name: "Name.User",
        image: "http://localhost:3001/images/ibLw5q5.jpg",
        comments: [],
      })
      .catch((error) => {
        console.error("Error fetching videos: ", error);
      });
  };

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
          <form
            className="block__wrapper__form__container__division__tag"
            onSubmit={handleSubmit}
          >
            <div className="block__wrapper__form">
              <div className="block__wrapper__form__container">
                <div className="block__wrapper__form__container__title">
                  <h2 className="block__wrapper__form__container__title__name">
                    TITLE YOUR VIDEO
                  </h2>
                </div>
                <div className="block__wrapper__form__container__division">
                  <input
                    className="block__wrapper__form__container__division__tag__placeholder"
                    type="text"
                    name="title"
                    placeholder="Add a title to your video"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  ></input>
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
                <input
                  className="block__wrapper__subdivision__container__form__placeholder"
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Add a description to your video"
                  required
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
