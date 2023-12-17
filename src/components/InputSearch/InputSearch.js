import React from "react";
import search from "../../assets/Icons/search.svg";
import "./InputSearch.css";

function InputSearch () {
    return (
      <>
        {/* <div className="nav__header__ctn__elements__icon">
          <img src={search} alt="search"></img>
        </div> */}
        <div className="nav__header__ctn__elements__input">
          <img src={search} alt="search" />
          <input
            className="nav__header__ctn__elements__input__field"
            type="text"
            placeholder="Search"
          />
        </div>
      </>
    );
}

export default InputSearch;