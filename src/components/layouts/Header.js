import React from "react";
import { Link } from "react-scroll";
import { name } from "../../content/content";
import Logo from "../elements/Logo";

function Header({ light, logoSource, toggleMenu, headerToggler }) {
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
        // sticky="top"
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
      </header>
    </>
  );
}

export default Header;
