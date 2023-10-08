import React from "react";
import TrackVisibility from "react-on-screen";
import { avatar, cv, description, name,progressData,counterData } from "../../content/content";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: name,
  avatarImage: avatar,
  content: description
};

const sortedProgressData = progressData.sort((a, b) => {
  return b.percentage - a.percentage;
});

// sort counter data based on title (string)
const sortedCounterData = counterData.sort((a, b) => {
  return a.title.localeCompare(b.title);
});


function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} 
              style={{borderRadius:"50%"}}/>
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href={cv} className="btn btn-default" target="_blank" rel="noreferrer">
                      View/Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {sortedProgressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <Pagetitle title="Tools & Technologies that I've worked with" />
        <div className="row fix-spacing">
          {sortedCounterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
