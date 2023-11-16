import logo from "../assets/Logo/BrainFlix-logo.svg";
import upload from "../assets/Icons/upload.svg";
import search from "../assets/Icons/search.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <header>
      <nav className="header">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__ctn">
          <div className="header__ctn__icon">
            <img src={search} alt="search"></img>
          </div>
          <div className="header__ctn__input">
            <input type="text" placeholder="Search"></input>
          </div>
          <div className="header__ctn__avatar">
            <img className="header__ctn__avatar__image" src={avatar} alt="" />
          </div>
        </div>
        <div className="header__upload">
          <div className="header__upload__container">
            <button className="header__upload__container__btn">
              <div className="header__upload__container__btn__logo">
                <img src={upload} alt="upload" />
              </div>
              UPLOAD
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
