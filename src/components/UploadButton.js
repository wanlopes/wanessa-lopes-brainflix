import upload from "../assets/Icons/upload.svg";

function UploadButton() {
  return (
    <div className="nav__header__ctn__upload">
      <button className="nav__header__ctn__upload__btn">
        <div className="nav__header__ctn__upload__btn__content">
          <div className="nav__header__ctn__upload__btn__content__logo">
            <img src={upload} alt="upload" />
          </div>
          <div className="nav__header__ctn__upload__btn__content__text">
            UPLOAD
          </div>
        </div>
      </button>
    </div>
  );
}

export default UploadButton;
