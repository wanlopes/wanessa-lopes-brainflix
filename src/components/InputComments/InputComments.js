import React, { useState } from "react";
import addcomment from "../../assets/Icons/add_comment.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./InputComments.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function InputComments({ videoId }) {
  const [inputState, setInputState] = useState({
    active: false,
    error: false,
  });
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFocus = () => {
    setInputState({ ...inputState, active: true });
  };

  const handleError = () => {
    setInputState({ ...inputState, error: true });
  };

  const handleBlur = () => {
    setInputState({ ...inputState, active: false, error: false });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    axios
      .post(`http://localhost:3001/videos/${videoId}/comments`, {
        name: "Name.User",
        comment: formData.comment,
      })
      .catch((error) => {
        console.error("Error creating comment: ", error);
      });
  };

  return (
    <div className="main__section">
      <form onSubmit={handleSubmit}>
        <div className="main__section__div">
          <h2 className="main__section__div__title">JOIN THE CONVERSATION</h2>
        </div>
        <div className="main__section__elements">
          <div className="main__section__elements__cont">
            <div className="main__section__elements__cont__avatar">
              <img
                className="main__section__elements__cont__avatar__image"
                src={avatar}
                alt=""
              />
            </div>
            <div>
              <div className="main__section__elements__cont__form">
                <input
                  className={`main__section__elements__cont__form__input ${
                    inputState.error
                      ? "error"
                      : inputState.active
                      ? "active"
                      : "default"
                  }`}
                  type="text"
                  placeholder="Add a new comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onError={handleError}
                />
              </div>
            </div>
          </div>
          <div className="main__section__elements__btn">
            <button
              className="main__section__elements__btn__comment"
              type="submit"
            >
              <div className="main__section__elements__btn__comment__pack">
                <div className="main__section__elements__btn__comment__pack__icon">
                  <img src={addcomment} alt="" />
                </div>
                <div className="main__section__elements__btn__comment__pack__text">
                  COMMENT
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="main__section__line"></div>
      </form>
    </div>
  );
}

export default InputComments;
