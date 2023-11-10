import logo from "../assets/Logo/BrainFlix-logo.svg";

function Header() {
  return (
    <header>
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}

export default Header;
