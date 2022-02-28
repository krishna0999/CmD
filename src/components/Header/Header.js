import React, { useContext, useEffect, useState } from "react";
import logo from "../../CmD.png";
import moviesContext from "../../context/moviesContext";
import "./Header.css";

function Header() {
  const [select, setSelect] = useState("popular");
  const context = useContext(moviesContext);
  const { getGenericMovies } = context;

  document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
      return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]");
      currentDropdown.classList.add("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
    });
  });

  useEffect(() => {
    const buttons = document.querySelectorAll(".links");

    Array.from(buttons).forEach((item) => {
      // console.log(item.innerHTML);
      item.addEventListener("click", (e) => {
        setSelect(e.target.value);
      });
    });
    getGenericMovies(select);
  }, [select]);

  console.log(select);

  return (
    <div className="header">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>

      <div className="header__input">
        <div
          className="header__inputImage"
          style={{
            padding: "0.3rem 0.8rem",
            background: "rgb(197, 83, 17)",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            boxShadow: "2px 0 2px rgba(0,0,0,0.7)",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"
            alt=""
          />
        </div>
        <input type="text" placeholder="Search for movies..." />
      </div>

      <div className="dropdowns">
        <div className="dropdown" data-dropdown>
          <button className="link" data-dropdown-button>
            Category
          </button>
          <div className="dropdown-menu">
            <div>
              <div className="dropdown-links">
                <button className="links" value="popular">
                  Popular
                </button>
                <button className="links" value="latest">
                  Latest
                </button>
                <button className="links" value="top_rated">
                  Top-rated
                </button>
                <button className="links" value="upcoming">
                  Upcoming
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown" data-dropdown>
          <button className="link" data-dropdown-button>
            Genre
          </button>
          <div className="dropdown-menu">
            <div>
              <div className="dropdown-links">
                <a href="#" className="links">
                  Comedy
                </a>
                <a href="#" className="links">
                  Horror
                </a>
                <a href="#" className="links">
                  Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="header__menu">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div> */}
    </div>
  );
}

export default Header;
