import logo from "../assets/Logo/BrainFlix-logo.svg";
import upload from "../assets/Icons/upload.svg";
import search from "../assets/Icons/search.svg";

function Header() {
  return (
    <header>
      <nav>
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div>{/* <img></img> */}</div>
        <div>
          <img src={search} alt="search"></img>
        </div>
        <div>
          <input></input>
        </div>
        <div className="header__upload">
          <img src={upload} alt="upload" />
        </div>
        <div>
          <button>UPLOAD</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
