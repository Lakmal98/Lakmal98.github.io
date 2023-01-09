import React from "react";
import ScrollAnimation from "react-animate-on-scroll";


function Timeline({ education }) {
  const { years, title, content } = education;
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="timeline-container">
        <div className="content">
          <span className="time">{years}</span>
          <h3 className="title">{title}</h3>
          <p >
            {content.length > 2000
              ? content.substring(0, 2000) + "..."
              : content}
          </p>

        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Timeline;
