import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";
import { educationData } from "../../content/content";

function Educations() {
  return (
    <section id="education">
      <div className="container">
        <Pagetitle title="Education" />
        <div className="row">
          <div className="col-md-12">
            <div
              className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden"
              // reverse the order of the timeline
              style={{ flexDirection: "column-reverse", display: "flex" }}
            >
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Educations;
