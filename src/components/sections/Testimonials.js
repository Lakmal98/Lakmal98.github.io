import React from "react";
import Pagetitle from "../elements/Pagetitle";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Clients & Review" />
      </div>
      <div className="container">
        <iframe
          width="100%"
          height="700px"
          src="https://www.fiverr.com/lakmalepp"
          title="Fiverr Reviews"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}

export default Testimonials;
