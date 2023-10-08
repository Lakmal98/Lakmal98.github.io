import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Timeline({ education }) {
  let { start, end, title, content } = education;

  // start/end format: Jan 2010
  // calculate the years and months between start and end dates
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const totalNumberOfMonths =
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear()) +
    1;
  const years = Math.floor(totalNumberOfMonths / 12);
  const months = totalNumberOfMonths % 12;

  // override start/end format
  start =
    startDate.toLocaleString("default", { month: "short" }) +
    " " +
    startDate.getFullYear();
  end =
    endDate.toLocaleString("default", { month: "short" }) +
    " " +
    endDate.getFullYear();

  // show months or years if only exist
  const experience = `${start} - ${end} (${years ? years + " year/s" : ""} ${
    months ? months + " month/s" : ""
  })`;

  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="timeline-container">
        <div className="content">
          <span className="time">{experience}</span>
          <h3 className="title">{title}</h3>
          <p>
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
