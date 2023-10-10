import React from "react";
import { socialMedia } from "../../content/content";

function Social() {
  return (
    <div>
      <ul className="social-icons dark list-inline mb-0 mt-4">
        <li className="list-inline-item">
          <a
            href={socialMedia?.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href={socialMedia?.gitlab}
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <i className="fab fa-gitlab"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href={socialMedia?.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href={socialMedia?.whatsapp}
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
