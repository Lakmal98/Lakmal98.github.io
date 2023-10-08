import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";
import { experienceData } from "../../content/content";

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-12">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div
              className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden"
              // reverse the order of the timeline
              style={{
                flexDirection: "column-reverse",
                display: "flex",
              }}
            >
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
