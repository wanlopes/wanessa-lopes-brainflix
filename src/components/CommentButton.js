import addcomment from "../assets/Icons/add_comment.svg";

function CommentButton () {
    return (
      <div className="main__section__elements__btn">
        <button className="main__section__elements__btn__comment">
            <div className="main__section__elements__btn __comment__icon">
                <img src={addcomment} alt="" />
            </div>
            <div className="main__section__elements__btn__comment__text">
                COMMENT
            </div>
        </button>
      </div>
    ); 
}

export default CommentButton;