import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img
          src={logoSource}
          alt="Lakmal"
          style={{
            borderRadius: "50%",
            maxWidth: "100px",
          }}
        />
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/">
        <img
          src={logoSource}
          alt="Lakmal"
          style={{
            borderRadius: "50%",
            maxWidth: "100px",
          }}
        />
      </Link>
    </div>
  );
}

export default Logo;
