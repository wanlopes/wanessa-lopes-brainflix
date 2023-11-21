import logo from "../assets/Logo/BrainFlix-logo.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";
import UploadButton from "../components/UploadButton";
import InputSearch from "./InputSearch";

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
              <InputSearch />
              <div className="nav__header__ctn__elements__avatar">
                <img
                  className="nav__header__ctn__elements__avatar__image"
                  src={avatar}
                  alt=""
                />
              </div>
            </div>
            <UploadButton />
            <div className="nav__header__ctn__avatar">
              <img
                className="nav__header__ctn__avatar__picture"
                src={avatar}
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
