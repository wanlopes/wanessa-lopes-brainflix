import React, { useState } from "react";
import addcomment from "../assets/Icons/add_comment.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";

function InputComments() {
  const [inputState, setInputState] = useState({
    active: false,
    error: false,
  });

  const handleFocus = () => {
    setInputState({ ...inputState, active: true });
  };

  const handleError = () => {
    setInputState({ ...inputState, error: true });
  };

  const handleBlur = () => {
    setInputState({ ...inputState, active: false, error: false });
  };

  return (
    // <div>
    //   <div className="main__section">
    //     <div className="main__section__div">
    //       <h2 className="main__section__div__title">JOIN THE CONVERSATION</h2>
    //     </div>
    //     <div className="main__section__elements">
    //       <div className="main__section__elements__cont">
    //         <div className="main__section__elements__cont__avatar">
    //           <img
    //             className="main__section__elements__cont__avatar__image"
    //             src={avatar}
    //             alt=""
    //           />
    //         </div>
    //         <div>
    //           <form className="main__section__elements__cont__form">
    //             <input
    //               className={`main__section__elements__cont__form__input ${
    //                 inputState.error
    //                   ? "error"
    //                   : inputState.active
    //                   ? "active"
    //                   : "default"
    //               }`}
    //               type="text"
    //               placeholder="Add a new comment"
    //               onFocus={handleFocus}
    //               onBlur={handleBlur}
    //               onError={handleError}
    //             />
    //           </form>
    //         </div>
    //       </div>
    //       <div className="main__section__elements__btn">
    //         <button className="main__section__elements__btn__comment">
    //           <div className="main__section__elements__btn__comment__pack">
    //             <div className="main__section__elements__btn __comment__pack__icon">
    //               <img src={addcomment} alt="" />
    //             </div>
    //             <div className="main__section__elements__btn__comment__pack__text">
    //               COMMENT
    //             </div>
    //           </div>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="main__section">
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
            <form className="main__section__elements__cont__form">
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
                onFocus={handleFocus}
                onBlur={handleBlur}
                onError={handleError}
              />
            </form>
          </div>
        </div>
        <div className="main__section__elements__btn">
          <button className="main__section__elements__btn__comment">
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
    </div>
  );
}

export default InputComments;
