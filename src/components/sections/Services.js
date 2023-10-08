import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";
import { servicesData } from "../../content/content";


function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <a 
              className="colorpink pointer"
              target="_blank"
              href="https://www.linkedin.com/in/lakmal98/overlay/contact-info/"
              rel="noreferrer"
            >
              Click here
            </a>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
