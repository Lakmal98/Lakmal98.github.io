// NotFound.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

export function NotFound() {
  return (
    <div
      className="not-found"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        Return to the <Link to="/">homepage</Link>.
      </p>
    </div>
  );
}
