import logo from "../assets/Logo/BrainFlix-logo.svg";
import upload from "../assets/Icons/upload.svg";
import search from "../assets/Icons/search.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav__header">
          <div className="nav__header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav__header__ctn">
            <div className="nav__header__ctn__elements">
              <div className="nav__header__ctn__elements__icon">
                <img src={search} alt="search"></img>
              </div>
              <div className="nav__header__ctn__elements__input">
                <input
                  className="nav__header__ctn__elements__input__field"
                  type="text"
                  placeholder="Search"
                ></input>
              </div>
              <div className="nav__header__ctn__elements__avatar">
                <img
                  className="nav__header__ctn__elements__avatar__image"
                  src={avatar}
                  alt=""
                />
              </div>
            </div>
            <div className="nav__header__ctn__upload">
              <button className="nav__header__ctn__upload__btn">
                <div className="nav__header__ctn__upload__btn__logo">
                  <img src={upload} alt="upload" />
                </div>
                UPLOAD
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
