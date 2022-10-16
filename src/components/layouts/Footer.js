import React from "react";
import { name } from "../../content/content";

function Footer({ light }) {
  return (
    <footer className={light ? "footer light" : "footer"}>
      <div className="container">
        <span className="copyright">
          {name} | {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
