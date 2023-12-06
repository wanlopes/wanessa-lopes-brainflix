import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="brainflix-logo" />
          </Link>
        </div>
      </nav>
      <form action="/search" method="get">
        <input type="file" id="searchInput" placeholder="Search..." />
        <button type="button">UPLOAD</button>
      </form>
    </header>
  );
}

export default Header;