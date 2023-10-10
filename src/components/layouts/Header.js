import React, { useState } from "react";
import { Link } from "react-scroll";
import { name } from "../../content/content";
import Logo from "../elements/Logo";

function Header({ light, logoSource, toggleMenu, headerToggler }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // change theme color based on dark/light mode
  if (theme === "dark") {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  const toggleTheme = () => {
    if (theme === "dark") {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  const handleClasses = () => {
    let classes = "desktop-header-1 d-flex align-items-start flex-column";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  const handleMobileClasses = () => {
    let classes = "mobile-header-1";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  return (
    <>
      <header
        className={handleMobileClasses()}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
      >
        <div className="container">
          <div className="menu-icon d-inline-flex mr-4">
            <button onClick={headerToggler}>
              <span></span>
            </button>
          </div>
          <Logo logoSource={logoSource} />
        </div>
      </header>
      <header className={handleClasses()}>
        <Logo logoSource={logoSource} />
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <Link
                activeClass="active"
                to="section-home"
                spy={true}
                smooth={true}
                duration={0}
                onClick={toggleMenu && headerToggler}
              >
                <i className="icon-home"></i>Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-about"
                spy={true}
                smooth={true}
                duration={0}
                onClick={toggleMenu && headerToggler}
              >
                <i className="icon-user-following"></i>About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-services"
                spy={true}
                smooth={true}
                duration={0}
                onClick={toggleMenu && headerToggler}
              >
                <i className="icon-briefcase"></i>Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-experiences"
                spy={true}
                smooth={true}
                duration={0}
                onClick={toggleMenu && headerToggler}
              >
                <i className="icon-screen-desktop"></i>Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-educations"
                spy={true}
                smooth={true}
                duration={0}
                onClick={toggleMenu && headerToggler}
              >
                <i className="icon-graduation"></i>Education
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-testimoninal"
                spy={true}
                smooth={true}
                duration={0}
                onClick={toggleMenu && headerToggler}
              >
                <i className="icon-layers"></i>Works
              </Link>
            </li>
            {/* <li>
              <Link
                activeClass="active"
                to="section-blogs"
                spy={true}
                smooth={true}
                duration={0}
                onClick={toggleMenu && headerToggler}

              >
                <i className="icon-note"></i>Blog
              </Link>
            </li> */}
            <li>
              <Link
                activeClass="active"
                to="section-contact"
                spy={true}
                smooth={true}
                duration={0}
                onClick={toggleMenu && headerToggler}
              >
                <i className="icon-bubbles"></i>Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer">
          <span className="copyright">
            {name} | {new Date().getFullYear()}
          </span>
        </div>
        {/* button to switch between dark and light themes */}
        <div
          className="btn"
          onClick={(e) => {
            toggleMenu && headerToggler(e);
            toggleTheme();
          }}
          style={{
            border: "none",
            right: "1rem",
            top: "1rem",
            position: "absolute",
          }}
          title={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {theme === "dark" ? (
            <i className="fas fa-sun" style={{ color: "white" }}></i>
          ) : (
            <i className="fas fa-moon" style={{ color: "white" }}></i>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
